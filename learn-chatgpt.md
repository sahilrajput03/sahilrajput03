# Learn ChatGPT

# TODO: Continue reading docs from here ..

[Click here](https://platform.openai.com/docs/quickstart/adjust-your-settings)

***ChatGPT was released publicy on 30 November 2022.***

**Quick Links:**
- My Conversations with ChatGPT: [Click here](https://gist.github.com/sahilrajput03/c209167002a8a52722b09fa73456e3a1)
- **Learn ChatGPT Api (Github Repository): [Click here](https://github.com/sahilrajput03/learn-chatgpt-api)**

**Courses I found on Coursera:**
- Prompt Engineering for ChatGPT ~ Vanderbilt University (USA) comparable to Cornell University): [Click here[(https://www.coursera.org/learn/prompt-engineering)
- Generative AI with Large Language Models: [Click here](https://www.coursera.org/learn/generative-ai-with-llms)
- Build AI Apps with ChatGPT, Dall-E, and GPT-4: [Click here](https://www.coursera.org/learn/build-ai-apps-with-chatgpt-dalle-gpt4)

**Docs Links:**
- **OpenAI Platform:**
  - Overview: [Click here](https://platform.openai.com/)
  - **Documentation:** [Click here](https://platform.openai.com/docs/introduction)
    - Build a ChatGPT plugin:
      - Introduction: [Click here](https://platform.openai.com/docs/plugins/introduction)
      - Example plugins: [Click here](https://platform.openai.com/docs/plugins/examples)
  - **API Referece:** [Click here](https://platform.openai.com/docs/api-reference)
  - Examples: [Click here](https://platform.openai.com/examples)
  - Playground: [Click here](https://platform.openai.com/playground)
  - Forum/Community: [Click here](https://community.openai.com/categories)
- ChatGPT **Release Notes of all versions**: [Click here](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- **Awesome** official set of articles on variety of topics, ranging from Billing to Usage of OpenAI APIs: [Click here](https://help.openai.com/en/)
- Whisper (Audio model by OpenAI, Speech to text): [Click here](https://platform.openai.com/docs/guides/speech-to-text)
  -  Pricing: $0.006 / minute (rounded to the nearest second)


## General Terminologies

Source: Official Quickstart Guide from OpenAI: [Click here](https://platform.openai.com/docs/quickstart/start-with-an-instruction)

- The completions endpoint is the core of our API and provides a simple interface that’s extremely flexible and powerful. You input some text as a prompt, and the API will return a text completion that attempts to match whatever instructions or context you gave it.
- Designing your prompt is essentially how you “program” the model.
- Prompt design isn’t the only tool you have at your disposal. You can also control completions by adjusting your settings. One of the most important settings is called temperature.
  - You may have noticed that if you submitted the same prompt multiple times in the examples above, the model would always return identical or very similar completions. This is because your temperature was set to 0.
  - Try re-submitting the same prompt a few times with temperature set to 1.
  - See what happened? When temperature is above 0, submitting the same prompt results in different completions each time.
  - Remember that the model predicts which text is most likely to follow the text preceding it. Temperature is a value between 0 and 1 that essentially lets you control how confident the model should be when making these predictions. Lowering temperature means it will take fewer risks, and completions will be more accurate and deterministic. Increasing temperature will result in more diverse completions.
  - For your pet name generator, you probably want to be able to generate a lot of name ideas. A moderate temperature of 0.6 should work well.

## DEEP DIVE - Understanding tokens and probabilities

Source: Official Quickstart Guide from OpenAI: [Click here](https://platform.openai.com/docs/quickstart/start-with-an-instruction)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/e05aadc7-dea4-40ea-9954-7ce45ef13e25)


## Pricing

Source Pricing: [Click here](https://openai.com/pricing#language-models)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/2afe3188-6b1e-4c1c-8e26-f9d6d5377c04)

## Tokenizer

Source: Official Tokenizer Page from ChatGPT: [platform.openai.com/tokenizer](https://platform.openai.com/tokenizer)

The GPT family of models process text using tokens, which are common sequences of characters found in text. The models understand the statistical relationships between these tokens, and excel at producing the next token in a sequence of tokens.

You can use the tool below to understand how a piece of text would be tokenized by the API, and the total count of tokens in that piece of text.

A helpful rule of thumb is that **one token generally corresponds to ~4 characters of text for common English text**. This translates to **roughly ¾ of a word (so 100 tokens ~= 75 words)**.

If you need a programmatic interface for tokenizing text, check out our [tiktoken](https://github.com/openai/tiktoken) package for Python. For JavaScript, the [gpt-3-encoder](https://www.npmjs.com/package/gpt-3-encoder) package for node.js works for most GPT-3 models.
