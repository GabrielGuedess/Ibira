import { useState } from 'react';
import * as S from './styles';

export type ButtonProps = {
  name?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ name = 'Enviar', type }: ButtonProps) => {
  const [isAnimation, setIsAnimation] = useState(false);
  return (
    <S.Wrapper
      type={type}
      isAnimation={isAnimation}
      onClick={() => setIsAnimation(!isAnimation)}
    >
      <S.ButtonName isAnimation={isAnimation}>{name}</S.ButtonName>
      <S.IconSvgAnim isAnimation={isAnimation} viewBox="0 0 15 13">
        <polyline points="2 6.5 6 10.5 13 2.5" />
      </S.IconSvgAnim>
    </S.Wrapper>
  );
};

export default Button;
