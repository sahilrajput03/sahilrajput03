# Learn ChatGPT

- My Conversations with ChatGPT: [Click here](https://gist.github.com/sahilrajput03/c209167002a8a52722b09fa73456e3a1)


## Tokenizer

Source: Official Tokenizer Page from ChatGPT: [platform.openai.com/tokenizer](https://platform.openai.com/tokenizer)

The GPT family of models process text using tokens, which are common sequences of characters found in text. The models understand the statistical relationships between these tokens, and excel at producing the next token in a sequence of tokens.

You can use the tool below to understand how a piece of text would be tokenized by the API, and the total count of tokens in that piece of text.

A helpful rule of thumb is that **one token generally corresponds to ~4 characters of text for common English text**. This translates to **roughly ¾ of a word (so 100 tokens ~= 75 words)**.

If you need a programmatic interface for tokenizing text, check out our [tiktoken](https://github.com/openai/tiktoken) package for Python. For JavaScript, the [gpt-3-encoder](https://www.npmjs.com/package/gpt-3-encoder) package for node.js works for most GPT-3 models.
