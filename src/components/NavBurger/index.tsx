import MenuModal from 'components/MenuModal';
import { useContext } from 'react';
import { MenuContext } from '../../hooks/useMenu';
import * as S from './styles';

const NavBurger = () => {
  const { openState, setOpenState } = useContext(MenuContext);

  return (
    <>
      <S.Wrapper
        aria-label="BurgerIcon"
        onClick={() => setOpenState(!openState)}
        isOpenMenuNav={openState}
      >
        <S.HamburgerMenu isOpenMenuNav={openState} />
      </S.Wrapper>

      <MenuModal isOpenMenuNav={openState} />
    </>
  );
};

export default NavBurger;
