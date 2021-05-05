import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import NavBar from '.';

describe('<NavBar />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<NavBar />);

    expect(screen.getByLabelText(/Container Menu/i)).toBeInTheDocument();
  });

  it('should render the Menu with effect dinamic', () => {
    renderWithTheme(<NavBar dinamic />);

    fireEvent.scroll(window, {
      target: { scrollY: 1000 },
    });

    expect(screen.getByLabelText(/Container Menu/i)).toHaveStyle({
      position: 'absolute',
    });

    fireEvent.scroll(window, {
      target: { scrollY: 0 },
    });

    expect(screen.getByLabelText(/Container Menu/i)).toHaveStyle({
      position: 'absolute',
    });

    fireEvent.scroll(window, {
      target: { scrollY: 1000 },
    });
  });

  it('should render the Menu not dinamic', () => {
    renderWithTheme(<NavBar />);

    expect(screen.getByLabelText(/Container Menu/i)).toHaveStyle({
      position: 'fixed',
    });

    expect(screen.getByLabelText(/Container Menu/i)).toHaveStyle({
      background: 'black',
    });
  });

  it('should render the Menu black', () => {
    renderWithTheme(<NavBar />);

    expect(screen.getByLabelText(/Container Menu/i)).toHaveStyle({
      background: 'black',
    });
  });
});
