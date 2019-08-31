import React, { ReactNode, HTMLProps } from 'react';
import { default as styled, css } from 'styled-components';
import { resets, allStates, Omit } from '../../utils';

export interface HtmlAProps
  extends Omit<HTMLProps<HTMLAnchorElement>, 'ref' | 'as'> {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

const aResets = css`
  ${resets.normalize.html}
  ${resets.normalize.a}
  ${resets.common}
  ${allStates('color: inherit; text-decoration: underline; cursor: pointer;')}
  display: inline;
  text-decoration: underline;
`;

const Ahref = styled.a`
  ${aResets}
`;

export const HtmlA = (props: HtmlAProps) => <Ahref {...props} />;
