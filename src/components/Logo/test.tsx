import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import 'jest-styled-components';

import Logo from '.';

describe('<Logo />', () => {
  it('should render the Logo', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Ibira/i)).toBeInTheDocument();
  });
});
