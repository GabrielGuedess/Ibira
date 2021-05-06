import styled, { css, DefaultTheme } from 'styled-components';

type ConfigNavProps = {
  nav?: boolean | 'off';
  backgroundNav?: 'transparent' | 'black' | 'transparentBlack';
};
type CartProps = {
  cartIsOpen?: boolean;
};

const NavModifiers = {
  dinamicBackground: (
    theme: DefaultTheme,
    { backgroundNav, nav }: ConfigNavProps,
  ) => css`
    position: ${nav ? 'fixed' : 'absolute'};
    background: ${theme.colorsNav[backgroundNav!]};
  `,

  noDinamic: (theme: DefaultTheme, { nav }: ConfigNavProps) => css`
    background: ${theme.colorsNav.black};
    position: ${nav === 'off' && 'fixed'};
    top: 0;
  `,
};

const ModalOutside = {
  modalOpen: (theme: DefaultTheme) => css`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${theme.layers.base};
  `,

  modalClose: () => css`
    display: none;
  `,
};
export const Wrapper = styled.menu<ConfigNavProps>`
  ${({ theme, backgroundNav, nav }) => css`
    ${nav
      ? NavModifiers.dinamicBackground(theme, { backgroundNav, nav })
      : NavModifiers.dinamicBackground(theme, { backgroundNav, nav })};
    ${nav === 'off' && NavModifiers.noDinamic(theme, { nav })}
    width: 100%;
    display: flex;
    align-items: center;
    height: 9rem;
    padding: 0.8rem 1.6rem;
    transition: 0.5s;
  `}
`;

export const WrapperLogo = styled.div`
  margin: 0 0 0 2.9rem;
`;

export const WrapperItemsNav = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const ListItemsNav = styled.ul`
  ${({ theme }) => css`
    display: flex;
    margin: 1rem 0 0 11rem;

    li {
      position: relative;
      display: flex;
      justify-content: center;
      margin: 0 4rem 0 0;
      list-style: none;
      a {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        font-family: ${theme.font.fontNav};
        font-size: ${theme.font.sizes.sizeFontNav};
        color: ${theme.colorsNav.textNav};
        font-weight: 400;
        transition: 0.4;
        text-decoration: none;
      }

      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0.5rem;
        background-color: ${theme.colors.primary};
        box-shadow: 0 0 1rem ${theme.colors.primary};
        border-radius: 0.2rem;
        transform: translateY(2.9rem);
        transition: 0.4s;
      }

      &:hover {
        a {
          color: ${theme.colors.primary};
        }

        &::after {
          width: 100%;
        }
      }
    }
  `}
`;

export const WrapperIcons = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    z-index: ${theme.layers.menu};
  `}
`;

export const IconsLi = styled.li`
  position: relative;
  margin: 0 0.75rem 0 0.75rem;
  list-style: none;
`;

export const HoverIcons = styled.div`
  ${({ theme }) => css`
    border-radius: 5rem;
    width: 5rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      width: 2.8rem;
      height: 2.8rem;
      fill: ${theme.colorsNav.iconNav.icon};
      transition: 0.3s ease-in-out;
    }

    &:hover {
      .containerAnim {
        svg g g g path {
          fill: ${theme.colorsNav.iconNav.iconHover};
        }
      }

      svg {
        fill: ${theme.colorsNav.iconNav.iconHover};
        filter: drop-shadow(0px 0px 5px ${theme.colorsNav.iconNav.iconHover});
      }

      .burger {
        background: ${theme.colorsNav.iconNav.iconHover};
        box-shadow: 0 0 10px ${theme.colorsNav.iconNav.iconHover};
        ::before,
        ::after {
          background: ${theme.colorsNav.iconNav.iconHover};
          box-shadow: 0 0 10px ${theme.colorsNav.iconNav.iconHover};
        }
      }
      .containerAnim {
        pointer-events: none;
      }

      .containerAnim {
        svg g g path {
          fill: ${theme.colorsNav.iconNav.icon};
          transition: 0.3s;
        }
      }
    }
  `}
`;

export const HamburgerMenu = styled.div`
  ${({ theme }) => css`
    width: 3.2rem;
    height: 0.3rem;
    background: ${theme.colorsNav.iconNav.icon};
    border-radius: 0.3rem;
    transition: 0.5s ease-in-out;

    &::before {
      content: '';
      position: absolute;
      width: 3.2rem;
      height: 0.3rem;
      background: ${theme.colorsNav.iconNav.icon};
      border-radius: 0.3rem;
      transition: all 0.5s ease-in-out;
      transform: translateY(-8px);
    }

    &::after {
      content: '';
      position: absolute;
      width: 3.2rem;
      height: 0.3rem;
      background: ${theme.colorsNav.iconNav.icon};
      border-radius: 0.3rem;
      transition: all 0.5s ease-in-out;
      transform: translateY(8px);
    }
  `}
`;

export const NumberProducts = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 1.4rem;
    background: ${theme.colors.primary};
    box-shadow: 0 0 0.5rem ${theme.colors.primary},
      0 0 1rem ${theme.colors.primary};
    bottom: -0.8rem;
    color: ${theme.colorsNav.iconNav.icon};
    font-size: ${theme.font.sizes.sizeFontBag};
  `}
`;

export const ContainerCart = styled.div<CartProps>`
  ${({ theme, cartIsOpen }) => css`
    position: absolute;
    display: flex;
    width: 35rem;
    height: ${cartIsOpen ? '55rem' : '0'};
    opacity: ${cartIsOpen ? '1' : '0'};
    transition: 1.7s;
    align-items: center;
    flex-direction: column;
    top: 7rem;
    left: -15rem;
    border-radius: 0.5rem;
    background-color: ${theme.colorsNav.bag};
    box-shadow: 1rem 1rem 2.9rem 0 rgba(0, 0, 0, 0.24);
    z-index: ${theme.layers.menu};

    &::before {
      content: '';
      position: absolute;
      opacity: ${cartIsOpen ? '1' : '0'};
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0.5rem 0.5rem 0.5rem;
      border-color: transparent transparent #fff transparent;
      top: -0.4rem;
      transition: 1.7s;
      pointer-events: none;
    }
  `}
`;
export const ModalClickOutSide = styled.div<CartProps>`
  ${({ theme, cartIsOpen }) => css`
    ${cartIsOpen ? ModalOutside.modalOpen(theme) : ModalOutside.modalClose}
  `}
`;
