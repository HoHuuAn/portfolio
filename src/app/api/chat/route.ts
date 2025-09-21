import { openai } from "@ai-sdk/openai"
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getBackground } from './tools/getBackground';

export const maxDuration = 30;

function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    messages.unshift(SYSTEM_PROMPT);

    const tools = {
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getBackground
    };

    const result = streamText({
      model: openai("gpt-4o"),
      messages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    console.error('Global error:', err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
