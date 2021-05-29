import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';

describe('<Button />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Button name="teste" />);
  });
});
