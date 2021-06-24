import CloseX from 'components/CloseX';
import Link from 'next/link';
import { useContext } from 'react';
import { MenuContext } from '../../hooks/useMenu';
import * as S from './styles';

const UserLogged = () => {
  const { isOpenUser, setIsOpenUser } = useContext(MenuContext);

  return (
    <S.Wrapper isOpenUser={isOpenUser}>
      <CloseX onClick={() => setIsOpenUser(!isOpenUser)} />

      <S.WrapperUserData>
        <S.UserPhoto src="/img/userTest.jpg" />

        <S.UserName>gabriel guedes</S.UserName>

        <S.UserOffice>ceo</S.UserOffice>

        <S.DivSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375.5 91.764">
          <filter id="glow">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="4"
              result="blurred"
            />

            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="blurred" />
            </feMerge>
          </filter>

          <path
            fill="currentColor"
            d="M.5 1.451s68 86.975 183 87.975S370.5 12.477 375 1.451v52.475s-79.75 37.833-191.5 37.333S.5 51.176.5 51.176z"
            filter="url(#glow)"
          />
        </S.DivSvg>
      </S.WrapperUserData>

      <S.WrapperListUser>
        <S.ListLiUser>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
            <path
              fill="currentColor"
              d="M23.9 18.1a13.946 13.946 0 00-5.32-3.337 8.094 8.094 0 10-9.159 0A14.022 14.022 0 000 28h2.188a11.813 11.813 0 0123.625 0H28a13.909 13.909 0 00-4.1-9.9zM14 14a5.906 5.906 0 115.906-5.906A5.913 5.913 0 0114 14z"
            />
          </svg>

          <Link href="/">meu perfil</Link>
        </S.ListLiUser>

        <S.ListLiUser>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.53 443.74">
            <path
              fill="currentColor"
              d="M438.48 41.71a130.49 130.49 0 00-191.25 0l-8.43 8.89-8.43-8.91a130.59 130.59 0 00-184.54-6.78q-3.51 3.27-6.78 6.78a146.46 146.46 0 000 199.14l187.36 197.58a17.07 17.07 0 0024.13.65l.65-.65 187.29-197.58a146.43 146.43 0 000-199.12zm-24.69 175.62l-175 184.54-175-184.54a111.91 111.91 0 010-152.15 96.45 96.45 0 01136.3-5.49q2.85 2.64 5.49 5.49l20.83 21.92a17.56 17.56 0 0024.78 0L272 65.19a96.45 96.45 0 01136.3-5.48q2.85 2.63 5.49 5.48c40.12 42.99 40.42 109.43 0 152.14z"
            />
          </svg>

          <Link href="/">favoritos</Link>
        </S.ListLiUser>

        <S.ListLiUser>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 512">
            <path
              fill="currentColor"
              d="M180 0C80.75 0 0 80.75 0 180a179.62 179.62 0 0026.87 94.65l142.88 230.26A15 15 0 00182.5 512h.12a15 15 0 0012.75-7.29l139.24-232.49A179.78 179.78 0 00360 180C360 80.75 279.25 0 180 0zm128.87 256.82l-126.6 211.37-129.9-209.34A149.79 149.79 0 0129.8 180C29.8 97.29 97.29 29.8 180 29.8S330.1 97.29 330.1 180a149.9 149.9 0 01-21.23 76.82z"
            />

            <path
              fill="currentColor"
              d="M180 90a90 90 0 1090 90 90.1 90.1 0 00-90-90zm0 150.2a60.2 60.2 0 1160.1-60.2 60.24 60.24 0 01-60.1 60.2z"
            />
          </svg>

          <Link href="/">rastreamento</Link>
        </S.ListLiUser>

        <S.ListLiUser>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 713.6 712.96">
            <path
              fill="currentColor"
              d="M620.16 712.96H492.8a32 32 0 010-64h127.36a29.78 29.78 0 0029.44-29.44V492.16a32 32 0 0164 0v127.36c-.6 51.2-42.24 93.44-93.44 93.44zM32.64 252.8a31.69 31.69 0 01-32-32V93.44A93.55 93.55 0 0194.08 0h127.36a32 32 0 010 64h-128A29.78 29.78 0 0064 93.44V220.8c.64 17.92-14.08 32-31.36 32zm648.32 0a31.69 31.69 0 01-32-32V93.44A29.78 29.78 0 00619.52 64H492.16a32 32 0 010-64h127.36A93.55 93.55 0 01713 93.44V220.8a31.69 31.69 0 01-32 32zM221.44 712.96h-128A93.55 93.55 0 010 619.52V492.16a32 32 0 0164 0v127.36a29.78 29.78 0 0029.44 29.44H220.8a31.69 31.69 0 0132 32c0 17.92-14.08 32-31.36 32zM599 391.04H114.56a32 32 0 010-64H599a31.69 31.69 0 0132 32 32.09 32.09 0 01-32 32z"
            />
          </svg>

          <Link href="/">QR code</Link>
        </S.ListLiUser>

        <S.ListLiUser>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M276 138v109.72l72.81 72.8a20 20 0 01-28.29 28.29l-78.66-78.67A20 20 0 01236 256V138a20 20 0 0140 0zM334.67 0H177.33A176.69 176.69 0 0061.05 43.48V20a20 20 0 00-40 0v78.67a20.05 20.05 0 0020 20h78.67a20 20 0 000-40H81.88A137.8 137.8 0 01177.33 40h157.34C410.39 40 472 101.61 472 177.33v157.34C472 410.39 410.39 472 334.67 472H177.33C101.61 472 40 410.39 40 334.67V256a20 20 0 00-40 0v78.67C0 432.45 79.55 512 177.33 512h157.34C432.45 512 512 432.45 512 334.67V177.33C512 79.55 432.45 0 334.67 0z"
            />
          </svg>

          <Link href="/">histórico</Link>
        </S.ListLiUser>
      </S.WrapperListUser>
      <S.WrapperLogout>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13.971">
            <g transform="translate(-1147 -747.014)">
              <path
                className="a"
                d="M.931,4.554h0A3.623,3.623,0,0,1,4.582.931h5.793a3.623,3.623,0,0,1,3.6,3.623v5.793a3.623,3.623,0,0,1-3.6,3.623H4.582A3.623,3.623,0,0,1,.931,10.348v-.261"
                transform="translate(1146.564 746.549)"
              />
              <line
                className="a"
                x1="8.951"
                y1="0.028"
                transform="translate(1147.467 754)"
              />
              <path
                className="b"
                d="M6.482,2.8l2.934,4.21L6.482,10.748"
                transform="translate(1147.001 747.015)"
              />
            </g>
          </svg>

          <span>logout</span>
        </div>
      </S.WrapperLogout>
    </S.Wrapper>
  );
};

export default UserLogged;
