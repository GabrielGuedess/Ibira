import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 13.9rem;
  height: 5.3.5.8rem;
  margin: 0 0 0 2.9rem;
  ${media.lessThan('medium')`
      width: 10rem;
      margin: 0;
    `}
`;
