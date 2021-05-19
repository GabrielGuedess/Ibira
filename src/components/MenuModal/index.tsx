import ItemMenu from 'components/ItemMenu';
import Logo from 'components/Logo';
import { MenuNavProps } from 'components/NavBurger/styles';
import categories from 'components/ItemMenu/categories';
import { useEffect } from 'react';
import MediaMatch from 'components/MediaMatch';
import * as S from './styles';

const MenuModal = ({ isOpenMenuNav }: MenuNavProps) => {
  useEffect(() => {
    if (isOpenMenuNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  return (
    <S.Wrapper isOpenMenuNav={isOpenMenuNav}>
      <S.WrapperGif src="http://localhost:1337/uploads/G_If1_df3976a64a.gif" />
      <S.ContainerNav>
        <MediaMatch greaterThan="medium">
          <S.WrapperLogo>
            <Logo />
          </S.WrapperLogo>
        </MediaMatch>
        <S.WrapperItems>
          <ItemMenu categories={categories} />
        </S.WrapperItems>
      </S.ContainerNav>
    </S.Wrapper>
  );
};

export default MenuModal;
