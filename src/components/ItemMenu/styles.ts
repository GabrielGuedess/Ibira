import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 5rem;

  ${media.lessThan('medium')`
    margin: 0;
    flex: 0;
  `}
`;

export const HeadingCategoryBox = styled.div`
  height: 5rem;
  padding: 0 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media.lessThan('medium')`
    height: 6.5rem;
    padding: 0;
  `}
`;

export const HeadingCategory = styled.h1`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0 0.5rem;
    font-size: 2rem;
    font-family: ${theme.font.fontNav};
    cursor: pointer;
    transition: 0.4s;

    ${media.greaterThan('medium')`
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0.5rem;
        background-color: ${theme.colors.primary};
        box-shadow: 0 0 1rem ${theme.colors.primary};
        border-radius: 0.2rem;
        transform: translateY(2.9rem);
        transition: 0.4s;
      }

    `}

    &:hover {
      color: ${theme.colors.primary};

      ${media.lessThan('medium')`
        &:hover {
          text-shadow: 0 0 0.4rem ${theme.colors.primary};
        };
      `}

      ${media.greaterThan('medium')`
        &::after {
          width: 100%;
        };
      `}
    }

    ${media.lessThan('medium')`
      width: 100%;
      padding: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.4rem;
      font-weight: 400;
    `}
  `}
`;

export const SubCategoryBox = styled.div`
  margin: 0.5rem 0;
  height: 20rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const UlSubCategory = styled.ul`
  grid-column-start: 2;
  width: 100%;
  height: 100%;
`;

export const ListSubCategory = styled.li`
  ${({ theme }) => css`
    grid-column-start: 2;
    font-size: 1.5rem;
    list-style: none;
    font-family: ${theme.font.fontNav};
    padding: 0.5rem 0.7rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;

export const WrapperBackArrow = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 2rem;
  transform: translateY(-50%);
  height: 4rem;
`;

export const Arrow = styled(ArrowBack)`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    color: ${theme.colors.primary};
  `}
`;

export const WrapperComponentsMenu = styled.div`
  position: absolute;
  bottom: 4rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: max-content;
  padding: 0 5rem;
  background-color: aliceblue;
`;
