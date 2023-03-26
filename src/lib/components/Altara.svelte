<script lang="ts">
	import ChatMessage from '$lib/components/ChatMessage.svelte'
	import Navbar from "$lib/components/Navbar.svelte";
	import type { ChatCompletionRequestMessage } from 'openai'
	import { SSE } from 'sse.js'

	let query: string = ''
	let answer: string = ''
	let loading: boolean = false
	let chatMessages: ChatCompletionRequestMessage[] = []
	let scrollToDiv: HTMLDivElement

	function scrollToBottom() {
		setTimeout(function () {
			scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })
		}, 100)
	}

	const handleSubmit = async () => {
		loading = true
		chatMessages = [...chatMessages, { role: 'user', content: query }]

		const eventSource = new SSE('/api/chat', {
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ messages: chatMessages })
		})

		query = ''

		eventSource.addEventListener('error', handleError)

		eventSource.addEventListener('message', (e) => {
			scrollToBottom()
			try {
				loading = false
				if (e.data === '[DONE]') {
					chatMessages = [...chatMessages, { role: 'assistant', content: answer }]
					answer = ''
					return
				}

				const completionResponse = JSON.parse(e.data)
				const [{ delta }] = completionResponse.choices

				if (delta.content) {
					answer = (answer ?? '') + delta.content
				}
			} catch (err) {
				handleError(err)
			}
		})
		eventSource.stream()
		scrollToBottom()
	}

	function handleError<T>(err: T) {
		loading = false
		query = ''
		answer = ''
		console.error(err)
	}
</script>

<div class="relative">
    <div class="card ">
        <div class="h-[600px] bg-zinc-900  bg-opacity-90 rounded-xl p-4 overflow-y-auto flex flex-col min-w-[400px] gap-4  max-w-sm">
            <div class="flex flex-col gap-2 text-left">
                <ChatMessage type="assistant" message="Hello, how can I help you today?" />
                {#each chatMessages as message}
                    <ChatMessage type={message.role} message={message.content} />
                {/each}
                {#if answer}
                    <ChatMessage type="assistant" message={answer} />
                {/if}
                {#if loading}
                    <div class="animate-pulse">
                        <ChatMessage type="assistant" message="Thinking..." />
                    </div>
                {/if}
				<div class=" bg-black max-w-none" bind:this={scrollToDiv} />
            </div>
            
        </div>
    </div>
</div>
<form
		class="flex max-w-2xl rounded-md gap-4 bg-transparent p-4"
		on:submit|preventDefault={() => handleSubmit()}
	>
		<input placeholder="Type here" type="text" class="input input-bordered w-full min-w-[338px] bg-zinc-900 border-primary " bind:value={query} />
		<button type="submit" class="btn btn-primary bg-zinc-900"> ➟	 </button>
	</form>
    <!--
		<div>
        <a href="/">
            <p class="text-sm pb-6 text-gray-700">Home</p>
        </a>
    </div>

	-->