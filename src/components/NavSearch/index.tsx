import { useState } from 'react';
import * as S from './styles';

export type MobileSearchProps = {
  isMobile?: boolean;
};

const NavSearch = ({ isMobile }: MobileSearchProps) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  return (
    <>
      {isMobile ? (
        <S.Wrapper
          aria-label="SearchIcon"
          isOpenSearch={isOpenSearch}
          isMobile={isMobile}
        >
          <S.WrapperSvgSearch
            aria-label="Container SVG"
            onClick={() => setIsOpenSearch(!isOpenSearch)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
              <defs>
                <clipPath id="a">
                  <path transform="translate(1017 31)" d="M0 0h28v28H0z" />
                </clipPath>
              </defs>
              <path
                fill="currentColor"
                d="M.121 10.018a10.009 10.009 0 0015.965 8.063l9.57 9.57a1.171 1.171 0 001.668 0l.2-.2a1.171 1.171 0 000-1.668l-9.541-9.512A10.024 10.024 0 10.116 10.052zm2.488 0a7.536 7.536 0 117.536 7.536 7.536 7.536 0 01-7.536-7.536z"
              />
            </svg>
          </S.WrapperSvgSearch>
        </S.Wrapper>
      ) : (
        <S.Wrapper aria-label="SearchIcon" isOpenSearch={isOpenSearch}>
          <S.InputSearch
            aria-label="Input Search"
            isOpenSearch={isOpenSearch}
          />
          <S.WrapperSvgSearch
            aria-label="Container SVG"
            onClick={() => setIsOpenSearch(!isOpenSearch)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
              <defs>
                <clipPath id="a">
                  <path transform="translate(1017 31)" d="M0 0h28v28H0z" />
                </clipPath>
              </defs>
              <path
                fill="currentColor"
                d="M.121 10.018a10.009 10.009 0 0015.965 8.063l9.57 9.57a1.171 1.171 0 001.668 0l.2-.2a1.171 1.171 0 000-1.668l-9.541-9.512A10.024 10.024 0 10.116 10.052zm2.488 0a7.536 7.536 0 117.536 7.536 7.536 7.536 0 01-7.536-7.536z"
              />
            </svg>
          </S.WrapperSvgSearch>
        </S.Wrapper>
      )}

      {isMobile && (
        <S.ModalSearchMobile isOpenSearch={isOpenSearch}>
          <S.WrapperBackArrowCart
            onClick={() => setIsOpenSearch(!isOpenSearch)}
            isOpenSearch={isOpenSearch}
          >
            <S.ArrowSearch />
          </S.WrapperBackArrowCart>

          <S.ContainerInputModal>
            <S.InputModal />

            <S.WrapperSvgSearch aria-label="Container SVG">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <defs>
                  <clipPath id="a">
                    <path transform="translate(1017 31)" d="M0 0h28v28H0z" />
                  </clipPath>
                </defs>
                <path
                  fill="currentColor"
                  d="M.121 10.018a10.009 10.009 0 0015.965 8.063l9.57 9.57a1.171 1.171 0 001.668 0l.2-.2a1.171 1.171 0 000-1.668l-9.541-9.512A10.024 10.024 0 10.116 10.052zm2.488 0a7.536 7.536 0 117.536 7.536 7.536 7.536 0 01-7.536-7.536z"
                />
              </svg>
            </S.WrapperSvgSearch>
          </S.ContainerInputModal>
        </S.ModalSearchMobile>
      )}
    </>
  );
};

export default NavSearch;
