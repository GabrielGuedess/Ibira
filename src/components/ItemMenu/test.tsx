import { renderWithTheme } from 'utils/tests/helpers';

import ItemMenu from '.';
import categories from './categories';

describe('<ItemMenu />', () => {
  it('should render the SubCategory in Desktop', () => {
    renderWithTheme(<ItemMenu categories={categories} />);
  });
});
