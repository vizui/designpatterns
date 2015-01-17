---
title: "Typography"
---

[pattern]
<div class="container-fluid">
    <div class="row">
        <div style="max-width: 100%; width: 600px; margin: auto;">
            <h1>Segoe UI</h1>
            <h2>Grumpy wizards make toxic brew for the evil Queen and Jack.</h2>
            <p style="font-size: 16px;">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
            <blockquote>"The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked."</blockquote>
        </div>
    </div>
</div>
[/pattern]

[pattern]
### Weights

<div class="text-muted">Windows 7 may not have Segoe UI Semilight if <a href="http://support.microsoft.com/kb/2729094">KB2729094</a> has not been applied.</div>

[preview]
<div style="font-size: 15px">
    <p style="font-weight: 700">700 - Bold: The quick brown fox jumps over the lazy dog</p>
    <p style="font-weight: 600">600 - Semibold: The quick brown fox jumps over the lazy dog</p>
    <p style="font-weight: 400">400 - Regular: The quick brown fox jumps over the lazy dog</p>
    <p style="font-weight: 300">300 - Semilight: The quick brown fox jumps over the lazy dog</p>
    <p style="font-weight: 200">200 - Light/thin: The quick brown fox jumps over the lazy dog</p>
</div>
[/preview]
```html
<p style="font-weight: 700">700 - Bold: The quick brown fox jumps over the lazy dog</p>
<p style="font-weight: 600">600 - Semibold: The quick brown fox jumps over the lazy dog</p>
<p style="font-weight: 400">400 - Regular: The quick brown fox jumps over the lazy dog</p>
<p style="font-weight: 300">300 - Semilight: The quick brown fox jumps over the lazy dog</p>
<p style="font-weight: 200">200 - Light: The quick brown fox jumps over the lazy dog</p>
```

[/pattern]

[pattern]
### Styles

[preview]
<table class="table table-borderless table-valign">
    <tbody>
        <tr>
            <td>Display 3</td>
            <td><h1 class="display3">Light 56px</h1></td>
        </tr>
        <tr>
            <td>h1. Display 2</td>
            <td><h1>Light 45px</h1></td>
        </tr>
        <tr>
            <td>h2. Display 1</td>
            <td><h2>Light 34px</h2></td>
        </tr>
        <tr>
            <td>h3. Headline</td>
            <td><h3 class="headline">Semi-bold 24px</h3></td>
        </tr>
        <tr>
            <td>h4. Title</td>
            <td><h4>Semi-bold 18px</h4></td>
        </tr>
        <tr>
            <td>h5. Subhead</td>
            <td><h5>Semi-bold 15px</h5></td>
        </tr>
        <tr>
            <td>h6.</td>
            <td><h6>Semi-bold 13px</h6></td>
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
