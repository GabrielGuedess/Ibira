import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { LogoProps } from '.';

const wrapperModifiers = {
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }
    `}
  `,
};

export const Wrapper = styled.div<LogoProps>`
  ${({ hideOnMobile }) => css`
    width: 13.9rem;
    height: 5.3.5.8rem;
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`;
