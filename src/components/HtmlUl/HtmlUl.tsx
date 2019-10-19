import React, { HTMLProps } from 'react';
import { default as styled, css } from 'styled-components';
import { resets, Omit } from '../../utils';

export interface HtmlUlProps
  extends Omit<HTMLProps<HTMLUListElement>, 'type' | 'as'> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

const ulResets = css`
  ${resets.normalize.html}
  ${resets.common}
  display: block;
  list-style-type: disc;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
`;

const Ul = (props: HtmlUlProps) => <ul {...props} />;

export const HtmlUl = styled(Ul)`
  ${ulResets}
`;
