import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Ho Huu An. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Ho Huu An, a Software Engineer born in 2003 and based in Hồ Chí Minh City. I specialize in AI and full-stack development, currently working at FamiSoft Digital Technology Company Limited. My expertise spans LLM agents, RAG pipelines, Computer Vision, multimodal systems, and ERP/CRM platforms. I'm passionate about creating real-world AI tools that are scalable and intuitive. As a quick learner who's product-driven, I'm particularly excited about applying AI in healthcare, energy, finance, education, and pharmaceuticals. I hold a B.Sc. in Computer Science from Ton Duc Thang University (graduating October 2025) with a GPA of 8.81/10, and I've earned 4 scholarships for academic excellence along with C1 English proficiency.",
    };
  },
});
