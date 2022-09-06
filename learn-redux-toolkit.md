# Learn redux-toolkit

[@Github](https://github.com/reduxjs/redux-toolkit)

Api:

- [`createReducer()`](https://redux-toolkit.js.org/api/createReducer)

Source: Above link.

```ts
import { createAction, createReducer } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction<number>('counter/incrementByAmount')

const initialState = { value: 0 } as CounterState

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
})
```

- **Looks pretty stable:**

![image](https://user-images.githubusercontent.com/31458531/188593979-7a5b7aa8-4dba-407d-95d6-c1d5869b8cdd.png)

- [Writing Reducers with Immer](https://redux-toolkit.js.org/usage/immer-reducers)
