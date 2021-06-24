import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export type OpenUserProps = {
  isOpenUser?: boolean;
};

export const Wrapper = styled.div<OpenUserProps>`
  ${({ theme, isOpenUser }) => css`
    position: relative;
    border-radius: 5rem;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${media.greaterThan('medium')`
      margin: 0 0.75rem 0 0.75rem;
    `}

    svg {
      width: 2.8rem;
      height: 2.8rem;
      transition: 0.3s ease-in-out;
      fill: ${
        isOpenUser
          ? theme.colorsNav.iconNav.iconHover
          : theme.colorsNav.iconNav.icon
      };
      filter: drop-shadow(${isOpenUser ? '0 0 0.5rem' : '0 0 0 0'} ${
    isOpenUser && theme.colorsNav.iconNav.iconHover
  });
      ${media.lessThan('medium')`
        width: 2.5rem;
        height: 2.5rem;
    `}
    }

    &:hover {
      svg {
        fill: ${theme.colorsNav.iconNav.iconHover};
        filter: drop-shadow(0 0 0.5rem ${theme.colorsNav.iconNav.iconHover});
      }
  `}
`;

export const ModalUserClick = styled.div<OpenUserProps>`
  ${({ isOpenUser }) => css`
    position: ${isOpenUser ? 'fixed' : 'none'};
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
  `}
`;
