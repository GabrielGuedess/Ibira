import { renderWithTheme } from 'utils/tests/helpers';

import MenuModal from '.';

describe('<MenuModal />', () => {
  it('should render the body without scroll', () => {
    renderWithTheme(<MenuModal isOpenMenuNav />);

    expect(document.body).toHaveStyle({
      overflow: 'hidden',
    });
  });

  it('should render the body with scroll', () => {
    renderWithTheme(<MenuModal />);

    expect(document.body).toHaveStyle({
      overflow: 'auto',
    });
  });
});
