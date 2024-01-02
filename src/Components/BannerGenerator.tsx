import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

export const generateText = async (desc) => {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      {
        role: 'user',
        content:
          'generate an instagram add title and a 5 word text with the following subject',
      },
      {
        role: 'assistant',
        content:
          "Certainly! I'd be happy to help you generate an Instagram ad text. However, I'll need more details about the subject or product you'd like the ad to focus on. Could you please provide more information or specify the subject of the ad?",
      },
      { role: 'user', content: desc },
    ],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0]);
};
