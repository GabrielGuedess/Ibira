import { useState } from 'react';
import * as S from './styles';

const NavUser = () => {
  const [isOpenUser, setIsOpenUser] = useState(false);

  return (
    <>
      <S.Wrapper
        aria-label="UserIcon"
        isOpenUser={isOpenUser}
        onClick={() => setIsOpenUser(!isOpenUser)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
          <path d="M23.9 18.1a13.946 13.946 0 00-5.32-3.337 8.094 8.094 0 10-9.159 0A14.022 14.022 0 000 28h2.188a11.813 11.813 0 0123.625 0H28a13.909 13.909 0 00-4.1-9.9zM14 14a5.906 5.906 0 115.906-5.906A5.913 5.913 0 0114 14z" />
        </svg>
      </S.Wrapper>
      <S.UserLogin isOpenUser={isOpenUser}>
        <S.CloseX onClick={() => setIsOpenUser(!isOpenUser)} />
      </S.UserLogin>
      <S.ModalUserClick
        aria-label="Modal LoginUser"
        aria-hidden={!isOpenUser}
        isOpenUser={isOpenUser}
        onClick={() => setIsOpenUser(!isOpenUser)}
      />
    </>
  );
};

export default NavUser;
