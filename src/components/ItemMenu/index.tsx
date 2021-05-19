import MediaMatch from 'components/MediaMatch';
import NavCart from 'components/NavCart';
import NavSearch from 'components/NavSearch';
import Link from 'next/link';
import { useState } from 'react';
import { CategoriesProps } from 'types/api';
import * as S from './styles';

const ItemMenu = ({ categories }: CategoriesProps) => {
  const [listMenu, setListMenu] = useState(categories);
  return (
    <>
      <MediaMatch lessThan="medium">
        {listMenu !== categories && (
          <S.WrapperBackArrow>
            <S.Arrow onClick={() => setListMenu(categories)} />
          </S.WrapperBackArrow>
        )}
      </MediaMatch>
      {listMenu.map(({ name, id, subCategories }) => (
        <S.Wrapper key={id}>
          <MediaMatch greaterThan="medium">
            <S.HeadingCategoryBox>
              <Link href="/testUrl">
                <S.HeadingCategory>{name}</S.HeadingCategory>
              </Link>
            </S.HeadingCategoryBox>
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <S.HeadingCategoryBox>
              {listMenu === categories ? (
                <S.HeadingCategory onClick={() => setListMenu(subCategories!)}>
                  {name}
                </S.HeadingCategory>
              ) : (
                <Link href="/testUrl">
                  <S.HeadingCategory>{name}</S.HeadingCategory>
                </Link>
              )}
            </S.HeadingCategoryBox>
          </MediaMatch>
          <MediaMatch greaterThan="medium">
            <S.SubCategoryBox>
              <S.UlSubCategory>
                {listMenu === categories &&
                  subCategories!.map(sub => (
                    <Link href="/w" key={sub.id}>
                      <S.ListSubCategory>{sub.name}</S.ListSubCategory>
                    </Link>
                  ))}
              </S.UlSubCategory>
            </S.SubCategoryBox>
          </MediaMatch>
        </S.Wrapper>
      ))}

      <NavCart isMobile />
      <NavSearch isMobile />
    </>
  );
};

export default ItemMenu;
