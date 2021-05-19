import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type OpenUserProps = {
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

export const UserLogin = styled.div<OpenUserProps>`
  ${({ theme, isOpenUser }) => css`
    position: fixed;
    opacity: ${isOpenUser ? 1 : 0};
    pointer-events: ${isOpenUser ? 'all' : 'none'};
    right: ${isOpenUser ? 0 : '-25%'};
    top: 0;
    bottom: 0;
    width: 25%;
    background: #121212;
    transition: 0.6s ease-in-out;
    z-index: ${theme.layers.modal};

    ${media.lessThan('huge')`
      width: 38rem;
    `}

    ${media.lessThan('large')`
      right: 0;
      top: 0;
      bottom: 0;
      left: ${isOpenUser ? 0 : '-100%'};
      width: 100%;
    `}
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

export const CloseX = styled.div<OpenUserProps>`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    top: 4.5rem;
    left: 2rem;
    transform: translateY(-50%);
    border-radius: 5rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &::before,
    ::after {
      content: '';
      position: absolute;
      width: 3.2rem;
      height: 0.3rem;
      background: ${theme.colorsNav.iconNav.iconHover};
      border-radius: 0.3rem;
      box-shadow: 0 0 1rem red;
      transition: 0.3s ease-in-out;
      transform: rotate(45deg);

      ${media.lessThan('medium')`
        width: 3rem;
        height: 0.2rem;
      `}
    }

    &::after {
      transform: rotate(-45deg);
    }

    ${media.lessThan('medium')`
      width: 5rem;
      height: 5rem;
      top: 3.5rem;
      left: 1.5rem;
    `}
  `}
`;
