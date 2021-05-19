import styled, { css, DefaultTheme } from 'styled-components';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';
import media from 'styled-media-query';
import { MobileProps } from '.';

export type CartProps = {
  cartIsOpen?: boolean;
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

  mobile: () => css`
    position: absolute;
    bottom: 5rem;
    left: 5rem;
  `,
};

const mobileAndDesktop = {
  desktop: () => css`
    position: relative;
  `,
  mobile: () => css`
    position: absolute;
    bottom: 5rem;
    left: 5rem;
    @media (max-height: 550px) {
      bottom: 2.5rem;
      left: 3rem;
    }
  `,
};

export const Wrapper = styled.div<CartProps & MobileProps>`
  ${({ theme, cartIsOpen, isMobile }) => css`
    position: relative;
    border-radius: 5rem;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    ${isMobile ? mobileAndDesktop.mobile : mobileAndDesktop.desktop};
    ${media.greaterThan('medium')`
      display: ${isMobile && 'none'};
    `};

    svg {
      filter: drop-shadow(
        ${cartIsOpen ? '0 0 0.5rem' : '0 0 0'}
          ${cartIsOpen ? theme.colorsNav.iconNav.iconHover : 'transparent'}
      );
      g g path {
        pointer-events: none;
        fill: ${cartIsOpen
          ? theme.colorsNav.iconNav.iconHover
          : theme.colorsNav.iconNav.icon};
        fill: ${isMobile && theme.colorsNav.iconModal.icon};
        transition: 0.3s;
      }
    }
    &:hover {
      svg {
        g g g path {
          fill: ${theme.colorsNav.iconNav.iconHover};
        }

        filter: drop-shadow(0 0 0.5rem red);
      }
    }
    &:active {
      background: ${isMobile && theme.colorsNav.iconModal.iconActive};
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

export const ContainerCart = styled.div<CartProps & MobileProps>`
  ${({ theme, cartIsOpen, isMobile }) => css`
    position: absolute;
    display: flex;
    width: ${isMobile ? '100%' : '35rem'};
    height: ${cartIsOpen ? (isMobile ? '100%' : '55rem') : '0'};
    opacity: ${cartIsOpen ? '1' : '0'};
    transition: 1.7s;
    align-items: center;
    flex-direction: column;
    top: ${isMobile ? '0' : '7rem'};
    left: ${isMobile ? '0' : '-15rem'};
    border-radius: ${isMobile ? '0' : '0.5rem'};
    background: ${theme.colorsNav.bag};
    box-shadow: 1rem 1rem 2.9rem 0 rgba(0, 0, 0, 0.24);
    z-index: ${theme.layers.alwaysOnTop};

    &::before {
      content: '';
      position: absolute;
      opacity: ${cartIsOpen ? '1' : '0'};
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0.5rem 0.5rem 0.5rem;
      border-color: transparent transparent ${theme.colorsNav.bag} transparent;
      top: -0.4rem;
      transition: 1.7s;
      pointer-events: none;
    }
  `}
`;

export const WrapperBackArrowCart = styled.div<CartProps>`
  ${({ cartIsOpen }) => css`
    position: absolute;
    top: 3.5rem;
    left: 2rem;
    transform: translateY(-50%);
    height: 4rem;
    display: ${cartIsOpen ? 'flex' : 'none'};
    cursor: pointer;
  `}
`;

export const ArrowCart = styled(ArrowBack)`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    color: ${theme.colors.primary};
  `}
`;

export const ModalClickOutSide = styled.div<CartProps>`
  ${({ theme, cartIsOpen }) => css`
    ${cartIsOpen ? ModalOutside.modalOpen(theme) : ModalOutside.modalClose}
  `}
`;
