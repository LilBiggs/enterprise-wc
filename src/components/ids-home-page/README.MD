# Ids Home Page Component

## Description

Homepages hold combinations of widgets that are tailored to the needs of a user’s workflow. The Home Page component will set the layout to display the cards in specific order according to available space in it's container. It take care everything as laid out in the best order and use of space that is possible. To keep the responsive behavior it will readjust each card size and position on the event of resize.

## Use Cases

- Use when you want organize your content in specific order.
- A homepage is an admin or end-user configured page made up of widgets that are relevant to the workflow of a general role or an individual. Widgets can be resized to create layouts best-suited for the data within the widget or homepage.

## Terminology

- **Card**: The container to keep the content.

## Features (With Code Examples)

A normal home page used as a web component.

```html
<ids-home-page>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 1x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
</ids-home-page>
```

A Card with three columns.

```html
<ids-home-page>
  <ids-card slot="card" colspan="3">
    <div slot="card-header">
      <ids-text>Card 3x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
</ids-home-page>
```

A Card with double height.

```html
<ids-home-page>
  <ids-card slot="card" rowspan="2">
    <div slot="card-header">
      <ids-text>Card 1x2</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
</ids-home-page>
```

No animation with cards while changing/resizing.

```html
<ids-home-page animated="false">
  <ids-card slot="card" colspan="3">
    <div slot="card-header">
      <ids-text>Card 3x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card" colspan="2">
    <div slot="card-header">
      <ids-text>Card 2x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 1x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
</ids-home-page>
```

The home page with custom cards height.

```html
<ids-home-page cardHeight="260">
  <ids-card slot="card" colspan="3">
    <div slot="card-header">
      <ids-text>Card 3x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card" colspan="2">
    <div slot="card-header">
      <ids-text>Card 2x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 1x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
</ids-home-page>
```

The home page with custom cards width.

```html
<ids-home-page cardWidth="260">
  <ids-card slot="card" colspan="3">
    <div slot="card-header">
      <ids-text>Card 3x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card" colspan="2">
    <div slot="card-header">
      <ids-text>Card 2x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 1x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
</ids-home-page>
```

The home page max columns.

```html
<ids-home-page cols="4">
  <ids-card slot="card" colspan="4">
    <div slot="card-header">
      <ids-text>Card 4x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card" colspan="2">
    <div slot="card-header">
      <ids-text>Card 2x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 1x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 1x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
</ids-home-page>
```

The card gap for single span, apply same for both horizontal and vertical sides.

```html
<ids-home-page gap="50">
  <ids-card slot="card" colspan="3">
    <div slot="card-header">
      <ids-text>Card 4x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 2x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 1x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 1x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
</ids-home-page>
```

The card horizontal gap for single span.

```html
<ids-home-page gap-x="50">
  <ids-card slot="card" colspan="3">
    <div slot="card-header">
      <ids-text>Card 4x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 2x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 1x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 1x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
</ids-home-page>
```

The card vertical gap for single span.

```html
<ids-home-page gap-y="50">
  <ids-card slot="card" colspan="3">
    <div slot="card-header">
      <ids-text>Card 4x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 2x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 1x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
  <ids-card slot="card">
    <div slot="card-header">
      <ids-text>Card 1x1</ids-text>
    </div>
    <div slot="card-content"></div>
  </ids-card>
</ids-home-page>
```

## Settings for HomePage

- `animated` {boolean} Set to animated or not the home page cards on resize
- `cardHeight` {number} Set card height for single span
- `cardWidth` {number} Set card width for single span
- `cols` {number} Set the number of columns to display
- `gap` {number} Set card gap for single span, apply same for both horizontal and vertical sides
- `gapX` {number} Set card horizontal gap for single span
- `gapY` {number} Set card vertical gap for single span


## Settings for cards

- `colspan` {number} Set the horizontal span size (`card-width * colspan`)
- `rowspan` {number} Set the vertical span size (`card-height * rowspan`)

## Events

- `resized` Fires after the page is resized and layout is set. Detail contains the element `elem` and the home page current status as rows, columns, container-height and matrix for each block.

## Methods

- `refresh` Refresh will resize calculations to update any changes.

## Themeable Parts

- `home-page` allows you to further style the home-page element
- `cards` allows you to further style the cards container element

## States and Variations (With Code Examples)

- Animated cards on change or resize
- Custom card height/width
- Number of max columns to display
- Horizontal and vertical span size
- Card gap for single span both horizontal and vertical sides

## Keyboard Guidelines

- <kbd>Tab/Shift+Tab</kbd>: If the tab is focusable this will focus or unfocus content.

## Responsive Guidelines

- Flows the laid out in the best order and use of space it can be. It is possible to adjust columns to different size depending on how much screen and parent dimensions.

## Converting from Previous Versions (Breaking Changes)

**3.x to 4.x**

- Home Page has all new markup and classes.

**4.x to 5.x**

- The HomePage component has been changed to a web component
- Markup has changed to a custom element `<ids-home-page></ids-home-page>` (see examples above)
- Can now be imported as a single JS file and used with encapsulated styles
- If using events, events are now plain JS events.
- The hero example must be created manually by styling a widget

## Accessibility Guidelines

- The component respects element tab order which is important between the main containers

## Regional Considerations

The cards will flip to the alternate side in Right To Left mode.
