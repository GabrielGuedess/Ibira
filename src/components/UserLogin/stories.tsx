import { Story, Meta } from '@storybook/react/types-6-0';
import UserLogin from '.';

export default {
  title: 'UserLogin',
  component: UserLogin,
} as Meta;

export const Default: Story = () => <UserLogin />;
