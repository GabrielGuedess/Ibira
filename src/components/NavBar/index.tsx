/* eslint-disable no-return-assign */
import Logo from 'components/Logo';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/Bolsa.json';
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

  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });

  const [isOpen, setIsopen] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  function RemoveCart() {
    const reverseAnimation = -1;
    const normalAnimation = 1;

    setAnimationState({
      ...animationState,
      isStopped: false,
      direction:
        animationState.direction === normalAnimation
          ? reverseAnimation
          : normalAnimation,
    });

    setIsopen(!isOpen);
  }

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
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/produtos">Produtos</Link>
          </li>
          <li>
            <Link href="/novidades">Novidades</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </S.ListItemsNav>
      </S.WrapperItemsNav>
      <S.WrapperIcons>
        <S.IconsLi>
          <S.HoverIcons>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
              <defs>
                <clipPath id="a">
                  <path transform="translate(1017 31)" d="M0 0h28v28H0z" />
                </clipPath>
              </defs>
              <path d="M.121 10.018a10.009 10.009 0 0015.965 8.063l9.57 9.57a1.171 1.171 0 001.668 0l.2-.2a1.171 1.171 0 000-1.668l-9.541-9.512A10.024 10.024 0 10.116 10.052zm2.488 0a7.536 7.536 0 117.536 7.536 7.536 7.536 0 01-7.536-7.536z" />
            </svg>
          </S.HoverIcons>
        </S.IconsLi>
        <S.IconsLi>
          <S.HoverIcons onClick={RemoveCart}>
            <div className="containerAnim">
              <Lottie
                options={defaultOptions}
                direction={animationState.direction}
                height={63}
                width={63}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}
              />
            </div>
            <S.NumberProducts>1</S.NumberProducts>
          </S.HoverIcons>
          <S.ContainerCart cartIsOpen={isOpen} />
        </S.IconsLi>
        <S.IconsLi>
          <S.HoverIcons>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
              <path d="M23.9 18.1a13.946 13.946 0 00-5.32-3.337 8.094 8.094 0 10-9.159 0A14.022 14.022 0 000 28h2.188a11.813 11.813 0 0123.625 0H28a13.909 13.909 0 00-4.1-9.9zM14 14a5.906 5.906 0 115.906-5.906A5.913 5.913 0 0114 14z" />
            </svg>
          </S.HoverIcons>
        </S.IconsLi>
        <S.IconsLi>
          <S.HoverIcons>
            <S.HamburgerMenu className="burger" />
          </S.HoverIcons>
        </S.IconsLi>
      </S.WrapperIcons>
      <S.ModalClickOutSide cartIsOpen={isOpen} onClick={RemoveCart} />
    </S.Wrapper>
  );
};

export default NavBar;
