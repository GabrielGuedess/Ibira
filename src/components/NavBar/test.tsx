import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import ContextProviders from '../../hooks/provider';

import NavBar from '.';

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

describe('<NavBar />', () => {
  it('should render the Menu', () => {
    renderWithTheme(
      <ContextProviders>
        <NavBar />
      </ContextProviders>,
    );

    expect(screen.getByLabelText(/Container Menu/i)).toBeInTheDocument();
  });

  it('should render the Menu with effect dinamic', () => {
    renderWithTheme(
      <ContextProviders>
        <NavBar dinamic />
      </ContextProviders>,
    );

    fireEvent.scroll(window, {
      target: { scrollY: 1000 },
    });

    expect(screen.getByLabelText(/Container Menu/i)).toHaveStyle({
      position: 'absolute',
    });

    fireEvent.scroll(window, {
      target: { scrollY: 400 },
    });

    expect(screen.getByLabelText(/Container Menu/i)).toHaveStyle({
      position: 'absolute',
    });

    fireEvent.scroll(window, {
      target: { scrollY: 1000 },
    });
  });

  it('should render the Menu not dinamic', () => {
    renderWithTheme(
      <ContextProviders>
        <NavBar />
      </ContextProviders>,
    );

    expect(screen.getByLabelText(/Container Menu/i)).toHaveStyle({
      position: 'fixed',
    });

    expect(screen.getByLabelText(/Container Menu/i)).toHaveStyle({
      background: 'rgb(0, 0, 0)',
    });
  });

  it('should render the Menu black', () => {
    renderWithTheme(
      <ContextProviders>
        <NavBar />
      </ContextProviders>,
    );

    expect(screen.getByLabelText(/Container Menu/i)).toHaveStyle({
      background: 'rgb(0, 0, 0)',
    });
  });
});
