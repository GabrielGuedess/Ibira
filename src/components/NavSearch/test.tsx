import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import NavSearch from '.';

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

describe('<NavSearch />', () => {
  it('should render the NavSearch', () => {
    renderWithTheme(<NavSearch />);
    expect(screen.getByLabelText(/SearchIcon/i)).toBeInTheDocument();
  });

  it('should increase width the Search Input', () => {
    renderWithTheme(<NavSearch />);
    fireEvent.click(screen.getByLabelText(/Container SVG/i));
    expect(screen.getByLabelText(/Input Search/i)).toHaveStyle({
      width: '20rem',
    });
  });
});
