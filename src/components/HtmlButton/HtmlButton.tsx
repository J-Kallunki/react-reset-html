import React, { HTMLProps, ButtonHTMLAttributes } from 'react';
import { default as styled, css } from 'styled-components';
import { resets, resetWithSelectors, Omit } from '../../utils';

export interface HtmlButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'as'> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /**
   * HTML Button type (button, submit, reset)
   * @default button
   */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  'data-testid'?: string;
}

const buttonResets = css`
  ${resets.normalize.html}
  ${resets.normalize.button}
  ${resetWithSelectors([
    ':-moz-focusring',
    '::-moz-focus-inner',
    '::-webkit-file-upload-button',
    '::-webkit-inner-spin-button',
    '::-webkit-outer-spin-button',
    `[type='button']`,
    `[type='submit']`,
  ])}
  ${resets.common}
  display: inline-block;
  max-width: 100%;
  cursor: pointer;
`;

const Button = ({ type, ...passProps }: HtmlButtonProps) => (
  <button {...passProps} type={!!type ? type : 'button'} />
);

export const HtmlButton = styled(Button)`
  ${buttonResets}
`;
