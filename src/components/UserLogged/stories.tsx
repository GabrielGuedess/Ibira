import { Story, Meta } from '@storybook/react/types-6-0';
import UserLogged from '.';

export default {
  title: 'UserLogged',
  component: UserLogged,
} as Meta;

export const Default: Story = () => <UserLogged />;
