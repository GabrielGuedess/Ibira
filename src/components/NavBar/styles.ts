import styled, { css, DefaultTheme } from 'styled-components';
import { MenuProps } from '.';

const NavModifiers = {
  dinamicBackground: (
    theme: DefaultTheme,
    { backgroundNav, nav }: MenuProps,
  ) => css`
    position: ${nav ? 'fixed' : 'absolute'};
    background: ${theme.colorsNav[backgroundNav!]};
  `,

  noDinamic: (theme: DefaultTheme, { nav }: MenuProps) => css`
    background: ${theme.colorsNav.black};
    position: ${nav === 'off' && 'fixed'};
    top: 0;
  `,
};

export const Wrapper = styled.menu<MenuProps>`
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
    transition: 1s;
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
      font-family: 'Work Sans';
      font-size: 1.8rem;
      color: white;
      font-weight: 400;
      transition: 400ms;
      text-decoration: none;
    }

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0.5rem;
      background-color: red;
      box-shadow: 0 0 1rem red;
      border-radius: 0.2rem;
      transform: translateY(2.9rem);
      transition: 400ms;
    }

    &:hover {
      a {
        color: red;
      }

      &::after {
        width: 100%;
      }
    }
  }
`;
