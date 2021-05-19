import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';
import { MobileSearchProps } from '.';

type SearchProps = {
  isOpenSearch?: boolean;
};

const mobileAndDesktop = {
  desktop: () => css`
    position: relative;
  `,
  mobile: () => css`
    position: absolute;
    bottom: 5rem;
    right: 5rem;
  `,
};
export const Wrapper = styled.div<SearchProps & MobileSearchProps>`
  ${({ theme, isOpenSearch, isMobile }) => css`
    border-radius: 5rem;
    width: ${isOpenSearch ? (isMobile ? '5rem' : '20rem') : '5rem'};
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${isMobile ? mobileAndDesktop.mobile : mobileAndDesktop.desktop}
    ${media.greaterThan('medium')`
      display: ${isMobile && 'none'};
    `};

    svg {
      width: 2.8rem;
      height: 2.8rem;
      transition: 0.3s ease-in-out;

      color: ${isOpenSearch
        ? theme.colorsNav.iconNav.iconHover
        : theme.colorsNav.iconNav.icon};
      color: ${isMobile && theme.colorsNav.iconModal.icon};

      filter: drop-shadow(
        ${isOpenSearch ? '0 0 0.5rem' : '0 0 0'}
          ${isOpenSearch ? theme.colorsNav.iconNav.iconHover : 'transparent'}
      );
    }

    &:hover {
      svg {
        color: ${theme.colorsNav.iconNav.iconHover};
        filter: drop-shadow(0 0 0.5rem ${theme.colorsNav.iconNav.iconHover});
      }
    }
  `}
`;

export const InputSearch = styled.input<SearchProps>`
  ${({ theme, isOpenSearch }) => css`
    position: absolute;
    right: 0;
    width: ${isOpenSearch ? '20rem' : '0'};
    padding: ${isOpenSearch ? '0 2.5rem' : '0'};
    height: 5rem;
    border-radius: 5rem;
    background: transparent;
    box-shadow: 0 0 1rem red, 0 0 1rem red;
    border: none;
    font-family: ${theme.font.fontNav};
    outline: none;
    color: ${theme.colorsNav.textInputSearch};
    font-size: 1.4rem;
    transition: 0.4s linear;
  `}
`;

export const WrapperSvgSearch = styled.div`
  border-radius: 5rem;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 0;
`;

export const ModalSearchMobile = styled.div<SearchProps>`
  ${({ theme, isOpenSearch }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${isOpenSearch ? '100%' : '0'};
    opacity: ${isOpenSearch ? '1' : '0'};
    transition: 1.7s;
    flex-direction: column;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    z-index: ${theme.layers.menu};
  `}
`;

export const WrapperBackArrowCart = styled.div<SearchProps>`
  ${({ isOpenSearch }) => css`
    position: absolute;
    top: 3.5rem;
    left: 2rem;
    transform: translateY(-50%);
    height: 4rem;
    display: ${isOpenSearch ? 'flex' : 'none'};
    cursor: pointer;
  `}
`;
export const ArrowSearch = styled(ArrowBack)`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    color: ${theme.colors.primary};
  `}
`;

export const ContainerInputModal = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-radius: 5rem;
    width: 85vw;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 1rem red, 0 0 1rem red;

    svg {
      width: 3rem;
      height: 3rem;
      transition: 0.3s ease-in-out;

      color: ${theme.colorsNav.iconNav.iconHover};

      filter: drop-shadow(0 0 0.5rem ${theme.colorsNav.iconNav.iconHover});
    }
  `}
`;

export const InputModal = styled.input`
  ${({ theme }) => css`
    position: relative;
    border-radius: 5rem;
    width: 20rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border: none;
    background: transparent;
    font-family: ${theme.font.fontNav};
    outline: none;
    color: ${theme.colorsNav.textInputSearch};
    font-size: 2rem;
  `}
`;
