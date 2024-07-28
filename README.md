<img width="1600" alt="Hashnode Banner" src="https://github.com/user-attachments/assets/3c4474bb-922d-486f-b9ad-2280bda3c4ee">

# ScriptGenie: ai-powered scriptwriting for short videos

Save time and effort by generating engaging scripts for Instagram, TikTok, YouTube Shorts, and beyond.

## Introduction
It's possible to use AI for good-quality short-form content creation only when it is used well.

You need to understand your process for content creation to get great results leveraging AI. Sometimes it takes some research, ideation, writing, recording, editing, and so on. But most of the time the hard part is getting clear what's in your content piece. The script.

Script Genie allows you to save part of that time on content creation by writing your script draft.

## Features
![script-genie-demo](https://github.com/user-attachments/assets/0aa0e641-fb8d-411f-b5fb-8868c4d8ada0)

- You can put a simple and straight 'create a script about {topic}' and it will start creating, but it could be better.
- You can provide a topic with the key message you want to share in your content piece.
- You can come up with information (like a summary of a topic) and place it for the assistant to create your script.
- You can set your target audience.
- You can set the style and tone for your script
- You can set additional references (examples) to set a bias for your script.
- If you are trying to explain something on video, you can provide key concepts to be considered in the script.
- You can add details about the call-to-action (CTA) for your script.
- You can set the desired length for your script: words extension or duration.
- You can set analogies to be used in your script.
- And you can ask for feedback on your script.

You will find a fully detailed guide on how to use the app in the Hints component or on the main page.

### [Read the full article about this project on Hashnode](https://cardoza.hashnode.dev/scriptgenie-ai-powered-scriptwriting-for-short-videos)

## How to use it locally

**1. Clone the repository:**
```bash
git clone https://github.com/Anewryzm/script-genie.git
```

**2. Install the dependencies:**

```bash
npm install
```

**3. Define your environment variables in the .env.local file:**

You will need to add this file at the root of the folder and set the following variables:

```
GROQ_BASE_URL=https://api.groq.com/openai/v1
GROQ_API_KEY=your_groq_api_key
```

**4. Start the server and run the app:**
```
 npm run dev
```

## Closer Look at the Environment Variables
- `GROQ_API_KEY`: Your Groq API key. You can get this by signing up for an account on the Groq platform and creating a new API key.
- `GROQ_BASE_URL`: The Groq base URL string. You can check more information about it [here](https://console.groq.com/docs/openai).

## Got some feedback?
Feel free to drop me a DM on:

- Twitter/X: [@thatCardoza](https://twitter.com/thatCardoza)
- Linkedin: [Enrique Cardoza](https://www.linkedin.com/in/enrique-cardoza/)
- Instagram: [@thatCardoza](https://instagram.com/thatcardoza)

- ## License
This project is licensed under the Apache License. See the [LICENSE](LICENSE) for more information.
