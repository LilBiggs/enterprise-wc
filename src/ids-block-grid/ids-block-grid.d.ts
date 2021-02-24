// Ids is a JavaScript project, but we define TypeScript declarations so we can
// confirm our code is type safe, and to support TypeScript users.

import { IdsElement } from '../ids-base/ids-element';

export default class IdsBlockGrid extends IdsElement {
  /** Set the block alignment */
  align: 'center' | 'left' | 'right';
}
