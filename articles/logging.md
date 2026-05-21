# Good logging

*Date: 21 May 2026*

Is it a thing?

**YES, YES, YES!**

```js
// ❌ bad logging
console.log("here");
console.log("got it");
console.log("123123");

// ✅ GOOD LOGGING
console.log('[TelegramBot]');
console.log('[Scheduler]');
console.log('[OpenAI]');

console.log('[Auth] User login started', { userId });
console.log('[DB] Query failed', { err, query });
```

**TODO: Some reads for myself:**
- Logging Best Practices: 12 Dos and Don'ts: [Click here](https://betterstack.com/community/guides/logging/logging-best-practices/?utm_source=chatgpt.com)
- 8 Factors for Choosing a Logging Framework: [Click here](https://betterstack.com/community/guides/logging/logging-framework/)
    - [winston](https://github.com/winstonjs/winston)
- A Complete Guide to Winston Logging in Node.js: [Click here](https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/)
