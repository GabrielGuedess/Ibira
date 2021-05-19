import { MenuNavProps } from 'components/NavBurger/styles';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div<MenuNavProps>`
  ${({ theme, isOpenMenuNav }) => css`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.menuOpen.colorPrimary};
    z-index: ${theme.layers.overlay};
    opacity: ${isOpenMenuNav ? 1 : 0};
    pointer-events: ${isOpenMenuNav ? 'all' : 'none'};
    transform: ${isOpenMenuNav ? 'translateY(0)' : 'translateY(-100%)'};
    transition: 1s ease-in-out;
  `}
`;

export const WrapperGif = styled.img`
  width: 35%;
  object-fit: cover;

  ${media.lessThan('huge')`
    width: 30%;
  `}

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const ContainerNav = styled.div`
  width: 65%;
  overflow: auto;

  ${media.lessThan('huge')`
    width: 70%;
  `}

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

export const WrapperLogo = styled.div`
  height: 9rem;
  display: flex;
  align-items: center;

  ${media.lessThan('medium')`
    height: 7rem;
    margin-left: 2rem;
  `}
`;

export const WrapperItems = styled.div`
  height: calc(100% - 9rem);
  padding: 2rem 4rem 2rem 2rem;
  display: flex;
  flex-wrap: wrap;

  ${media.lessThan('medium')`
    padding: 0;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    /* padding-bottom: 6rem; */
  `}
`;
