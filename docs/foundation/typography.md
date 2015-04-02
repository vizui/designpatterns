---
title: "Typography"
---

<div class="pl-pattern">
### Fonts

#### Internal/private applications
Font load and fallback order: __Calibri, Helvetica Neue, Helvetica, Arial, sans-serif__


#### External/public applications
Font load and fallback order: __Helvetica Neue (web font), Helvetica, Arial, sans-serif__

#### Font availability

{::nomarkdown}
<dl>
    <dt>Calibri</dt>
    <dd>Ships with Windows Vista and newer. Ships with Office for Mac. Calibri Light available on Windows 8+.</dd>
    <dt>Helvetica Neue / Helvetica</dt>
    <dd>Ships with OSX.</dd>
    <dt>Arial</dt>
    <dd>Ships with most operating systems.</dd>
</dl>
{:/nomarkdown}

&nbsp;

</div>

<div class="pl-pattern">
### Weights

{::nomarkdown}
<div class="pl-preview">
<div style="font-size: 15px">
    <p style="font-weight: 700">700 - Bold: The quick brown fox jumps over the lazy dog</p>
    <p style="font-weight: 600">600 - Semibold: The quick brown fox jumps over the lazy dog</p>
    <p style="font-weight: 400">400 - Regular: The quick brown fox jumps over the lazy dog</p>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<p style="font-weight: 700">700 - Bold: The quick brown fox jumps over the lazy dog</p>
<p style="font-weight: 600">600 - Semibold: The quick brown fox jumps over the lazy dog</p>
<p style="font-weight: 400">400 - Regular: The quick brown fox jumps over the lazy dog</p>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Styles

#### Calibri
{::nomarkdown}
<div class="pl-preview">
<table class="table table-borderless table-valign" style="width: 550px;">
    <tbody>
        <tr>
            <td>Display 3</td>
            <td><h1 class="display3">Regular 56px</h1></td>
        </tr>
        <tr>
            <td>h1. Display 2</td>
            <td><h1>Regular 36px</h1></td>
        </tr>
        <tr>
            <td>h2. Display 1</td>
            <td><h2>Regular 26px</h2></td>
        </tr>
        <tr>
            <td>h3. Headline</td>
            <td><h3 class="headline">Semibold 18px</h3></td>
        </tr>
        <tr>
            <td>h4. Title</td>
            <td><h4>Bold 16px</h4></td>
        </tr>
        <tr>
            <td>h5. Subhead</td>
            <td><h5>Bold 13px</h5></td>
        </tr>
        <tr>
            <td>h6.</td>
            <td><h6>Bold 12px</h6></td>
        </tr>
        <tr>
            <td>Body</td>
            <td><div class="body">Regular 13px/14px</div></td>
        </tr>
        <tr>
            <td>Caption</td>
            <td><div class="caption">Regular 12px/13px</div></td>
        </tr>
    </tbody>
</table>
</div>
{:/nomarkdown}

{% highlight html %}
<h1 class="display3">Regular 56px</h1>
<h1>Regular 36px</h1>
<h2>Regular 26px</h2>
<h3>Bold 18px</h3>
<h4>Bold 16px</h4>
<h5>Bold 13px</h5>
<h6>Bold 12px</h6>
<p>Regular 13px/14px</p>
<div class="caption">Regular 12px/13px</div>
{% endhighlight %}

&nbsp;

#### Pairings
{::nomarkdown}
<div class="pl-preview">
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
</div>
{:/nomarkdown}

{% highlight html %}
<h2>Large display 1 heading</h2>
<h3>A headline</h3>
<p style="margin-bottom: 32px;">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
<h4>Smaller title</h4>
<h5>Subhead</h5>
<p style="margin-bottom: 32px;">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
<h5>Another subhead</h5>
<p style="margin-bottom: 32px;">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Lists

#### Unordered
{::nomarkdown}
<div class="pl-preview">
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
</div>
{:/nomarkdown}

{% highlight html %}
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
{% endhighlight %}

#### Ordered
{::nomarkdown}
<div class="pl-preview">
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
</div>
{:/nomarkdown}

{% highlight html %}
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
{% endhighlight %}
</div>

<div class="pl-pattern">
### Colors

{::nomarkdown}
<div class="pl-preview">
<p class="text-primary">This is text-primary</p>
<p class="text-warning">This is text-warning</p>
<p class="text-success">This is text-success</p>
<p class="text-danger">This is text-danger</p>
<p class="text-info">This is text-info</p>
<p class="text-muted">This is text-muted</p>
</div>
{:/nomarkdown}

{% highlight html %}
<p class="text-primary">This is text-primary</p>
<p class="text-warning">This is text-warning</p>
<p class="text-success">This is text-success</p>
<p class="text-danger">This is text-danger</p>
<p class="text-info">This is text-info</p>
<p class="text-muted">This is text-muted</p>
{% endhighlight %}

</div>
