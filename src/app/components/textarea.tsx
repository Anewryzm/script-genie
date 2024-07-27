import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"

const TextArea = ({ query, setQuery }:{query:string, setQuery: (value: string) => void}) => {
  return (
    <div className="flex flex-col gap-4 bg-black text-white">
      <Label htmlFor="query" className="text-lg">what are we going to create today?:</Label>
      <Textarea id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="we can start with a topic, tell me what you need and i will do the rest..."
        className="min-h-[250px] focus-visible:ring-offset-1 pt-3 pl-4 pr-4 pb-3 rounded-none border-none font-light text-base leading-relaxed bg-neutral-950 placeholder:text-neutral-500"
      />
    </div>
  );
};

export default TextArea;