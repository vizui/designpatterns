---
title: "Popovers"
preview: true
---

[pattern]
### Overview

Popovers are a cross between a dialog and a tooltip. Popovers are smaller contextual dialogs that are generally triggered by a click. They may or may not provide other interactions. 

Use a popover instead of a tooltip or dialog when:
- You want a contextual relationship that a dialog can't provide
- You need to provide relatively simple interactions
- You have more text/content than can comfortably fit in a tooltip

[preview]
<div class="popover left" style="position: relative; display: block; margin-left: 0;">
  <div class="arrow"></div>
  <h3 class="popover-title">Add note</h3>
  <div class="popover-content">
    <textarea placeholder="Enter note here" class="form-control" name="" id="" rows="3"></textarea>
  </div>
  <div class="popover-toolbar">
        <button class="btn btn-hover btn-icon-only"><i class="fa fa-image"></i></button>
        <button class="btn btn-hover btn-icon-only"><i class="fa fa-link"></i></button>
        <button class="btn btn-primary pull-right">Add</button>
  </div>
</div>
<div class="popover right" style="position: relative; display: block; margin-left: 0; margin-top: 20px;">
  <div class="arrow"></div>
  <h3 class="popover-title">Search</h3>
  <div class="popover-content">
    <p>Simple search: Type a term in the search field and select the search button.</p>
    <p>Advanced  search: Advanced boolean operators may be used. The default operator when searching multiple terms is “AND”.</p>
  </div>
  <div class="popover-toolbar text-right">
        <a href="">Learn more</a>
  </div>
</div>
[/preview]

```html

```
[/pattern]
