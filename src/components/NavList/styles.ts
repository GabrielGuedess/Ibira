import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
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

      a,
      span {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        font-family: ${theme.font.fontNav};
        font-size: ${theme.font.sizes.sizeFontNav};
        color: ${theme.colorsNav.textNav};
        font-weight: 400;
        transition: 0.4s;
        text-decoration: none;
        cursor: pointer;
      }

      &.active::after {
        width: 100%;
      }

      &.active a {
        color: ${theme.colors.primary};
      }

      &.active span {
        color: ${theme.colors.primary};
      }

      &:hover {
        a,
        span {
          color: ${theme.colors.primary};
        }

        &::after {
          width: 100%;
        }
      }
    }
  `}
`;
