import { OpenUserProps } from 'components/NavUser/styles';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div<OpenUserProps>`
  ${({ theme, isOpenUser }) => css`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    opacity: ${isOpenUser ? 1 : 0};
    pointer-events: ${isOpenUser ? 'all' : 'none'};
    right: ${isOpenUser ? 0 : '-25%'};
    top: 0;
    bottom: 0;
    width: 25%;
    padding: 0 3rem;
    background: ${theme.userOpen.colorPrimary};
    border-radius: 0.5rem 0 0 0.5rem;
    transition: 0.6s ease-in-out;
    z-index: ${theme.layers.modal};

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 3rem;
  }
`;

export const TitleLogin = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    font-family: ${theme.font.fontNav};
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${theme.userOpen.fontColor};
    text-align: center;
    margin-bottom: 2rem;
  `}
`;

export const SignUp = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.5rem;
      color: rgba(0, 0, 0, 0.63);
    }

    a {
      font-size: 1.5rem;
      color: ${theme.userOpen.fontColor};
      text-decoration: none;

      &: hover {
        text-decoration: underline;
      }
    }
  `}
`;
