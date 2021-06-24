import { renderWithTheme } from 'utils/tests/helpers';

import UserLogin from '.';

describe('<UserLogin />', () => {
  it('should render the heading', () => {
    renderWithTheme(<UserLogin />);
  });
});
