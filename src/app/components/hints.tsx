import {Card, CardContent} from "@/components/ui/card"
import ReactMarkdown from "react-markdown"

const Hints = () => {

  const hintText = `hey there! 
  i hope you are doing well.
  here is how i can assist you.
  `

  return (
    <Card className="min-h-[250px] bg-black border-white border-opacity-50 border-dashed rounded-none text-white prose prose-strong:text-white prose-h5:font-bold prose-hr:mt-6 prose-hr:mb-6 prose-hr:border-white prose-hr:border-opacity-50 prose-hr:border-dashed lowercase prose-code:whitespace-pre-wrap  prose-pre:bg-neutral-950 prose-pre:rounded-none">
      <CardContent>
        <ReactMarkdown>
          {hintText}
        </ReactMarkdown>
      </CardContent>
    </Card>
  );
};

export default Hints;