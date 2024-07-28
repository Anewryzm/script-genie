'use client'
import { useState } from "react";
import TextArea from "./components/textarea";
import SkeletonLoader from "./components/skeletonLoader";
import TextResponse from "./components/textResponse";
import Hints from "./components/hints";

import { generateScript } from './actions';
import { readStreamableValue } from "ai/rsc";

import { Button } from "@/components/ui/button"

export default function Home() {
  const [query, setQuery] = useState('');
  const [response, setResponse]:any = useState('');
  const [loading, setLoading] = useState(false);
  const [hints, setHints] = useState(true)


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setResponse('');
    setHints(false);
    setLoading(true);
    // Send API request here
    const result = await generateScript(query);
    setLoading(false);

    // Update response state with API response
    for await (const content of readStreamableValue(result)){
      setResponse(content);
    }
  };

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
          {hints ? <Hints/> : <></>}
          {loading ? <SkeletonLoader /> : response && <TextResponse response={response} />}
        </div>
      </div>
    </main>
  );
}
