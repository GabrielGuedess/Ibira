import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

type ConfigNavProps = {
  nav?: boolean | 'off';
  backgroundNav?: 'transparent' | 'black' | 'transparentBlack';
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
    ${media.lessThan('medium')`
      height: 7rem;
      justify-content: space-between;
    `}
  `}
`;

export const WrapperLogo = styled.div`
  ${media.lessThan('large')`
    display: flex;
    flex: 1;
`}
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`}
`;

export const WrapperIcons = styled.ul`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    z-index: ${theme.layers.menu};
  `}
`;

export const IconsLi = styled.li`
  position: relative;
  margin: 0 0.75rem 0 0.75rem;
  list-style: none;

  ${media.lessThan('medium')`
      margin: 0;
    `}
`;
