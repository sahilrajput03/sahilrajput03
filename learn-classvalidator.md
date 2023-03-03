# Learn `classvalidator`

- Validating Arrays: [Click here](https://github.com/typestack/class-validator#validating-arrays) - If your field is an array and you want to perform validation of each item in the array you must specify a special each: true decorator option:

```js
import { MinLength, MaxLength } from 'class-validator';

export class Post {
  @MaxLength(20, {
    each: true,
  })
  tags: string[];
}
```
