import { Story, Meta } from '@storybook/react/types-6-0';
import NavBar, { MenuProps } from '.';

export default {
  title: 'NavBar',
  component: NavBar,
} as Meta;

export const Default: Story<MenuProps> = args => <NavBar {...args} />;

Default.parameters = {
  layout: 'fullscreen',
};
