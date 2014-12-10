---
title: "Progress and loading"
preview: true
---

[pattern]
### Progress bars

Progress bars should be used when there is a determinate amount of time/progress related to a process (e.g., uploading a file). An indeterminate progress can be used in conjunction with a determinate progress bar.

#### Determinate progress bar
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

#### Indeterminate progress bar
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

[pattern]
### Load spinners

Load spinners should be used when there is an indeterminate amount of time/progress related to a process (e.g., downloading data).

#### Loading button with text
For buttons with text, the load spinner can appear where the icon would appear. The text may change to reflect the current state.
[preview]
<button class="btn btn-default">Load more</button>
<button class="btn btn-default" disabled><i class="loading-icon"></i>Loading...</button>
[/preview]

#### Loading button with icon only
If a simple action is initiated from an icon-only button, the icon can be replaced with the load spinner until the action is complete.
[preview]
<button class="btn btn-default btn-icon-only"><i class="fa fa-star-o"></i></button>
<button class="btn btn-default btn-icon-only loading-background" disabled><i class="fa fa-star-o"></i></button>
<button class="btn btn-default btn-icon-only"><i class="fa fa-star"></i></button>
[/preview]

#### Loading overlay
In some situations during the process of loading, it may be desired to overlay and block functionality until loading is complete.
[preview]
<div style="position: relative; padding: 40px; background: #fff;">
    <table class="table table-inverse" style="opacity: .5;">
        <thead>
            <tr>
                <th>Project name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Invoice</td>
                <td><span >Add invoice confirmation</span></td>
                <td><span >$4,500</span></td>
            </tr>
            <tr>
                <td>Templates</td>
                <td><span >Refactor templates to use the new templating library</span></td>
                <td><span >$9,000</span></td>
            </tr>
            <tr>
                <td>Payments</td>
                <td><span >Process payments using third party api</span></td>
                <td><span >$5,400</span></td>
            </tr>
            <tr>
                <td>Account Management</td>
                <td><span >Improve account management workflow</span></td>
                <td><span >$6,000</span></td>
            </tr>
        </tbody>
    </table>
    <div class="loading-overlay">
        <i class="loading-icon"></i><div>Loading...</div>
    </div>
</div>
[/preview]


#### Loading standalone
When loading data for the first time or loading additional data, use a flat load spinner with a label.
[preview]
<div class="loading">
    <i class="loading-icon"></i>
</div>
<div class="text-center  text-muted">Loading cases...</div>
[/preview]

[/pattern]
