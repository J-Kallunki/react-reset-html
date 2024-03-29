import React, { HTMLProps } from 'react';
import { default as styled, css } from 'styled-components';
import { resets, Omit } from '../../utils';

export interface HtmlNavProps
  extends Omit<HTMLProps<HTMLElement>, 'ref' | 'as'> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

const aResets = css`
  ${resets.normalize.html}
  ${resets.common}
  display: block;
  max-width: 100%;
`;

const Nav = (props: HtmlNavProps) => <nav {...props} />;

export const HtmlNav = styled(Nav)`
  ${aResets}
`;
