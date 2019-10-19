import { css } from 'styled-components';
import {
  normalizeCssInJs,
  resetWithSelectors as libResetWithSelectors,
} from 'normalize.cssinjs';

const normalize = normalizeCssInJs({ cssToString: true });

const common = css`
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font: 100% inherit;
  line-height: 1;
  text-align: left;
  text-decoration: none;
  vertical-align: baseline;
  color: inherit;
  background: none;
  cursor: inherit;
`;

const resets = {
  normalize,
  common,
};

const resetWithSelectors = libResetWithSelectors(normalize);

const allStates = (styles: string) => css`
  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    ${styles}
  }
`;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export { resets, resetWithSelectors, allStates, Omit };
