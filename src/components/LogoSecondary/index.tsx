import Image from 'next/image';
import * as S from './styles';

const LogoSecondary = () => (
  <S.Wrapper>
    <S.WrapperSvg>
      <Image
        src="/img/logoSecondary.svg"
        alt="Picture of the author"
        width={500}
        height={500}
        role="img"
      />
    </S.WrapperSvg>
  </S.Wrapper>
);

export default LogoSecondary;
