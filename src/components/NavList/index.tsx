import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

const NavList = () => {
  const router = useRouter();
  return (
    <S.Wrapper aria-label="NavList">
      <S.ListItemsNav>
        <li className={router.pathname === '/' ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname === '/produtos' ? 'active' : ''}>
          <span>Produtos</span>
        </li>
        <li className={router.pathname === '/novidades' ? 'active' : ''}>
          <span>Novidades</span>
        </li>
        <li className={router.pathname === '/contato' ? 'active' : ''}>
          <Link href="/testUrl">Contato</Link>
        </li>
      </S.ListItemsNav>
    </S.Wrapper>
  );
};

export default NavList;
