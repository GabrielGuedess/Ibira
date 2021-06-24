import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
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
    z-index: ${theme.layers.modal};

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
