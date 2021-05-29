import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import LogoSecondary from '.';

describe('<LogoSecondary />', () => {
  it('should render the heading', () => {
    renderWithTheme(<LogoSecondary />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
