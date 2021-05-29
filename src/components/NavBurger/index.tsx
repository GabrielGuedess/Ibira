import MenuModal from 'components/MenuModal';
import { useState } from 'react';
import * as S from './styles';

const NavBurger = () => {
  const [isOpenMenuNav, setIsOpenMenuNav] = useState(false);

  return (
    <>
      <S.Wrapper
        aria-label="BurgerIcon"
        onClick={() => setIsOpenMenuNav(!isOpenMenuNav)}
        isOpenMenuNav={isOpenMenuNav}
      >
        <S.HamburgerMenu isOpenMenuNav={isOpenMenuNav} />
      </S.Wrapper>

      <MenuModal isOpenMenuNav={isOpenMenuNav} />
    </>
  );
};

export default NavBurger;
