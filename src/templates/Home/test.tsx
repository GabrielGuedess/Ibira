import { renderWithTheme } from 'utils/tests/helpers';
import ContextProviders from '../../hooks/provider';

import Home from '.';

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

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <ContextProviders>
        <Home />
      </ContextProviders>,
    );
  });
});
