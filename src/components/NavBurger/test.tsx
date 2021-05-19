import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import NavBurger from '.';

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

describe('<NavBurger />', () => {
  it('should render the heading', () => {
    renderWithTheme(<NavBurger />);

    fireEvent.click(screen.getByLabelText(/BurgerIcon/i));
    expect(screen.getByLabelText(/BurgerIcon/i)).toBeInTheDocument();
  });
});
