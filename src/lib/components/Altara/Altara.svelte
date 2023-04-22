<script lang="ts">
    import ChatMessage from "../ChatMessage.svelte";
    import type  { ChatCompletionRequestMessage } from 'openai'
    import { SSE } from 'sse.js'

    let query: string = ''
	let answer: string = ''
	let loading: boolean = false
	let chatMessages: ChatCompletionRequestMessage[] = []
	let scrollToDiv: HTMLDivElement

    function scrollToBottom() {
        setTimeout(function () {
            scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })
        })
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