---
title: "Tooltips"
---

[pattern]
### Overview
Use tooltips for providing information that does not need to be visible at all times, such as:
- Icon descriptions
- Term definitions
- Expanding shortened date/time stamps
- Brief help/info text

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
    <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" title="Print">Short</button>
    <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" data-html="true" title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper volutpat ultrices. Mauris lobortis lacus vel ullamcorper vestibulum.'>Wrapping</button>
    <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" data-html="true" title='<i class="fa fa-1x fa-calendar-o"></i> &nbsp; <strong>January 21</strong>, 2014'>Rich content</button>
</div>
[/preview]

```html

```
[/pattern]
