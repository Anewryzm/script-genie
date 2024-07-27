'use client'
import { useState } from "react";
import TextArea from "./components/textarea";
import SkeletonLoader from "./components/skeletonLoader";
import TextResponse from "./components/textResponse";
import Hints from "./components/hints";

import { Button } from "@/components/ui/button"

export default function Home() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    // Send API request here
    console.log('Sending API request with query:', query);
    // Update response state with API response
    setLoading(false);
    setResponse(rawResponse);
  };

  const rawResponse =`
  Based on the input, I'll create a script for a 30-second video on the importance of storytelling in marketing. Here's the output:

SCRIPT:

"Want to make your brand unforgettable?

Think about your favorite childhood story. What made it so memorable? It was more than just words on a page - it was the emotions, the characters, and the connection you felt.

That's what storytelling can do for your brand.

Take, for example, the brilliant marketing campaign by [Brand Name]. They used storytelling to create an emotional connection with their customers, and it paid off big time.

By sharing relatable stories, you can increase customer engagement, build brand loyalty, and make your marketing strategies more effective.

So, what's your brand's story?

Learn more about how to use storytelling in your marketing strategy by visiting our website and start connecting with your customers on a deeper level."

This script aims to convey the importance of storytelling in marketing in a concise, informal, and humorous tone, using a relatable analogy and a real-life example to illustrate the concept. The call-to-action is clear, inviting the audience to learn more and take action.

  `

  return (
    <main className="flex min-h-screen flex-col items-center justify-normal p-12 md:p-24 bg-black text-white">
      <div className="flex flex-col xl:flex-row gap-12 w-full justify-center">
        <div className="xl:w-[600px] xl:max-w-[600px] sm:w-full md:w-[600px] mx-auto xl:m-0 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <TextArea query={query} setQuery={setQuery}/>
            <Button type="submit" className="mt-2 bg-white text-black rounded-none text-lg hover:bg-white">generate script</Button>
          </form>
        </div>
        <div className="xl:w-[680px] max-w-[680px] w-full mx-auto xl:m-0">
          {!response && !loading ? <Hints/> : <></>}
          {loading ? <SkeletonLoader /> : response && <TextResponse response={response} />}
        </div>
      </div>
    </main>
  );
}
