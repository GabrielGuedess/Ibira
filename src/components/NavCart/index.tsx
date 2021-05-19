import MediaMatch from 'components/MediaMatch';
import { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/Bolsa.json';
import * as S from './styles';

export type MobileProps = {
  isMobile?: boolean;
};

const NavCart = ({ isMobile = false }: MobileProps) => {
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
    <>
      <S.Wrapper
        aria-label="CartIcon"
        isMobile={isMobile}
        cartIsOpen={isOpen}
        onClick={RemoveCart}
      >
        <Lottie
          options={defaultOptions}
          direction={animationState.direction}
          height={63}
          width={63}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />

        <S.NumberProducts>1</S.NumberProducts>
      </S.Wrapper>

      {isMobile ? (
        <S.ContainerCart
          aria-label="Modal Cart"
          cartIsOpen={isOpen}
          isMobile={isMobile}
        >
          <S.WrapperBackArrowCart cartIsOpen={isOpen}>
            <S.ArrowCart onClick={RemoveCart} />
          </S.WrapperBackArrowCart>
        </S.ContainerCart>
      ) : (
        <S.ContainerCart
          aria-label="Modal Cart"
          cartIsOpen={isOpen}
          isMobile={isMobile}
        />
      )}
      <MediaMatch greaterThan="medium">
        <S.ModalClickOutSide
          aria-label="Modal Click"
          cartIsOpen={isOpen}
          onClick={RemoveCart}
        />
      </MediaMatch>
    </>
  );
};

export default NavCart;
