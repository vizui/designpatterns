---
title: "Labels and badges"
---

[pattern]
### Labels

Labels are generally used to provide emphasis on a characteristic of an object, e.g., the category of a document. They are generally actionless.

Avoid mixing standard and subtle labels.

#### Standard
Use standard labels by default unless there are going to be many on the screen at once.
[preview]
<span class="label label-default">DEFAULT</span>
<span class="label label-primary">PRIMARY</span>
<span class="label label-success">SUCCESS</span>
<span class="label label-info">INFO</span>
<span class="label label-warning">WARNING</span>
<span class="label label-danger">DANGER</span>
[/preview]

#### Subtle
Use subtle labels when labels are going to be repeated in a grid or list
[preview]
<span class="label label-default subtle">DEFAULT</span>
<span class="label label-primary subtle">PRIMARY</span>
<span class="label label-success subtle">SUCCESS</span>
<span class="label label-info subtle">INFO</span>
<span class="label label-warning subtle">WARNING</span>
<span class="label label-danger subtle">DANGER</span>
[/preview]

```html
<span class="label label-default">DEFAULT</span>
<span class="label label-primary subtle">SUBTLE PRIMARY</span>
```
[/pattern]

[pattern]
### Badges

Badges are generally used for emphasizing a numerical characteristic of an object, e.g., the number of unread items in a folder. 

[preview]
<span class="badge">5</span> <span class="badge">200</span> <span class="badge">0</span>
[/preview]
```html
<span class="badge">5</span>
```

[preview]
<ul class="list-group" style="max-width: 150px;">
    <li class="list-group-item">
        Inbox <span class="badge pull-right">1,932</span>
    </li>
    <li class="list-group-item active">
        Outbox <span class="badge pull-right">2</span>
    </li>
    <li class="list-group-item">
        Spam
    </li>
</ul>
[/preview]
[/pattern]
