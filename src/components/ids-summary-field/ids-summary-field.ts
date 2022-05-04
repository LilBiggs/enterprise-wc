import { customElement, scss } from '../../core/ids-decorators';
import { attributes } from '../../core/ids-attributes';

import Base from './ids-summary-field-base';

import styles from './ids-summary-field.scss';

/**
 * IDS Summary Field Component
 * @type {IdsSummaryField}
 * @inherits IdsElement
 */
@customElement('ids-summary-field')
@scss(styles)
export default class IdsSummaryField extends Base {
  constructor() {
    super();
  }

  /**
   * Return the attributes we handle as getters/setters
   * @returns {Array} The attributes in an array
   */
  static get attributes(): Array<string> {
    return [
      attributes.DATA,
      attributes.LABEL
    ];
  }

  /**
   * Inner template contents
   * @returns {string} The template
   */
  template(): string {
    return `
      <div class="ids-summary-field">
        <ids-text label="true" class="label">${this.label ?? ''}</ids-text>
        <ids-text data="true" class="data" font-weight="bold">${this.data ?? ''}</ids-text>
      </div>`;
  }

  /**
   * Set the data field
   * @param {string} value The contents of the data
   */
  set data(value: string) {
    this.setAttribute(attributes.VALUE, value || '');
    this.#updateData();
  }

  get data() {
    return this.getAttribute(attributes.VALUE);
  }

  /**
   * Set the label field
   * @param {string} value The name for the label
   */
  set label(value: string) {
    this.setAttribute(attributes.LABEL, value || '');
    this.#updateLabel();
  }

  get label() {
    return this.getAttribute(attributes.LABEL);
  }

  /**
   * Updates the UI when the label is set
   * @private
   */
  #updateLabel(): void {
    this.container.querySelector('.label').innerHTML = this.label;
  }

  /**
   * Updates the UI when the data is set
   * @private
   */
  #updateData(): void {
    this.container.querySelector('.data').innerHTML = this.data;
  }
}