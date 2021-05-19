import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import NavList from '.';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
    };
  },
}));

describe('<NavList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<NavList />);
    expect(screen.getByLabelText(/NavList/i)).toBeInTheDocument();
  });
});
