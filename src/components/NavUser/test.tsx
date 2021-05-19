import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import NavUser from '.';

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

describe('<NavUser />', () => {
  it('should render the NavUser', () => {
    renderWithTheme(<NavUser />);
    expect(screen.getByLabelText(/UserIcon/i)).toBeInTheDocument();
  });

  it('should render the Modal Login/User', () => {
    renderWithTheme(<NavUser />);
    expect(
      screen.getByLabelText(/Modal LoginUser/i).getAttribute('aria-hidden'),
    ).toBe('true');

    fireEvent.click(screen.getByLabelText(/UserIcon/i));

    expect(
      screen.getByLabelText(/Modal LoginUser/i).getAttribute('aria-hidden'),
    ).toBe('false');

    expect(screen.getByLabelText(/Modal LoginUser/i)).toHaveStyle({
      position: 'fixed',
    });
  });
});
