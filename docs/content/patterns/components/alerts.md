---
title: "Alerts and notifications"
---

[pattern]
### Contextual alerts

Contextual alerts are positioned in relation to an area or form on the page. They may or may not contain action buttons, depending on the situation.

__When to use:__
- An event has occurred __related to user interaction__
- There __is__ a related element or form to attach the alert to

__Types:__
- __Info__ alerts should be used when there are tips or information that a user can benefit from. 
- __Success__ alerts should be used when an action was performed successfully.
- __Warning__ alerts should be used when an action is out of the ordinary or might not be desired.
- __Danger__ alerts should be used when the system has failed to perform an action, or when the user has made an error. 

__Rules:__
- If the alert pertains to the entire application or website, the alert should appear at the very top of the entire page.
- If the alert pertains to a section on the page, the alert should appear at the very top of the section.
- If the alert pertains to a form, the alert should appear at the top of the form. If there is an error in the form, a danger alert should appear at the top of the form, while the form field with the error is highlighted in red.

[preview]
<div style="max-width: 450px;">
    <div class="alert alert-info">
        <button type="button" class="close"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <i class="icon icon-info-circle alert-icon"></i> Press the <strong>'A'</strong> key to automatically assign a case.
    </div>
    <div class="alert alert-success">
        <button type="button" class="close"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <button class="btn btn-sm btn-link alert-link pull-right">Undo</button>
        <i class="icon icon-check alert-icon"></i> Case assigned to <strong>Jerry</strong>.
    </div>
    <div class="alert alert-success">
        <button type="button" class="close"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <i class="icon icon-check alert-icon"></i> Case assigned to <strong>Jerry</strong>.
    </div>
    <div class="alert alert-warning">
        <button type="button" class="close"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <i class="icon icon-exclamation-triangle alert-icon"></i> There are more than <strong>10</strong> cases assigned to <strong>John</strong>.
    </div>
    <div class="alert alert-danger">
        <button class="btn btn-sm btn-link alert-link pull-right">Retry</button>
        <i class="icon icon-times-circle alert-icon"></i> There was a network error assigning case <strong>90/934,382</strong>. 
    </div>
    <div class="alert alert-danger">
        <i class="icon icon-times-circle alert-icon"></i> Please fix the 3 errors.
    </div>
</div>
[/preview]

```html
<div class="alert alert-warning">
    <button type="button" class="close" ><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
    <strong>Warning:</strong> There are more than <strong>10</strong> cases assigned to <strong>John</strong>.
</div>
<div class="alert alert-success">
    <a href="" class="alert-link pull-right">Undo</a>
    <strong>Success:</strong> Case assigned to <strong>Jerry</strong>.
</div>
<div class="alert alert-success">
    <button type="button" class="close" ><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
    <strong>Success:</strong> Case assigned to <strong>Jerry</strong>.
</div>
<div class="alert alert-info">
    <button type="button" class="close" ><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
    Press the <strong>'A'</strong> key to automatically assign a case.
</div>
<div class="alert alert-danger">
    <a href="" class="alert-link pull-right">Retry</a>
    <strong>Error:</strong> There was a network error assigning case <strong>90/934,382</strong>. 
</div>
<div class="alert alert-danger">
    <strong>Error:</strong> Please fix the 3 errors.
</div>
```
[/pattern]

[pattern]
### System alerts

System alerts aren't placed in relation with any particular context and float in one corner of the screen (usually the top right).

__When to use:__
- An event has occurred __unrelated to any user interaction__
- There __is no__ related element/form to attach the alert to

__Types:__
- __Info__ alerts can be used for general messages that aren't particularly critical
- __Success__ alerts can be used for positive messages that don't have a context to associate it with
- __Warning__ alerts can be used for messages that likely require attention
- __Danger__ alerts can be used for critical messages that require immediate attention

__Behavior:__
- Alerts with low importance, like `info` or `success` alerts, can close automatically after 5 seconds (if desired).
- Alerts with high importance, like `warning` or `danger`, should not close automatically unless the situation has been resolved in some other way.

[preview]

<div class="toast-list" style="max-width: 400px;">
    <div class="toast toast-success">
        <div class="toast-content">
            <button class="close">
                <span>&times;</span>
            </button>
            <span>Message sent to Jerry.</span>
        </div>
    </div>
    <div class="toast toast-info">
        <div class="toast-content">
            <button class="close">
                <span>&times;</span>
            </button>
            <span>Jerry added a comment to one of your cases (90/098,881).</span>
        </div>
        <div class="toast-actions">
            <button type="button" class="btn btn-link">View comment</button> 
        </div>
    </div>
    <div class="toast toast-warning">
        <div class="toast-content">
            <button type="button" class="close">
                <span>&times;</span>
            </button>
            <span>Case 90/842,381 is due tomorrow.</span>
        </div>
        <div class="toast-actions">
            <button type="button" class="btn btn-link">View case</button> 
            <button type="button" class="btn btn-link">Snooze <span class="caret"></span></button> 
        </div>
    </div>
    <div class="toast toast-danger">
        <div class="toast-content">
            <button type="button" class="close">
                <span>&times;</span>
            </button>
            <span>Connection has been lost. Retrying in 30 seconds.</span>
        </div>
        <div class="toast-actions">
            <button type="button" class="btn btn-link">Retry now</button> 
        </div>
    </div>
</div>
[/preview]

```html
<div class="toast-list">
    <div class="toast toast-warning">
        <div class="toast-content">
            <button type="button" class="close">
                <span>&times;</span>
            </button>
            <span>Case 90/842,381 is due tomorrow.</span>
        </div>
        <div class="toast-actions">
            <button type="button" class="btn btn-link">View case</button> 
            <button type="button" class="btn btn-link">Snooze <span class="caret"></span></button> 
        </div>
    </div>
</div>
```

#### Live example
This example shows where and how system alerts may appear <span class="text-muted">(not a <i>real</i> implementation).</span>

[preview]
<button type="button" data-toast-target="#example-toasts" class="btn btn-default show-toasts">Toggle alerts</button>
<div class="toast-list pl-closable-toasts " style="display: none; width: 400px;" id="example-toasts">
    <div class="toast toast-success">
        <div class="toast-content">
            <button class="close">
                <span>&times;</span>
            </button>
            <span>Message sent to Jerry.</span>
        </div>
    </div>
    <div class="toast toast-info">
        <div class="toast-content">
            <button class="close">
                <span>&times;</span>
            </button>
            <span>Jerry added a comment to one of your cases (90/098,881).</span>
        </div>
        <div class="toast-actions">
            <button type="button" class="btn btn-link">View comment</button> 
        </div>
    </div>
    <div class="toast toast-warning">
        <div class="toast-content">
            <button type="button" class="close">
                <span>&times;</span>
            </button>
            <span>Case 90/842,381 is due tomorrow.</span>
        </div>
        <div class="toast-actions">
            <button type="button" class="btn btn-link">View case</button> 
            <button type="button" class="btn btn-link">Snooze <span class="caret"></span></button> 
        </div>
    </div>
    <div class="toast toast-danger">
        <div class="toast-content">
            <button type="button" class="close">
                <span>&times;</span>
            </button>
            <span>Connection has been lost. Retrying in 30 seconds.</span>
        </div>
        <div class="toast-actions">
            <button type="button" class="btn btn-link">Retry now</button> 
        </div>
    </div>
</div>
[/preview]

[/pattern]
