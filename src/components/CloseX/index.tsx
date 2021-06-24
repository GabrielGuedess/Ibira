import { MouseEventHandler } from 'react';
import * as S from './styles';

export type OnClick = {
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const CloseX = ({ onClick }: OnClick) => (
  <S.Wrapper title="Fechar" onClick={onClick} />
);

export default CloseX;
