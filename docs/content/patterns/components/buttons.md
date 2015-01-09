---
title: "Buttons"
---

[pattern]
<h3>Buttons</h3>
Buttons are used as triggers for actions. Depending on the use case, buttons contain a label and/or an icon. There are a variety of styles, sizes, and variations that can be used for different situations.

All button labels are sentence case. They should be as short as possible while clearly explaining what will happen when the button is clicked.

&nbsp;

[/pattern]

[pattern]
### Styles

There are 6 button styles:
- __Default__, the general button style.
- __Primary__, indicates the critical, or most important action on a form/page.
- __Danger__, indicates a dangerous, generally destructive action, such as deleting.
- __Success__, indicates a positive action.
- __Warning__, indicates an action that may have some side effects, such as giving a user admin access.
- __Link__, used for non-critical actions. Useful for keeping the interface simple.

All buttons are prefixed with the `btn` class. The `btn` class can be applied to any element. Try to use `<button>` elements when an action won't change the URL/route, and `<a>` elements when the action will change the URL/route. 

[preview]
<button type="button" class="btn btn-default">Default</button> <button type="button" class="btn btn-primary">Primary</button> <button type="button" class="btn btn-danger">Danger</button> <button type="button" class="btn btn-success">Success</button> <button type="button" class="btn btn-warning">Warning</button> <button type="button" class="btn btn-link">Link</button>
[/preview]

```html
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-link">Link</button>
```
[/pattern]

[pattern]
### Button states

There are 3 different button states:
- __Normal__, the available, clickable state.
- __Active__, the active, non-clickable state. Add the `active` class.
- __Disabled__, the disabled, non-clickable state. Add the `disabled` attrbitue or class.

[preview]
<button type="button" class="btn btn-primary">Normal</button> <button type="button" class="btn btn-primary active">Active</button> <button type="button" class="btn btn-primary" disabled>Disabled</button>
[/preview]

```html
<button type="button" class="btn btn-primary">Normal</button>
<button type="button" class="btn btn-primary active">Active</button>
<button type="button" disabled class="btn btn-primary">Disabled</button>
```
[/pattern]


[pattern]
### Button sizes

There are 4 different button sizes:
- __Large__, use the `btn-lg` class.
- __Normal__, no extra classes necessary.
- __Small__, use the `btn-sm` class.
- __Extra small__, use the `btn-xs` class. 

[preview]
<button type="button" class="btn btn-lg btn-default">Button</button> <button type="button" class="btn btn-default">Button</button> <button type="button" class="btn btn-sm btn-default">Button</button> <button type="button" class="btn btn-xs btn-default">Button</button>
[/preview]

```html
<button type="button" class="btn btn-lg btn-default">Button</button>
<button type="button" class="btn btn-default">Button</button>
<button type="button" class="btn btn-sm btn-default">Button</button>
<button type="button" class="btn btn-xs btn-default">Button</button>
```

#### Block level buttons
Use the `btn-block` class for buttons that fill the width of their container. These are useful for narrow containers and cleaning up alignment.

[preview]
<div style="width: 280px;">
    <button type="button" class="btn btn-primary btn-block">Block level</button>
    <button type="button" class="btn btn-default btn-block">Block level</button>
</div>
[/preview]
```html
<button type="button" class="btn btn-default btn-block">Block level</button>
```
[/pattern]

[pattern]
### Button groups

Related buttons can be grouped together to show associations and improve clarity. Button groups can be sized using the `btn-group-lg`, `btn-group-sm`, and `btn-group-xs` classes.

[preview]
<div class="btn-group">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Right</button>
</div>
[/preview]

```html
<div class="btn-group">
    <button type="button" class="btn btn-default">Left</button>
    <button type="button" class="btn btn-default">Middle</button>
    <button type="button" class="btn btn-default">Right</button>
</div>
```
[/pattern]

[pattern]
### Toggle buttons

Add the `active` class to the active button.

[preview]
<button type="button" class="btn btn-default active">Active</button> <button type="button" class="btn btn-default">Normal</button> <div class="btn-group">
    <button type="button" class="btn btn-default">Left</button>
    <button type="button" class="btn btn-default active">Active</button>
    <button type="button" class="btn btn-default">Right</button>
</div>
[/preview]

[/pattern]

[pattern]
### Dropdown buttons
Dropdown buttons can provide a menu or popover when clicked.
[preview]
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
[/preview]
[/pattern]

[pattern]
### Split buttons

Split buttons contain both a button and a dropdown. Clicking the button performs the action. Clicking the dropdown reveals other actions. Generally, the button is the primary or most common action, and items in the dropdown are secondary or less common actions.

[preview]
<div class="btn-group">
  <button type="button" class="btn btn-default">Action</button>
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    <span class="caret"></span>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div> <div class="btn-group">
  <button type="button" class="btn btn-primary">Action</button>
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    <span class="caret"></span>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
[/preview]

```html

```

[/pattern]

[pattern]
### Icon buttons

Icon buttons are buttons with an icon inside. An icon button may or may not have text. Icon buttons can help save space or improve the ability to scan/find buttons quickly.

Use `btn-icon-only` for buttons with only an icon in it. This optimizes the padding. 

For an icon without chrome, use a `btn-hover`.

[preview]
<button type="button" class="btn btn-default"><i class="icon icon-comment"></i> &nbsp;Comment</button> <button type="button" class="btn btn-icon-only btn-default"><i class="icon icon-print"></i></button> <button type="button" class="btn btn-icon-only btn-primary"><i class="icon icon-inverse icon-floppy-o"></i></button> <button type="button" class="btn btn-icon-only btn-hover"><i class="icon icon-calendar-o"></i></button> <button type="button" class="btn btn-default">Lock&nbsp; <i class="icon icon-arrow-right"></i></button>
[/preview]
```html
<button type="button" class="btn btn-default"><i class="icon icon-comment"></i> &nbsp;Comment</button>
<button type="button" class="btn btn-icon-only btn-default"><i class="icon icon-print"></i></button>
<button type="button" class="btn btn-icon-only btn-primary"><i class="icon icon-inverse icon-floppy-o"></i></button>
<button type="button" class="btn btn-icon-only btn-hover"><i class="icon icon-calendar-o"></i></button>
<button type="button" class="btn btn-default">Lock&nbsp; <i class="icon icon-arrow-right"></i></button>
```
[/pattern]


