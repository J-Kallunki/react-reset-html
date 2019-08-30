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
