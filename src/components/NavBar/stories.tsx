import { Story, Meta } from '@storybook/react/types-6-0';
import NavBar, { MenuProps } from '.';

export default {
  title: 'NavBar',
  component: NavBar,
} as Meta;

export const Desktop: Story<MenuProps> = args => <NavBar {...args} />;

Desktop.parameters = {
  layout: 'fullscreen',
};

export const Mobile: Story<MenuProps> = args => <NavBar {...args} />;

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1',
  },
};
