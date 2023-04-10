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

	const MESSAGE_LIMIT = 10;
	let messageCount = 0;


	const handleSubmit = async () => {
		if (messageCount >= MESSAGE_LIMIT - 1) {
		return;
		}

		messageCount++;

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
		{#if messageCount >= 3}
		<div class="alert alert-success shadow-lg">
			<div>
			  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
			  <span>You got the hang of it!</span>
			</div>
		  </div>
		{/if}
		{#if messageCount >= MESSAGE_LIMIT - 3}
		<div class="alert alert-warning shadow-lg">
			<div>
			  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
			  <span>Warning: You are about to hit the message limit</span>
			</div>
		  </div>
		{/if}
		{#if messageCount >= MESSAGE_LIMIT - 1}
		<div class="alert alert-error shadow-lg">
			<div>
			  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
			  <span>You reached the message limit for this demo</span>
			</div>
		  </div>
		{/if}
		

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
		<input placeholder="Type here" type="text" class="input input-bordered w-full min-w-[338px] bg-zinc-900 " bind:value={query} />
		<button type="submit" class="btn bg-zinc-900"> ➟	 </button>
	</form>
    <!--
		<div>
        <a href="/">
            <p class="text-sm pb-6 text-gray-700">Home</p>
        </a>
    </div>

	-->