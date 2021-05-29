import styled, { css } from 'styled-components';

type ButtonAnimationProps = {
  isAnimation: boolean;
};

export const Wrapper = styled.button<ButtonAnimationProps>`
  ${({ theme, isAnimation }) => css`
    padding: 0;
    cursor: pointer;
    text-align: center;
    position: relative;
    border: none;
    outline: none;
    background: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    width: 16rem;
    height: 4.1rem;
    letter-spacing: 0.1rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: #fff;
    line-height: 4.1rem;
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
    }
    &:before {
      transform: translate(-50%, -50%);
      width: ${isAnimation ? '4.1rem' : '16rem'};
      height: 4.1rem;
      border-radius: ${isAnimation ? '2.2rem' : '0.7rem'};
      background: ${theme.colors.gardientButton};
      transform-origin: 50% 50%;
      transition: width 0.3s, height 0.3s, border-radius 0.2s;
      transition-delay: 0.2s;
      animation: ${isAnimation && 'pulse 3s linear forwards'};
    }
    &:after {
      width: 1.6rem;
      height: 1.6rem;
      margin: -0.8rem 0 0 -0.8rem;
      background: ${isAnimation ? theme.colors.primary : theme.colors.white};
      box-shadow: ${isAnimation && `0 0 1rem ${theme.colors.primary}`};
      z-index: 2;
      border-radius: 50%;
      transform: scale(0);
      animation: ${isAnimation && 'dot 3s linear forwards'};
    }
  `}
`;

export const ButtonName = styled.span<ButtonAnimationProps>`
  ${({ theme, isAnimation }) => css`
    z-index: ${theme.layers.base};
    display: block;
    position: relative;
    opacity: ${isAnimation ? 0 : 1};
    transform: scale(${isAnimation ? '.6' : '1'});
    transition: opacity 0.3s, transform 0.2s;
    transition-delay: 0.2s;
    user-select: none;
  `}
`;

export const IconSvgAnim = styled.svg<ButtonAnimationProps>`
  ${({ theme, isAnimation }) => css`
    width: 1.5rem;
    height: 1.3rem;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    stroke: ${theme.colors.white};
    stroke-width: 0.2rem;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    transform: translate(-50%, -50%);
    stroke-dasharray: 1.7rem;
    stroke-dashoffset: ${isAnimation ? '3.4rem' : '1.7rem'};
    transition: stroke-dashoffset 0.3s ease;
    transition-delay: ${isAnimation && '3s'};

    @keyframes pulse {
      4% {
        transform: translate(-50%, -50%) scaleX(1.1);
      }
      8% {
        transform: translate(-50%, -50%);
      }
      24%,
      56%,
      88% {
        transform: translate(-50%, -50%) scale(0.8);
      }
      40%,
      72% {
        transform: translate(-50%, -50%) scale(1.2);
      }
    }

    @keyframes dot {
    8% {
        transform: scale(0);
    }
    16% {
        transform: scale(1) rotate(30deg) translateX(4.8rem);
    }
    95% {
        transform: scale(1) rotate(1000deg) translateX(4.8rem);
    }
    100% {
        transform: scale(.125) rotate(1050deg) translate(5.2rem, -0.6rem);
        visibility: hidden;
    }

  `}
`;
