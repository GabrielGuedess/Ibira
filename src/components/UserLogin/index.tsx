import Button from 'components/Button';
import CloseX from 'components/CloseX';
import Input from 'components/Input';
import LogoSecondary from 'components/LogoSecondary';
import Link from 'next/link';
import { useContext } from 'react';
import { MenuContext } from '../../hooks/useMenu';

import * as S from './styles';

const UserLogin = () => {
  const { isOpenUser, setIsOpenUser } = useContext(MenuContext);

  return (
    <S.Wrapper isOpenUser={isOpenUser}>
      <CloseX onClick={() => setIsOpenUser(!isOpenUser)} />

      <LogoSecondary />

      <S.Form>
        <S.TitleLogin>login</S.TitleLogin>

        <Input
          name="E-Mail"
          type="email"
          isRequired
          placeholder="gabrielrguedess@gmail.com"
          autoValidate
        />

        <Input name="Senha" type="password" isRequired hideAndShow />

        <Button name="Entrar" type="submit" />
      </S.Form>

      <S.SignUp>
        <span>Não tem uma conta ainda?</span>
        <Link href="/">Cadastre-se</Link>
      </S.SignUp>
    </S.Wrapper>
  );
};

export default UserLogin;
