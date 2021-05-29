import styled, { css, DefaultTheme } from 'styled-components';

type SucessProps = {
  sucess: boolean;
};

type ValueProps = {
  isValue: string;
  isValid: boolean;
  autoValidate?: boolean;
};

type ValuePasswordProps = {
  isShow: boolean;
};

const ModifiersSvg = {
  anySucess: () => css`
    polyline,
    path {
      stroke: #cacfd2;
      stroke-width: 1.4;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: stroke 0.3s ease 0s;
    }

    path {
      stroke-dasharray: 64;
      stroke-dashoffset: 127;
      transition: stroke-dasharray 0.8s ease 0.8s,
        stroke-dashoffset 0.8s ease 0.5s;
    }

    polyline {
      stroke-dasharray: 18;
      stroke-dashoffset: 18;
      transition: stroke-dashoffset 0.5s ease 0s;
    }
  `,

  sucess: (theme: DefaultTheme) => css`
    polyline,
    path {
      stroke: ${theme.colors.sucess};
    }
    path {
      stroke-dasharray: 46;
      stroke-dashoffset: 150;
      transition: stroke-dasharray 0.6s ease 0s,
        stroke-dashoffset 0.8s ease 0.3s, stroke 0.3s ease 0.6s;
    }
    polyline {
      stroke-dashoffset: 0;
      transition: stroke-dashoffset 0.5s ease 0.6s, stroke 0.3s ease 0.6s;
    }
  `,

  showPassword: (theme: DefaultTheme) => css`
    polyline,
    path {
      stroke: ${theme.colors.sucess};
    }
    path {
      stroke-dasharray: 46;
      stroke-dashoffset: 150;
      transition: stroke-dasharray 0.6s ease 0s,
        stroke-dashoffset 0.8s ease 0.3s, stroke 0.3s ease 0.6s;
    }
    polyline {
      stroke-dashoffset: 0;
      transition: stroke-dashoffset 0.5s ease 0.6s, stroke 0.3s ease 0.6s;
    }
  `,

  AnyText: () => css`
    transform: translateY(-2.5rem);
    font-size: 1.3em;
    letter-spacing: 0.1em;
  `,
};

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input<ValueProps>`
  ${({ theme, isValue, isValid, autoValidate }) => css`
    appearance: none;
    width: 100%;
    padding: 1.6rem 4rem 1.6rem 0;
    border: none;
    transition: border-bottom 0.3s;
    border-bottom: ${autoValidate
      ? isValue !== ''
        ? `0.2rem solid ${theme.colors.error}`
        : `0.1rem solid ${theme.colors.black}`
      : `0.1rem solid ${theme.colors.black}`};
    background-color: transparent;
    outline: none;
    color: ${theme.colors.black};
    font-size: 1.55rem;

    & ~ label {
      ${isValue !== '' && ModifiersSvg.AnyText};
    }

    &::placeholder {
      opacity: 0;
      transition: 0.3s;
    }

    &:focus::placeholder {
      opacity: 1;
      transition-delay: 1s;
    }

    &:focus ~ label,
    &:valid ~ label {
      transform: translateY(-2.5rem);
      font-size: 1.3em;
      letter-spacing: 0.1em;
    }

    border-bottom: ${autoValidate &&
    isValid &&
    `0.1rem solid ${theme.colors.sucess}`};
  `}
`;

export const Label = styled.label`
  position: absolute;
  top: 1.6rem;
  left: 0;
  color: black;
  transition: 1s;
  font-size: 1.6em;
`;

export const Iconsvg = styled.svg<SucessProps>`
  ${({ theme, sucess }) => css`
    position: absolute;
    right: 1.4rem;
    top: 50%;
    width: 2rem;
    height: 2rem;
    fill: none;
    margin: -1rem 0 0 0;

    ${sucess ? ModifiersSvg.sucess(theme) : ModifiersSvg.anySucess}
  `}
`;

export const WrapperSvgPassword = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  cursor: pointer;
  right: 0.5rem;
`;
export const IconSvgPassword = styled.svg<ValuePasswordProps>`
  ${({ theme, isShow }) => css`
    position: absolute;
    width: 3.6rem;
    height: 3.6rem;
    fill: none;
    margin: -1rem 0 0 0;

    .eye-lower {
      fill: none;
      stroke: ${isShow ? theme.colors.sucess : '#cacfd2'};
      stroke-width: 4.5;
      stroke-linecap: round;
      transition: 0.5s;
    }
    .eye-iris {
      fill: ${isShow ? theme.colors.sucess : '#cacfd2'};
      stroke-width: 4.65066;
      stroke-linecap: round;
      transition: 0.5s;
    }
    .eye-lid {
      clip-path: polygon(17px 53px, 61px 52px, 57px 14px, 25px 14px);
      fill: #fff;
      stroke-linecap: butt;
      stroke-width: 4.5;
      stroke: ${isShow ? theme.colors.sucess : '#cacfd2'};
      transition: 0.5s;
    }
    .eye-lashes {
      transform-origin: 50%;
      transform: ${isShow ? 'rotateX(0deg)' : 'rotateX(180deg)'};
      transition: 0.5s;
    }
    .eye-lash {
      fill: none;
      stroke: ${isShow ? theme.colors.sucess : '#cacfd2'};
      stroke-width: 4.5;
      stroke-linecap: butt;
      transition: 0.5s;
    }
  `}
`;
