import React, { HTMLProps } from 'react';
import { default as styled, css } from 'styled-components';
import { resets, Omit } from '../../utils';

/* Only style reseted label-element, no need to check accessibility here */
/* eslint-disable jsx-a11y/label-has-associated-control */

export interface HtmlLabelProps
  extends Omit<HTMLProps<HTMLLabelElement>, 'ref' | 'as'> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /**
   * HTML Label for ID-name of the element
   */
  for?: string;
}

const labelResets = css`
  ${resets.normalize.html}
  ${resets.common}
  max-width: 100%;
`;

const Label = (props: HtmlLabelProps) => <label {...props} />;

export const HtmlLabel = styled(Label)`
  ${labelResets}
`;
