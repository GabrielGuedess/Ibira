import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type breakpoint = keyof DefaultBreakpoints;

type NavListProps = {
  navListGrow?: boolean;
};

export type MediaMatchProps = {
  lessThan?: breakpoint;
  greaterThan?: breakpoint;
};

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block `}
  `,

  greaterThan: (size: breakpoint, { navListGrow }: NavListProps) => css`
    ${media.greaterThan(size)`
    display: ${navListGrow ? 'flex' : 'block'};
    flex-grow: ${navListGrow ? 1 : 0};
    `}
  `,
};

export default styled.div<MediaMatchProps & NavListProps>`
  ${({ lessThan, greaterThan, navListGrow }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan &&
    mediaMatchModifiers.greaterThan(greaterThan, { navListGrow })}
  `}
`;
