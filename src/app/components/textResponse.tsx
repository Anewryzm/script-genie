import {Card, CardContent} from "@/components/ui/card"
import ReactMarkdown from "react-markdown"

const TextResponse = ({ response }:{response:string}) => {
  return (
    <Card className="min-h-[250px] bg-black border-white border-opacity-50 border-dashed rounded-none text-white prose prose-strong:text-white prose-h5:font-bold prose-hr:mt-6 prose-hr:mb-6 prose-hr:border-white prose-hr:border-opacity-50 prose-hr:border-dashed">
      <CardContent>
        <ReactMarkdown>
          {response}
        </ReactMarkdown>
      </CardContent>
    </Card>
  );
};

export default TextResponse;