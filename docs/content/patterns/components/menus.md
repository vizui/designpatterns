---
title: "Menus"
---

[pattern]
### Overview

- Use dividers to group related menu items
- Use submenus to separate large sets of menu items
- Include keyboard shortcuts if applicable
- Disable menus rather than hiding
- Indicate submenus with a caret
- Indicate dialogs with an ellipsis
- Use sentence case for menu items

[preview]
<ul style="display: inline-block; position: relative; float: none; width: 200px;" class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
  <li role="presentation"><a href="">Bold <span style="" class="pull-right text-muted">Ctrl+B</span></a></li>
  <li role="presentation"><a href="">Italic <span style="" class="pull-right text-muted">Ctrl+I</span></a></li>
  <li role="presentation"><a href="">Underline <span style="" class="pull-right text-muted">Ctrl+U</span></a></li>
  <li role="presentation" class="divider"></li>
  <li role="presentation"><a href="">Font <i style=" line-height: 18px;" class="fa fa-caret-right text-muted pull-right fa-1x"></i></a></li>
  <li role="presentation"><a href="">Font size <i style=" line-height: 18px;" class="fa fa-caret-right text-muted pull-right fa-1x"></i></a></li>
  <li role="presentation" class="divider"></li>
  <li role="presentation" class="disabled"><a>Conditional formatting...</a></li>
  <li role="presentation" class="divider"></li>
  <li role="presentation"><a href="">Clear formatting</a></li>
</ul>
[/preview]

```html

```

[/pattern]


[pattern]
### Submenus
Submenus help organize menu items.
[preview]
<ul style="display: inline-block; position: relative; float: none; width: 200px;" class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
  <li role="presentation"><a href="">Submenu item <i style=" line-height: 18px;" class="fa fa-caret-right text-muted pull-right fa-1x"></i></a></li>
  <li role="presentation" class="disabled"><a href="">Disabled submenu item <i style=" line-height: 18px;" class="fa fa-caret-right text-muted pull-right fa-1x"></i></a></li>
</ul>
[/preview]
[/pattern]

[pattern]
### Icons
Use icons for menu items that have a common, easily recognizable icon. You don't need an icon for every menu item, only for menu items that are more frequently used. 

If you have an icon in a menu, ensure that all menu items are aligned appropriately.

[preview]
<ul style="display: inline-block; position: relative; float: none; width: 200px;" class="dropdown-menu has-icon" role="menu" aria-labelledby="dropdownMenu2">
  <li role="presentation"><a href=""><i class="fa fa-fw fa-1x fa-star dropdown-menu-icon"></i> Star</a></li>
  <li role="presentation"><a href="">Share...</a></li>
  <li class="divider" role="presentation"></li>
  <li role="presentation"><a href=""><i class="fa fa-fw fa-1x fa-trash-o dropdown-menu-icon"></i> Remove</a></li>
</ul>
[/preview]
[/pattern]

[pattern]
### Form controls
Sometimes menus can contain form elements like checkboxes. Use checkboxes for both single and multi-select options. When dealing with a multi-selectable collection of checkboxes, it's likely beneficial to keep the menu open after items are checked. Otherwise, menus should close after items are clicked.
[preview]
<ul style="display: inline-block; position: relative; float: none; width: 200px;" class="dropdown-menu has-icon" role="menu" aria-labelledby="dropdownMenu2">
  <li class="dropdown-header">Single-select</li>
  <li role="presentation"><a href=""><i class="fa fa-fw fa-1x dropdown-menu-icon"></i> 1.0</a></li>
  <li role="presentation"><a href=""><i class="fa fa-fw fa-1x fa-check dropdown-menu-icon"></i> 1.5</a></li>
  <li role="presentation"><a href=""><i class="fa fa-fw fa-1x dropdown-menu-icon"></i> 2.0</a></li>
  <li class="divider" role="presentation"></li>
  <li class="dropdown-header">Multi-select</li>
  <li role="presentation"><a href=""><i class="fa fa-fw fa-1x fa-check dropdown-menu-icon"></i> Grid lines</a></li>
  <li role="presentation"><a href=""><i class="fa fa-fw fa-1x fa-check dropdown-menu-icon"></i> Rulers</a></li>
  <li role="presentation"><a href=""><i class="fa fa-fw fa-1x dropdown-menu-icon"></i> Margins</a></li>
  
</ul>
[/preview]
[/pattern]
