// Ids is a JavaScript project, but we define TypeScript declarations so we can
// confirm our code is type safe, and to support TypeScript users.

export default class IdsListView extends HTMLElement {
  /** Enabled virtual scrolling */
  virtualScroll: boolean;

  /** Set the internal list template */
  itemTemplate: (item: unknown) => string | string;

  /** Attach a DataSet and render */
  data: Array<unknown>;
}