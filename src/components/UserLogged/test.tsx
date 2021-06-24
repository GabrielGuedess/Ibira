import { renderWithTheme } from 'utils/tests/helpers';

import UserLogged from '.';

describe('<UserLogged />', () => {
  it('should render the heading', () => {
    renderWithTheme(<UserLogged />);
  });
});
