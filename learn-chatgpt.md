# Learn ChatGPT

# TODO: Continue reading docs from here ..

- [Tutorials - Get started with the OpenAI API by building real AI apps step by step.](https://platform.openai.com/docs/tutorials)
- **TODO: (must watch) - 5minutes youtube video: Awesome course and amazing free youtube courses here - [Click here](https://www.youtube.com/watch?v=dZL78JUxZ20)**
  - *Link to all courses in video description.*
- All About AI - Youtube Channel: [Click here](https://www.youtube.com/@AllAboutAI/playlists), Website: [allabtai.com](https://www.allabtai.com/)
- OpenAI Cookbook @ Github (Awesome): [Click here](https://github.com/openai/openai-cookbook)

***

***ChatGPT was released publicy on 30 November 2022.***

**Quick Links:**
- My Conversations with ChatGPT: [Click here](https://gist.github.com/sahilrajput03/c209167002a8a52722b09fa73456e3a1)
- **Learn ChatGPT Api (Github Repository): [Click here](https://github.com/sahilrajput03/learn-chatgpt-api)**

**Courses I found on Coursera:**
- Prompt Engineering for ChatGPT ~ Vanderbilt University (USA) comparable to Cornell University): [Click here](https://www.coursera.org/learn/prompt-engineering)
- Generative AI with Large Language Models: [Click here](https://www.coursera.org/learn/generative-ai-with-llms)
- Build AI Apps with ChatGPT, Dall-E, and GPT-4: [Click here](https://www.coursera.org/learn/build-ai-apps-with-chatgpt-dalle-gpt4)

**Docs Links:**
- **OpenAI Platform:**
  - Overview: [Click here](https://platform.openai.com/)
  - **Documentation:** [Click here](https://platform.openai.com/docs/introduction)
    - Build a ChatGPT plugin:
      - Introduction: [Click here](https://platform.openai.com/docs/plugins/introduction)
      - Example plugins: [Click here](https://platform.openai.com/docs/plugins/examples)
  - **❤ API Referece ❤:** [Click here](https://platform.openai.com/docs/api-reference)
  - Examples: [Click here](https://platform.openai.com/examples)
  - Playground: [Click here](https://platform.openai.com/playground)
  - Forum/Community: [Click here](https://community.openai.com/categories)
- ChatGPT **Release Notes of all versions**: [Click here](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- **Awesome** official set of articles on variety of topics, ranging from Billing to Usage of OpenAI APIs: [Click here](https://help.openai.com/en/)
- Whisper (Audio model by OpenAI, Speech to text): [Click here](https://platform.openai.com/docs/guides/speech-to-text)
  -  Pricing: $0.006 / minute (rounded to the nearest second)
-  Deprecations of Models, Endpoints, etc: [Click here](https://platform.openai.com/docs/deprecations)

## Quickstart tutoril - OpenAI end notes

Source: [Click here](https://platform.openai.com/docs/quickstart/closing)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/6a086262-8684-46b2-b1f8-6f85de38448e)

## Completions

**Correct**

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/67245c92-5787-417b-9fc9-aa10635a05f7)

**Incorrect:**

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/3d7239f6-18ab-42df-9ed5-6b40751bff11)

## List of `gpt-3.5-turbo` models from api - `/models`

```
gpt-3.5-turbo-16k-0613
gpt-3.5-turbo
gpt-3.5-turbo-16k
gpt-3.5-turbo-0613
gpt-3.5-turbo-0301
```

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

Source of below image: [Click here](https://platform.openai.com/docs/models/gpt-3-5)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/9d223818-4055-4658-a616-d28400c91a73)


## DEEP DIVE - Understanding tokens and probabilities

Source: Official Quickstart Guide from OpenAI: [Click here](https://platform.openai.com/docs/quickstart/start-with-an-instruction)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/e05aadc7-dea4-40ea-9954-7ce45ef13e25)


##  Pricing - 1/2 Most cost effective model

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/2c1c031a-d7b1-4e44-a726-e626cb5b785f)

## Pricing - 2/2

Source Pricing: [Click here](https://openai.com/pricing#language-models)
- **Cost of 1k input tokens + cost of 1k output tokens = (0.0015 + 0.002) = 0.0035 $ (2.90 Rs.)**
- Article from Open AI - What are tokens and how to count them? : [Click here](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/2afe3188-6b1e-4c1c-8e26-f9d6d5377c04)

Image - 1/2 - **Free Trial gives you 5$** (Date: 5 September, 2023).

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/506fb091-8405-4922-bcf8-f6a855db146b)

Image - 2/2 - **Free Trial gives you 5$** (Date: 5 September, 2023).

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/42d906e5-4710-4ba3-b487-b201a84c49f4)

**❤️ ❤️ ❤️ Personalized model training ❤️ ❤️ ❤️ :**

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/cb78c0ab-6860-4449-bbc7-dd783a4fa979)


## Rate Limits

Source: [Click here](https://platform.openai.com/account/rate-limits)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/cbb41e63-8753-45a6-9b7d-d5d0dfb3ad61)

## Tokenizer

Source: Official Tokenizer Page from ChatGPT: [platform.openai.com/tokenizer](https://platform.openai.com/tokenizer)

The GPT family of models process text using tokens, which are common sequences of characters found in text. The models understand the statistical relationships between these tokens, and excel at producing the next token in a sequence of tokens.

You can use the tool below to understand how a piece of text would be tokenized by the API, and the total count of tokens in that piece of text.

A helpful rule of thumb is that **one token generally corresponds to ~4 characters of text for common English text**. This translates to **roughly ¾ of a word (so 100 tokens ~= 75 words)**.

If you need a programmatic interface for tokenizing text, check out our [tiktoken](https://github.com/openai/tiktoken) package for Python. For JavaScript, the [gpt-3-encoder](https://www.npmjs.com/package/gpt-3-encoder) package for node.js works for most GPT-3 models.

## Compartible models for each endpoint

Source - Docs: [Click here](https://platform.openai.com/docs/models/model-endpoint-compatibility)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/73d08ce9-3582-4508-91e1-c9719fc9c2f1)

## Zero Retention

Source - Docs: [Click here](https://platform.openai.com/docs/models/how-we-use-your-data)

- To help identify abuse, API data may be retained for up to 30 days, after which it will be deleted (unless otherwise required by law). For trusted customers with sensitive applications, zero data retention may be available. With zero data retention, request and response bodies are not persisted to any logging mechanism and exist only in memory in order to serve the request.
- Note that this data policy does not apply to OpenAI's non-API consumer services like ChatGPT or DALL·E Labs.

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/2779056f-6b34-4280-9350-4278310ff025)
