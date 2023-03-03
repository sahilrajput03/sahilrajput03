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


- File: `custom-class-validator-validation-classes.ts`:

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
