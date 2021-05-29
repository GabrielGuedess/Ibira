import { renderWithTheme } from 'utils/tests/helpers';

import Input from '.';

describe('<Input />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Input name="teste" type="email" />);
  });
});
