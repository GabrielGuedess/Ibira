/* eslint-disable no-return-assign */
import Logo from 'components/Logo';
import MediaMatch from 'components/MediaMatch';
import NavBurger from 'components/NavBurger';
import NavCart from 'components/NavCart';
import NavList from 'components/NavList';
import NavSearch from 'components/NavSearch';
import NavUser from 'components/NavUser';
import { useCallback, useEffect, useState } from 'react';
import * as S from './styles';

export type MenuProps = {
  dinamic?: boolean;
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
      <MediaMatch greaterThan="large" navListGrow>
        <NavList />
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <S.WrapperIcons>
          <S.IconsLi>
            <NavSearch />
          </S.IconsLi>
          <S.IconsLi>
            <NavCart />
          </S.IconsLi>
        </S.WrapperIcons>
      </MediaMatch>

      <NavUser />
      <NavBurger />
    </S.Wrapper>
  );
};

export default NavBar;
