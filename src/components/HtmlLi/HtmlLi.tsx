import React, { HTMLProps } from 'react';
import { default as styled, css } from 'styled-components';
import { resets, Omit } from '../../utils';

export interface HtmlLiProps extends Omit<HTMLProps<HTMLLIElement>, 'as'> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

const liResets = css`
  ${resets.normalize.html}
  ${resets.common}
  display: list-item;
`;

const Li = (props: HtmlLiProps) => <li {...props} />;

export const HtmlLi = styled(Li)`
  ${liResets}
`;
