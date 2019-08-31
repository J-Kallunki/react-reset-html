import React, { HTMLProps } from 'react';
import { default as styled, css } from 'styled-components';
import { resets, Omit } from '../../utils';

export interface HtmlSpanProps
  extends Omit<HTMLProps<HTMLSpanElement>, 'ref' | 'as'> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

const spanResets = css`
  ${resets.normalize.html}
  ${resets.common}
  display: inline;
  max-width: 100%;
  word-wrap: normal;
  word-break: normal;
  white-space: normal;
`;

const Span = (props: HtmlSpanProps) => <span {...props} />;

export const HtmlSpan = styled(Span)`
  ${spanResets}
`;
