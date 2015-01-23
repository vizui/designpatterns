---
title: "Typography"
---

[pattern]
### Fonts

#### Internal/private applications
Font load and fallback order is: __Calibri, Helvetica Neue, Helvetica, Arial, sans-serif__


#### External/public applications
Font load and fallback order: __Helvetica Neue (web font), Helvetica, Arial, sans-serif__

#### Font availability
<dl>
    <dt>Calibri</dt>
    <dd>Ships with Windows Vista and newer. Calibri Light available on Windows 8+. Ships with Office for Mac.</dd>
    <dt>Helvetica Neue / Helvetica</dt>
    <dd>Ships with OSX.</dd>
    <dt>Arial</dt>
    <dd>Ships with most operating systems.</dd>
</dl>

&nbsp;

[/pattern]

[pattern]
### Weights

[preview]
<div style="font-size: 15px">
    <p style="font-weight: 700">700 - Bold: The quick brown fox jumps over the lazy dog</p>
    <p style="font-weight: 400">400 - Regular: The quick brown fox jumps over the lazy dog</p>
</div>
[/preview]
```html
<p style="font-weight: 700">700 - Bold: The quick brown fox jumps over the lazy dog</p>
<p style="font-weight: 400">400 - Regular: The quick brown fox jumps over the lazy dog</p>
```

[/pattern]

[pattern]
### Styles

[preview]
<table class="table table-borderless table-valign">
    <tbody>
        <tr>
            <td>Display 3</td>
            <td><h1 class="display3">Regular 56px</h1></td>
        </tr>
        <tr>
            <td>h1. Display 2</td>
            <td><h1>Regular 45px</h1></td>
        </tr>
        <tr>
            <td>h2. Display 1</td>
            <td><h2>Regular 34px</h2></td>
        </tr>
        <tr>
            <td>h3. Headline</td>
            <td><h3 class="headline">Bold 24px</h3></td>
        </tr>
        <tr>
            <td>h4. Title</td>
            <td><h4>Bold 18px</h4></td>
        </tr>
        <tr>
            <td>h5. Subhead</td>
            <td><h5>Bold 15px</h5></td>
        </tr>
        <tr>
            <td>h6.</td>
            <td><h6>Bold 13px</h6></td>
        </tr>
        <tr>
            <td>Body</td>
            <td><div class="body">Regular 13px</div></td>
        </tr>
        <tr>
            <td>Caption</td>
            <td><div class="caption">Regular 12px</div></td>
        </tr>
    </tbody>
</table>

[/preview]
```html
<h1 class="display3">Light 56px</h1>
<h1>Light 45px</h1>
<h2>Light 34px</h2>
<h3>Semi-bold 24px</h3>
<h4>Semi-bold 18px</h4>
<h5>Semi-bold 15px</h5>
<h6>Semi-bold 13px</h6>
<div class="caption">Regular 12px</div>
```

&nbsp;

#### Pairings
[preview]
<div style="max-width: 600px;">
    <h2>Large display 1 heading</h2>
    <h3>A headline</h3>
    <p style="margin-bottom: 32px;">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
    <h4>Smaller title</h4>
    <h5>Subhead</h5>
    <p style="margin-bottom: 32px;">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
    <h5>Another subhead</h5>
    <p style="margin-bottom: 32px;">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
</div>
[/preview]
```html
<h2>Large display 1 heading</h2>
<h3>A headline</h3>
<p style="margin-bottom: 32px;">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
<h4>Smaller title</h4>
<h5>Subhead</h5>
<p style="margin-bottom: 32px;">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
<h5>Another subhead</h5>
<p style="margin-bottom: 32px;">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
```
[/pattern]

[pattern]
### Lists
#### Unordered
[preview]
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3
        <ul>
            <li>Nested list item 1 </li>
            <li>Nested list item 2 </li>
        </ul>
    </li>
</ul>
[/preview]
```html
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3
        <ul>
            <li>Nested list item 1 </li>
            <li>Nested list item 2 </li>
        </ul>
    </li>
</ul>
```

#### Ordered
[preview]
<ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3
        <ol>
            <li>Nested list item 1 </li>
            <li>Nested list item 2 </li>
        </ol>
    </li>
</ol>
[/preview]
```html
<ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3
        <ol>
            <li>Nested list item 1 </li>
            <li>Nested list item 2 </li>
        </ol>
    </li>
</ol>
```
[/pattern]

[pattern]
### Colors

[preview]
<p class="text-primary">This is text-primary</p>
<p class="text-warning">This is text-warning</p>
<p class="text-success">This is text-success</p>
<p class="text-danger">This is text-danger</p>
<p class="text-info">This is text-info</p>
<p class="text-muted">This is text-muted</p>
[/preview]
```html
<p class="text-primary">This is text-primary</p>
<p class="text-warning">This is text-warning</p>
<p class="text-success">This is text-success</p>
<p class="text-danger">This is text-danger</p>
<p class="text-info">This is text-info</p>
<p class="text-muted">This is text-muted</p>
```

[/pattern]
