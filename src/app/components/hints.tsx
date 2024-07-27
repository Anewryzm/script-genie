import {Card, CardContent} from "@/components/ui/card"
import ReactMarkdown from "react-markdown"

const Hints = () => {

  const hintText = `hey there! 
  i hope you are doing well.
  here is how i can assist you.
  
  To generate a script, I need a detailed input that includes the following elements:
  
  - **Theme or Topic**: A brief description of the topic or theme you want the script to be about.
  - **Main Message**: A concise statement of the main idea or message you want to convey to your audience.
  - **Target Audience**: A description of the target audience for the script, including their interests, needs, and level of understanding.
  - **Tone and Style**: An indication of the tone and style you want to convey in the script, such as formal, informal, humorous, or inspirational.
  - **Key Concepts**: A list of key concepts or ideas you want to include in the script.
  - **Desired Length**: An indication of the desired length of the script, such as 15 seconds, 30 seconds, 1 minute, etc.
  - **Examples or Analogies**: Any examples, analogies, or metaphors you want to use to illustrate the concept or idea.
  - **Call to Action**: A description of the call to action you want to include at the end of the script, such as "Learn more," "Sign up," or "Visit our website."
  
  Here's an example of a detailed input:

  **INPUT**
  
  - **Theme or Topic**: The importance of storytelling in marketing.
  - **Main Message**: Storytelling is a powerful way to connect with customers and increase brand loyalty.
  - **Target Audience**: Marketing professionals and business owners who want to improve their marketing strategies.
  - **Tone and Style**: Informal, conversational, and humorous. **Key Concepts**: Emotional connection, customer engagement, brand loyalty, marketing strategies.
  - **Desired Length**: 30 seconds.
  - **Examples or Analogies**: Use the example of a brand that successfully used storytelling in their marketing campaign.
  - **Call to Action**: Learn more about how to use storytelling in your marketing strategy by visiting our website. By providing a detailed input like this, I can generate a script that effectively conveys your message to your target audience.

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