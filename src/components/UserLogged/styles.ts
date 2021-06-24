import { OpenUserProps } from 'components/NavUser/styles';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div<OpenUserProps>`
  ${({ theme, isOpenUser }) => css`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: ${isOpenUser ? 1 : 0};
    pointer-events: ${isOpenUser ? 'all' : 'none'};
    right: ${isOpenUser ? 0 : '-25%'};
    top: 0;
    bottom: 0;
    width: 25%;
    background: ${theme.userOpen.colorPrimary};
    border-radius: 0.5rem 0 0 0.5rem;
    transition: 0.6s ease-in-out;
    z-index: ${theme.layers.modal};
    overflow: hidden;

    ${media.lessThan('huge')`
      width: 38rem;
    `}

    ${media.lessThan('large')`
      right: 0;
      top: 0;
      bottom: 0;
      left: ${isOpenUser ? 0 : '-100%'};
      width: 100%;
      border-radius: 0;
    `}
  `}
`;

export const WrapperUserData = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
`;

export const UserPhoto = styled.img`
  width: 13.6rem;
  height: 13.6rem;
  border-radius: 50%;
  object-fit: cover;
  user-select: none;
`;

export const UserName = styled.h4`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: 700;
    color: ${theme.userOpen.fontColor};
    text-transform: capitalize;
    margin: 2.5rem 0 0.8rem 0;
  `}
`;

export const UserOffice = styled.h4`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${theme.userOpen.fontColor};
    text-transform: uppercase;
  `}
`;

export const DivSvg = styled.svg`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    color: ${theme.colors.primary};
    pointer-events: none;
  `}
`;

export const WrapperListUser = styled.ul`
  width: 50%;
  margin-top: 1rem;
  padding-left: 2.5rem;
`;

export const ListLiUser = styled.li`
  ${({ theme }) => css`
    list-style: none;
    padding: 1rem 0;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      width: 2rem;
      height: 2rem;
      fill: ${theme.userOpen.fontColor};
      transition: ease-out 300ms;
    }

    a {
      text-transform: capitalize;
      text-decoration: none;
      margin-left: 3rem;
      font-size: 1.4rem;
      color: black;
      transition: ease-out 300ms;
    }

    &:hover {
      svg {
        color: red;
        filter: drop-shadow(0 0 1rem red);
      }

      a {
        color: ${theme.colorsNav.iconNav.iconHover};
      }
    }
  `}
`;

export const WrapperLogout = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    border-top: 0.1rem red solid;
    box-shadow: 0 0 0.4rem red, 0 0 0.8rem red;

    svg {
      width: 2rem;
      height: 2rem;
      fill: ${theme.userOpen.fontColor};
      transition: ease-out 300ms;

      path,
      line {
        fill: none;
        stroke: ${theme.userOpen.fontColor};
        stroke-miterlimit: 10;
        stroke-linecap: round;
        stroke-width: 0.931px;
        transition: ease-out 300ms;
      }
    }

    span {
      font-size: 1.4rem;
      text-transform: capitalize;
      margin-left: 2rem;
      color: ${theme.userOpen.fontColor};
      text-decoration: none;
      transition: ease-out 300ms;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem 0;
      cursor: pointer;

      &:hover {
        span {
          color: ${theme.colors.primary};
        }

        svg {
          fill: ${theme.colors.primary};

          path,
          line {
            stroke: ${theme.colors.primary};
          }
        }
      }
    }
  `}
`;
