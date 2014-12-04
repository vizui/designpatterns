---
title: "Breadcrumbs"
preview: true
---

[pattern]
<h3>Breadcrumbs</h3>
#### Purpose
Users need to understand their current location and navigate within a hierarchical navigation scheme.
#### Description
Breadcrumbs display the current path to a particular page relative to the starting point. Breadcrumbs provide a means for users to understand their current context in a hierarchical structure and the ability to navigate up the structure easily.
#### Basic functionality
- Breadcrumbs display the current path as links separated by carets to indicate each level.
- The current location is at the far right, and the root is on the far left. 
- The current location is not clickable.
- Clicking on a link takes you to that screen. 

[preview]
<ol class="breadcrumb">
  <li class="active">Home</li>
</ol>
<ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li class="active">Library</li>
</ol>
<ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Library</a></li>
  <li class="active">Data</li>
</ol>
[/preview]

```html
<ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Library</a></li>
  <li class="active">Data</li>
</ol>
```
[/pattern]
