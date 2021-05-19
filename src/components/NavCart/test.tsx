import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import NavCart from '.';

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

describe('<NavCart />', () => {
  it('should render the Modal Cart when to click at the container', () => {
    renderWithTheme(<NavCart />);

    fireEvent.click(screen.getByLabelText(/CartIcon/i));
    expect(screen.getByLabelText(/Modal Cart/i)).toHaveStyle({
      opacity: 1,
    });
  });

  it('should remove the Modal Cart when to click at the container', () => {
    renderWithTheme(<NavCart />);

    fireEvent.click(screen.getByLabelText(/CartIcon/i));
    expect(screen.getByLabelText(/Modal Cart/i)).toHaveStyle({
      opacity: 1,
    });

    fireEvent.click(screen.getByLabelText(/Modal Click/i));
    expect(screen.getByLabelText(/Modal Cart/i)).toHaveStyle({
      opacity: 0,
    });
  });
});
