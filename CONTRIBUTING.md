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

### Pattern code

Patterns are located in the docs/content/patterns directory. Patterns are organized into folders
which show up as categories on the web site. Each pattern is a single [markdown](https://guides.github.com/features/mastering-markdown/) file.

Our markdown files have some additional enhancements, facilitated through the grunt build process:
- YAML metadata at the top, which accepts the following fields
  - `title: My New Pattern` The title of the pattern in the navigation
  - `draft: true` Hides the pattern from the navigation
  - `preview: true` Adds banners/icons to the pattern to indicate it is a preview
- `[pattern] [/pattern]` blocks, which separate multiple sections in a single pattern file. `###` h3 headings are used to add sub-navigation to the sidebar.
- `[preview] [/preview]` blocks, which show up as example code blocks in the web site. 

