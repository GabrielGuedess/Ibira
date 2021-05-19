import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export type MenuNavProps = {
  isOpenMenuNav?: boolean;
};

export const Wrapper = styled.div<MenuNavProps>`
  ${({ theme, isOpenMenuNav }) => css`
    position: relative;
    margin: 0 0.75rem 0 0.75rem;
    border-radius: 5rem;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: ${theme.layers.closeNavMenu};
    ${media.lessThan('medium')`
      margin: 0;
    `}

    &:hover {
      > div {
        background: ${isOpenMenuNav
          ? 'transparent'
          : theme.colorsNav.iconNav.iconHover};
        box-shadow: ${isOpenMenuNav ? '0 0 0' : '0 0 1rem'}
          ${isOpenMenuNav ? 'transparent' : theme.colorsNav.iconNav.iconHover};
        ::before,
        ::after {
          background: ${theme.colorsNav.iconNav.iconHover};
          box-shadow: 0 0 1rem ${theme.colorsNav.iconNav.iconHover};
        }
      }
    }
  `}
`;

export const HamburgerMenu = styled.div<MenuNavProps>`
  ${({ theme, isOpenMenuNav }) => css`
    width: 3.2rem;
    height: 0.3rem;
    background: ${isOpenMenuNav ? 'transparent' : theme.colorsNav.iconNav.icon};
    transform: ${isOpenMenuNav && 'translateX(-2rem)'};
    border-radius: 0.3rem;
    transition: 0.3s ease-in-out;

    ${media.lessThan('medium')`
      width: 2rem;
      height: 0.2rem;
    `}

    &::before,
    ::after {
      content: '';
      position: absolute;
      width: 3.2rem;
      height: 0.3rem;
      background: ${isOpenMenuNav
        ? theme.colorsNav.iconNav.iconHover
        : theme.colorsNav.iconNav.icon};
      border-radius: 0.3rem;
      box-shadow: ${isOpenMenuNav && '0 0 1rem red'};
      transition: 0.3s ease-in-out;
      transform: ${isOpenMenuNav
        ? 'rotate(45deg) translate(1.5rem, -1.5rem)'
        : 'translateY(-0.8rem)'};

      ${media.lessThan('medium')`
        width: 3rem;
        height: 0.2rem;
      `}
    }

    &::before {
      transform: ${isOpenMenuNav
        ? 'rotate(45deg) translate(1.5rem, -1.5rem)'
        : 'translateY(-0.8rem)'};
    }

    &::after {
      transform: ${isOpenMenuNav
        ? 'rotate(-45deg) translate(1.5rem, 1.5rem)'
        : 'translateY(0.8rem)'};
    }
  `}
`;
