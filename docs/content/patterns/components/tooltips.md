---
title: "Tooltips"
---

[pattern]
### Overview
Use tooltips for providing information that does not need to be visible at all times, such as:
- Icon descriptions
- Term definitions
- Expanding shortened date/time stamps
- Help text

Other characteristics:
- Tooltips cannot be interacted with.
- The show and hide delays of a tooltip may vary depending on the need, but the default is 200ms to show and 0ms to hide.


[preview]
<div class="tooltip fade in right" style="display: inline-block; position: relative; width: auto;">
    <div class="tooltip-inner">I'm a tooltip!</div>
    <div class="tooltip-arrow"></div>
</div>
[/preview]
[/pattern]

[pattern]
### Positioning
Tooltips can be positioned either above, below, to the left, or to the right of target element. In many situations, tooltips need to be positioned dynamically based on the available space around the target element.
[preview]
<div style="width: 120px;">
    <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip above">Position above</button>
    <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip to left">Position left</button>
    <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip to right">Position right</button>
    <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip below">Position below</button>
</div>
[/preview]
[/pattern]

[pattern]
### Content
The content of a tooltip can vary. It's best to keep it short and simple. 
[preview]
<div style="width: 120px;">
    <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" title="Print">Few words</button>
    <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" data-html="true" title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper volutpat ultrices. Mauris lobortis lacus vel ullamcorper vestibulum. Praesent ipsum odio, fringilla et porttitor at, consequat at nisi. Nulla non magna turpis. Phasellus tincidunt, diam eu dictum convallis, mi purus dictum nunc, vitae molestie elit ipsum eu massa. Phasellus sit amet dui porta, interdum nulla quis, suscipit diam. Vivamus elementum libero arcu, sed porta quam imperdiet nec.'>Many words</button>
    <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" data-html="true" title='Clicking on the <i class="fa fa-cog"></i> icon will allow you to modify the <strong>default settings.</strong>'>HTML content</button>
</div>
[/preview]

```html

```
[/pattern]
