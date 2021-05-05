import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import 'jest-styled-components';

import Logo from '.';

describe('<Logo />', () => {
  it('should render the Logo', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Ibira/i)).toBeInTheDocument();
  });

  it('should render the logo in mobile', () => {
    renderWithTheme(<Logo hideOnMobile />);

    expect(screen.getByLabelText(/Ibira/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)',
      },
    );
  });
});
