# Learn Storybook

- Opensoure Design Systems with Storybook: [Click here](https://dev.to/zymantaskatinas/9-amazing-open-source-storybooks-3a8o)
- OFFICIAL: Project that use StoryBook: [Click here](https://storybook.js.org/showcase/projects)
- Storybook Blogs: [Click here](https://storybook.js.org/blog/tag/open-source/)
- **TODO_URGENT - 15mins only - Egghead Course free: [Click here](https://egghead.io/lessons/react-configure-react-storybook-for-use-with-typescript)**

**Quick Links in Docs:**
- **Args:** [Click here](https://storybook.js.org/docs/react/writing-stories/args)
- ArgsTypes: [Click here](https://storybook.js.org/docs/react/api/argtypes)- How to write stories: [Click here](https://storybook.js.org/docs/react/writing-stories/introduction#using-args)
- Configure Typescript: [Click here](https://storybook.js.org/docs/react/configure/typescript)
- Writing Stories in Typescript: [Click here](https://storybook.js.org/blog/writing-stories-in-typescript/)
- Controls: [Click here](https://storybook.js.org/docs/react/essentials/controls)



**typescript error:**
- `cannot use namespace as type`: [Click here](https://www.google.com/search?q=cannot+use+namespace+as+type)


**Way1 Custom Args type:**

```js
import { ComponentStory } from '@storybook/react';

type SwitchStory = ComponentStory<typeof Switch>;

const Template: SwitchStory = (args) => <Switch {...args} />;

export const Checked: SwitchStory = Template.bind({});
Checked.args = {
  isChecked: false,
};
export const UnChecked: SwitchStory = Template.bind({});
Checked.args = {
  isChecked: true,
};

```

**Generic Args Type:**

```js
import { Story } from '@storybook/react';

const Template: Story = (args: any) => <Switch {...args} />;

export const Checked: Story = Template.bind({});
Checked.args = {
  // Beware: props are not typeschecked here
  isChecked: false,
};

```
