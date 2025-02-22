# Absolute vs Relative Positioning in CSS

## Absolute Positioning

- When an element is positioned as absolute, it's removed from the normal document flow.
- It is placed precisely where you specify using top, right, bottom, and left properties.
- The element's position is relative to its closest positioned ancestor (the nearest parent element that is not static).
- If there is no such positioned ancestor, it will be relative to the initial containing block (usually the browser window).

## Relative Positioning

- When an element is positioned as relative, it is positioned relative to its original position in the normal document flow.
- It is still part of the document flow, so it leaves space for itself.
- You can move it from its normal position using the top, right, bottom, and left properties, but the space it originally occupied is preserved.
- Other elements will not adjust to fill the gap left by the moved element.
