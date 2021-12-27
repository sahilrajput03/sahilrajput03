Javascript:

[Src](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

```
const { log: l } = require("console");
const target = {
  message1: "hello",
  message2: "everyone",
  o1: {
    o2: "call him",
  },
};

const handler2 = {
  get: function (target, prop, receiver) {
    l("@get:prop", prop);
    l("@get:target", target);
    l("@get:receiver", receiver);
    l("");
    return Reflect.get(...arguments); // here arguments means all the arguments of the fn.
  },
};

const proxy2 = new Proxy(target, handler2);

proxy2.o1.o2;
proxy2.a;
proxy2.b;
proxy2.c;

```
