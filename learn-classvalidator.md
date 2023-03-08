# Learn `classvalidator`

**Learn NestJS:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/master/learn-nestjs.md)

- How do we perform data-type conversions in params and query dto's?

We can use `Type` decorator i.e, `@Type` from [`class-transformer`](https://github.com/typestack/class-transformer#working-with-nested-objects).

From official docs: 

![image](https://user-images.githubusercontent.com/31458531/223854237-fc9dcb6f-762d-4723-b9b9-ac8b88bbaa1e.png)

![image](https://user-images.githubusercontent.com/31458531/223854014-42ba73dd-427d-496a-b311-c3acbdf8d4d9.png)


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


- File: `custom-class-validator-validation-classes.ts`:

Docs: [Custom Validation Classes](https://github.com/typestack/class-validator#custom-validation-classes)

```ts
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { LocationType } from '../types';

@ValidatorConstraint({ name: 'isValidMongoDbLocation', async: false })
export class IsValidMongoDbLocation implements ValidatorConstraintInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  validate(location: Partial<LocationType>, args: ValidationArguments) {
    return location?.type === 'Point'
    && location?.coordinates?.length === 2
    && location?.coordinates?.every((value) => typeof (value) === 'number');
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  defaultMessage(args: ValidationArguments) {
    return "The 'location' field must have a shape of { type: 'Point', coordinates: [number, number] }";
  }
}
```
