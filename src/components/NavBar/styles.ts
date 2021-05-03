import styled, { css } from 'styled-components';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    width: 100%;
    height: 9rem;
    padding: 0.8rem 1.6rem;
    background: ${theme.colors.primary};
  `}
`;
