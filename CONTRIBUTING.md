# Guidance on how to contribute

> All contributions to this project will be released under the CC0
> dedication. By submitting a pull request, or filing a bug, issue, or 
> feature-request you are agreeing to comply with this waiver of copyright interest.
> Details can be found in our [TERMS](TERMS.md) and [LICENCE](LICENSE).

There are two primary ways to help: 
 - Using the issue tracker, and 
 - Changing the code-base.

## Using the issue tracker

Use the [issue tracker](https://github.com/USPTO/designpatterns/issues) to suggest 
feature requests, report bugs, and ask questions. This is also a great way to connect 
with the developers of the project as well as others who are interested in this solution.  

Use the issue tracker to find ways to contribute. Find a bug or a feature, mention in
the issue that you will take on that effort, then follow the _Changing the code-base_ 
guidance below.


## Changing the code-base

Generally speaking, you should [fork this repository](https://help.github.com/articles/fork-a-repo/), 
make changes in your own fork, and then submit a 
[pull-request](https://help.github.com/articles/using-pull-requests/). Additionally, the 
code should follow any stylistic and architectural guidelines prescribed by the project. 
In the absence of such guidelines, mimic the styles and patterns in the existing 
code-base.

### Code architecture

The design library is built using [Jekyll](https://help.github.com/articles/using-jekyll-with-pages/). Github automatically compiles and deploys the code located in the gh-pages branch.

Patterns are located in the `/docs` folder. Patterns are organized into sub-folders (e.g., foundation, components, patterns),
which show up as the categories on the left navigation. Each pattern is a single [markdown](https://guides.github.com/features/mastering-markdown/) file that inlcudes descriptions, examples, and source code.

At the top of each markdown file is [YAML metadata](http://jekyllrb.com/docs/frontmatter/), which accepts the following fields:
- `title: Buttons` The title of the pattern for the navigation
- `draft: false` True to hide the pattern from the navigation, false to show

#### Starting pattern template
In the markdown files, sections are added with specific markup.  This template shows which 
```
---
title: Buttons
---

<div class="pl-pattern">

### Buttons

#### Button styles

There are 5 button styles

{::nomarkdown}
<div class="pl-preview">
    // INSERT HTML FOR EXAMPLE
</div>
{:/normarkdown}

{% highlight html %}
    // INSERT HTML FOR SOURCE CODE
{% endhighlight %}

</div>
```

The markup required is:
- The YAML metadata at the top
- `<div class="pl-pattern> ... </div>` indicates the start and end of a section
- `{::nomarkdown} <div class="pl-preview"> ... </div> {:/nomarkdown}` indicates the start and end of a live example
- `{% highlight html %} ... {% endhighlight %}` indicates the start and end of the source code for the above example


### Updating a pattern

1. Find the pattern in the `/docs` folder that you want to edit
2. Make your changes using the Github 'edit' button
3. Commit your changes with a descriptive title and description (e.g., "Improved 508 compliance for Buttons pattern")
4. Github will automatically compile and deploy your changes


### Adding a new pattern

1. Create a new `.md` file in the appropriate folder. If we were adding a new component, we'd create the file under `/docs/components/myNewComponent.md`
2. Copy the starting template from above, or copy any other existing pattern
3. Add all the content
4. Commit your changes with a descriptive title and description (e.g., "Added myNewComponent")
5. Github will automatically compile and deploy your changes
