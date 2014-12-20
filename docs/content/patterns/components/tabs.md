---
title: "Tabs"
preview: true
---

[pattern]
<h3>Tabs</h3>

#### Purpose
User's need to flip between multiple focused panes/views of content.

#### Description
Tabs manage stacked panes of content, giving the users the ability to view only the content pane they are interested in. Each tab button has a corresponding content pane. Tabs build on a real world metaphor. The selected state is reinforced with the tab metaphor of a folder physically in front of the others in the set.

#### Basic functionality
- You have multiple categories/views/panes of content, but there is the need to only show one pane at a time.
- Tabs are listed in a horizontal row.
- Avoid overflowing tabs to new lines.
- Tab titles should be short and predictable.
- Tab buttons can contain icons, text, both, and even dropdowns.

&nbsp;

[/pattern]

[pattern]
### Normal tabs

[preview]
<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#" role="tab" data-toggle="tab">Active</a></li>
  <li><a href="#" role="tab" data-toggle="tab">Normal</a></li>
  <li class="disabled"><a href="#" role="tab">Disabled</a></li>
  <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
          Dropdown <span class="caret"></span>
        </a>
        <ul class="dropdown-menu" role="menu">
          <li role="presentation"><a href="#">Item 1</a></li>
          <li role="presentation"><a href="#">Item 2</a></li>
          <li role="presentation"><a href="#">Item 3</a></li>
        </ul>
  </li>
</ul>
<div style="border-top: none; border-radius: 0;" class="panel panel-default">
    <div class="panel-body">
        <p></p><p></p>
    </div>
</div>
[/preview]
[/pattern]

[pattern]
### Light tabs
Use when the tabs need less emphasis in relation to other navigational elements. 
[preview]
<ul class="nav nav-tabs nav-tabs-light" role="tablist">
  <li class="active"><a href="#" role="tab" data-toggle="tab">Active</a></li>
  <li><a href="#" role="tab" data-toggle="tab">Normal</a></li>
  <li class="disabled"><a href="#" role="tab">Disabled</a></li>
  <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
          Dropdown <span class="caret"></span>
        </a>
        <ul class="dropdown-menu" role="menu">
          <li role="presentation"><a href="#">Item 1</a></li>
          <li role="presentation"><a href="#">Item 2</a></li>
          <li role="presentation"><a href="#">Item 3</a></li>
        </ul>
  </li>
</ul>
[/preview]
[/pattern]
[pattern]
### Nested tabs
[preview]
<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#" role="tab" data-toggle="tab">Template</a></li>
  <li><a href="#" role="tab" data-toggle="tab">History</a></li>
  <li><a href="#" role="tab" data-toggle="tab">Analytics</a></li>
</ul>
<div style="border-top: none; border-radius: 0;" class="panel panel-default">
    <ul class="nav nav-tabs nav-tabs-light" role="tablist">
      <li><a href="#" role="tab" data-toggle="tab">HTML</a></li>
      <li class="active"><a href="#" role="tab" data-toggle="tab">Preview</a></li>
    </ul>
    <div class="panel-body">
        <p></p><p></p>
    </div>
</div>
[/preview]
[/pattern]

[pattern]
### Justified tabs
Evenly sized tabs distributed among the width of the container. This can improve alignment when the tabs are otherwise close to filling the width of the container.

[preview]
<div style="width: 300px;">
    <ul class="nav nav-tabs nav-justified text-center" role="tablist">
      <li class="active"><a href="#" role="tab" data-toggle="tab">Recent</a></li>
      <li><a href="#" role="tab" data-toggle="tab">Notes</a></li>
    </ul>
    <div style="border-top: none; border-radius: 0;" class="panel panel-default">
        <div class="panel-body">
            <p></p><p></p>
        </div>
    </div>
</div>
[/preview]

```html

```
[/pattern]
