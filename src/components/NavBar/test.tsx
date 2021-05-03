import { render, screen } from '@testing-library/react';

import NavBar from '.';

describe('<NavBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<NavBar />);

    expect(
      screen.getByRole('heading', { name: /NavBar/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
