'use server'

import { createStreamableValue } from "ai/rsc";
import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { promptTemplate } from "./promptTemplate";

// You should create a .env.local file in the root of the project and add the following:
// GROQ_BASE_URL=https://api.groq.com/openai/v1
// GROQ_API_KEY=your_groq_api_key

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: process.env.GROQ_BASE_URL,
});

const model = groq('llama3-70b-8192')

export async function generateScript(query: string) {
  const {textStream} = await streamText({
    model: model,
    prompt: promptTemplate + query,
    maxTokens: 500,
  })

  // console.log(result.responseMessages[0].content)
  const {value} = createStreamableValue(textStream);
  return value;

}