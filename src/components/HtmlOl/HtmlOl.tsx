import React, { HTMLProps } from 'react';
import { default as styled, css } from 'styled-components';
import { resets, Omit } from '../../utils';

export interface HtmlOlProps
  extends Omit<HTMLProps<HTMLOListElement>, 'type' | 'as'> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

const olResets = css`
  ${resets.normalize.html}
  ${resets.common}
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
`;

const Ol = (props: HtmlOlProps) => <ol {...props} />;

export const HtmlOl = styled(Ol)`
  ${olResets}
`;
