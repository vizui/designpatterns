---
title: "Metadata"
---

[pattern]
### Overview
The metadata pattern can be used for showing key/value pairs.

__Do__
- Consistently use `#` or `number` in labels
- Indicate empty/blank values with an em-dash (&mdash;)
- Reflow columns based on available screen real estate
- Sentence case labels

[preview]
<div class="row">
    <div class="col-md-6">
        <dl class="dl-horizontal">
            <dt>Examiner</dt>
            <dd>IP, Sikyin / 69776 / 1742</dd>
            <dt>SPE (multiple)</dt>
            <dd>John Olaskey</dd>
            <dt>Applicants</dt>
            <dd>Roman Amirpur</dd>
            <dt>Inventors</dt>
            <dd>Disney Dale</dd>
            <dt>Law firm</dt>
            <dd>Clayton & Clayton Associates</dd>
        </dl>
    </div>
    <div class="col-md-6">
        <dl class="dl-horizontal">
            <dt>Confirmation #</dt>
            <dd>1662</dd>
            <dt>Publication #</dt>
            <dd><a href="">32132132132 <i class="fa fa-external-link-square fa-1x"></i></a></dd>
            <dt>Patent #</dt>
            <dd>&mdash;</dd>
            <dt>Attorney docket #</dt>
            <dd>10951/1202</dd>
            <dt>Foreign priority claimed</dt>
            <dd>Yes</dd>
        </dl>
    </div>
</div>
[/preview]

```html
<dl class="dl-horizontal">
    <dt>Confirmation #</dt>
    <dd>1662</dd>
    <dt>Patent #</dt>
    <dd>---</dd>
</dl>
```
[/pattern]

