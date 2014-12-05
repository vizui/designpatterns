---
title: "Progress bars"
preview: true
---

[pattern]
<h3>Progress bars</h3>

[preview]
<div class="progress" style="max-width: 200px;">
  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
    <span class="sr-only">60% Complete</span>
  </div>
</div>
[/preview]

[preview]
<div style="max-width: 200px;">
    <div style="margin-bottom: 6px;" class="bold clearfix">
        <div class="pull-left">Importing...</div>
        <span id="exampleProgressBarValue" class="pull-right text-muted">60%</span>
    </div>
    <div class="progress">
      <div id="exampleProgressBar" class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
      </div>
    </div>
</div>
[/preview]

[preview]
<div style="max-width: 200px;">
    <div style="margin-bottom: 6px;" class="bold clearfix">
        <div class="pull-left">Finalizing...</div>
        <span class="pull-right text-muted">100%</span>
    </div>
    <div class="progress">
      <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">
      </div>
    </div>
</div>
[/preview]

```html

```
[/pattern]
