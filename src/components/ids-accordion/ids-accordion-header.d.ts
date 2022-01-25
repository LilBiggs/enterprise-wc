export default class extends HTMLElement {
  /** Reference to the corresponding IdsAccordionPanel element */
  readonly panel: HTMLElement;

  /** True if the Accordion Header should display "expanded" styling */
  expanded?: boolean;

  /** Defines the display type of the expander button, if it's currently enabled */
  expanderType?: 'caret' | 'plus-minus';

  /** Displays/Hides an optional icon on this Accordion header */
  icon?: string | undefined;

  /** Set the theme mode */
  mode: 'light' | 'dark' | 'contrast' | string;

  /** Selects/Deselects this accordion header, firing events when appropriate */
  selected?: boolean;

  /** Changes the expander icon to match the Accordion Panel's state, if the pane is expandable */
  toggleExpanderIcon(doExpand?: boolean): void;
}
