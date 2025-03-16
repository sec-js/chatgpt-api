import 'dotenv/config'

import { createMastraTools } from '@agentic/mastra'
import { WeatherClient } from '@agentic/weather'
import { openai } from '@ai-sdk/openai'
import { Agent } from '@mastra/core/agent'

async function main() {
  const weather = new WeatherClient()

  const weatherAgent = new Agent({
    name: 'Weather Agent',
    instructions: 'You are a helpful assistant. Be as concise as possible.',
    model: openai('gpt-4o-mini'),
    tools: createMastraTools(weather)
  })

  const res = await weatherAgent.generate(
    'What is the weather in San Francisco?'
  )
  console.log(res.text)
}

await main()
