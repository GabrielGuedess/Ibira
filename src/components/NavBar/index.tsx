/* eslint-disable no-return-assign */
import Logo from 'components/Logo';
import { useCallback, useEffect, useState } from 'react';
import * as S from './styles';

export type MenuProps = {
  backgroundNav?: 'transparent' | 'black' | 'transparentBlack';
  dinamic?: boolean;
  nav?: boolean | 'off';
};

const NavBar = ({ dinamic }: MenuProps) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos && currentScrollPos > 200);

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <S.Wrapper
      aria-label="Container Menu"
      nav={dinamic ? visible : 'off'}
      backgroundNav={
        (dinamic ? visible : 'off') ? 'transparentBlack' : 'transparent'
      }
    >
      <S.WrapperLogo>
        <Logo />
      </S.WrapperLogo>
      <S.WrapperItemsNav>
        <S.ListItemsNav>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/produtos">Produtos</a>
          </li>
          <li>
            <a href="/novidades">Novidades</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </S.ListItemsNav>
      </S.WrapperItemsNav>
    </S.Wrapper>
  );
};

export default NavBar;
