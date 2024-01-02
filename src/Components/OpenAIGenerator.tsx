import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

export const GenerateImage = async (desc) => {
  const image = await openai.images.generate({
    prompt: desc,
    n: 1,
    size: '512x512',
  });
  return image.data[0].url;
};

export const GenerateText = async (desc) => {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      {
        role: 'user',
        content:
          'Generate an Instagram add title, a 7 word text, a call to action button with the following subject, like this: Title: Text: Button:',
      },
      {
        role: 'assistant',
        content:
          "Could you please provide me with the subject you'd like an Instagram ad title, text, button for?",
      },
      { role: 'user', content: desc },
    ],
    model: 'gpt-3.5-turbo',
  });

  if (completion.choices && completion.choices.length > 0) {
    const assistantMessage = completion.choices[0].message;

    if (assistantMessage && assistantMessage.role === 'assistant') {
      // Assuming the assistant message contains the generated content
      const generatedContent = assistantMessage.content;

      // Parse the generated content to extract title and text
      const titleRegex = /Title: "(.*?)"/;
      const textRegex = /Text: "(.*?)"/;
      const buttonRegex = /Button: "(.*?)"/;

      const extractedTitle = generatedContent.match(titleRegex);
      const extractedText = generatedContent.match(textRegex);
      const extractedButton = generatedContent.match(buttonRegex);

      const title = extractedTitle ? extractedTitle[1] : 'Title not found';
      const text = extractedText ? extractedText[1] : 'Text not found';
      const button = extractedButton
        ? extractedButton[1]
        : 'Button text not found';

      return { title, text, button };
    }
  }

  // Return default values or handle cases where title or text couldn't be extracted
  return {
    title: 'Title not found',
    text: 'Text not found',
    button: 'Button text not found',
  };
};
