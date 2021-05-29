import { useState } from 'react';
import * as S from './styles';

export type InputProps = {
  name: string;
  type: 'number' | 'text' | 'email' | 'password';
  minLength?: string;
  hideAndShow?: boolean;
  autoValidate?: boolean;
  placeholder?: string;
  isRequired?: boolean;
};

const Input = ({
  name,
  type,
  hideAndShow,
  placeholder,
  isRequired,
  autoValidate,
}: InputProps) => {
  const [isValid, setIsValid] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isShowType, setIsShowType] = useState(type);
  const [isValue, setIsValue] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = new RegExp(
      '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
        '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
        '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
    );

    if (emailRegex.test(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <S.Wrapper>
      <S.Input
        type={isShowType}
        required={isRequired}
        placeholder={placeholder}
        onChange={e => {
          validateEmail(e.currentTarget.value);
          setIsValue(e.currentTarget.value);
        }}
        isValue={isValue}
        isValid={isValid}
        autoValidate={autoValidate}
      />

      <S.Label>{name}</S.Label>

      {autoValidate && type === 'email' && (
        <S.Iconsvg sucess={isValid} viewBox="0 0 16 16">
          <path d="M10.8000002,10.8000002 C9.85000038,11.6500006 9.18349609,12 8,12 C5.80000019,12 4,10.1999998 4,8 C4,5.80000019 5.80000019,4 8,4 C10.1999998,4 12,6 12,8 C12,9.35332031 12.75,9.5 13.5,9.5 C14.25,9.5 15,8.60000038 15,8 C15,4 12,1 8,1 C4,1 1,4 1,8 C1,12 4,15 8,15 C12,15 15,12 15,8" />
          <polyline
            points="5 8.375 7.59090909 11 14.5 4"
            transform="translate(0 -0.5)"
          />
        </S.Iconsvg>
      )}

      {hideAndShow && (
        <S.WrapperSvgPassword
          onClick={() => {
            setIsShow(!isShow);
            setIsShowType(isShowType === 'password' ? 'text' : 'password');
          }}
        >
          <S.IconSvgPassword
            isShow={isShow}
            className="eye"
            viewBox="0 0 72 72"
          >
            <path
              className="eye-lower"
              d="M 15.6,37 C 15.6,37 24.309181,49.073101 34.102911,49.166773 43.896641,49.260445 53.4,37 53.4,37"
            />
            <circle r="6" cy="36" cx="34.400002" className="eye-iris" />
            <path
              className="eye-lid"
              d={
                isShow
                  ? 'M -5,-5 V 37 H 15.6 C 15.6,37 21.35124,23.469343 34.312131,23.469343 47.273022,23.469343 53.4,37 53.4,37 H 77 V -5 Z'
                  : 'M -5,-5 V 37 H 15.6 C 15.6,37 25.327177,48.715274 34.312131,48.785 43.297085,48.854726 53.4,37 53.4,37 H 77 V -5 Z'
              }
            />
            <g className="eye-lashes">
              <path
                className="eye-lash"
                d="M 17.45627,17.07484 24.778981,25.652873"
              />
              <path className="eye-lash" d="M 34.602,12.600574 V 23.601076" />
              <path
                className="eye-lash"
                d="M 51.580203,17.07484 44.257492,25.652873"
              />
            </g>
          </S.IconSvgPassword>
        </S.WrapperSvgPassword>
      )}
    </S.Wrapper>
  );
};

export default Input;
