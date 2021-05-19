import { Story, Meta } from '@storybook/react/types-6-0';
import ItemMenu from '.';
import categories from './categories';

export default {
  title: 'ItemMenu',
  component: ItemMenu,
} as Meta;

export const Default: Story = () => <ItemMenu categories={categories} />;
