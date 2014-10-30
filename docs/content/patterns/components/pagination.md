---
title: "Pagination"
---

[pattern]
<h3>Pagination</h3>
Pagination provides a few variations of the following features:
- Navigating to prev/next pages.
- Navigating to first/last pages.
- Jumping to a manually entered page.
- Adjusting the number of items per page. 

&nbsp;

#### Full
Full paging contains separate dropdowns for adjusting the page size and jumping to a page, and a full sized pagination bar that allows for prev/next navigation as well as buttons for jumping to the beginning and end.


[preview]
<div class="btn-group">
    <div class="dropdown" style="display: inline-block">
        <button type="button" id="dropdownMenu1" class="btn-link btn-sm btn dropdown-toggle" data-toggle="dropdown">10 per page <span class="caret"></span></button>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
            <li role="presentation" class="dropdown-header">Show up to</li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">10 items</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">25 items</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">50 items</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">100 items</a></li>
        </ul>
    </div>
    <div class="dropdown" style="display: inline-block">
        <button type="button" id="dropdownMenu2" class="btn-link btn-sm btn dropdown-toggle" data-toggle="dropdown">Page 15 of 25 <span class="caret"></span></button>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
            <li role="presentation" class="dropdown-header">Jump to page</li>
            <li style="padding: 0 16px;" role="presentation">
                <form action="">
                    <input type="text" placeholder="15" class="form-control"/>
                </form>
            </li>
        </ul>
    </div>
</div> <div class="btn-group">
  <a class="btn btn-default" href="#"><i class="fa fa-angle-left"></i></a>
  <a class="btn btn-default" href="#">1</a>
  <a class="btn btn-default" disabled href="#">...</a>
  <a class="btn btn-default" href="#">14</a>
  <a class="btn btn-default active" href="#">15</a>
  <a class="btn btn-default" href="#">16</a>
  <a class="btn btn-default" disabled href="#">...</a>
  <a class="btn btn-default" href="#">25</a>
 <a class="btn btn-default" href="#"><i class="fa fa-angle-right"></i></a>
</div>
[/preview]

&nbsp;

#### Medium

Medium-sized paging contains a single dropdown for changing the page size and jumping to a page, and a simple left/right button group. This is useful in space constrained areas as well as in areas where it is _less_ likely that users will need to adjust the page size or jump to a particular page.

[preview]
<div class="dropdown" style="display: inline-block">
    <button type="button" id="dropdownMenu3" class="btn btn-link dropdown-toggle" data-toggle="dropdown"><span class="text-muted">Showing</span> 150-160 <span class="text-muted">of</span> 305 <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu3">
        <li role="presentation" class="dropdown-header">Jump to page</li>
        <li style="padding: 0 16px;" role="presentation">
            <form action="">
                <input type="text" placeholder="15" class="form-control"/>
            </form>
        </li>
        <li class="divider"></li>
        <li role="presentation" class="dropdown-header">Show up to</li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">10 items</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">25 items</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">50 items</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">100 items</a></li>
    </ul>
</div> <div class="btn-group">
  <a href="#" class="btn btn-default"><i class="fa fa-angle-left"></i></a>
 <a href="#" class="btn btn-default"><i class="fa fa-angle-right"></i></a>
</div>
[/preview]

&nbsp;

#### Small

Small paging contains a single button group, containing left/right buttons and a single dropdown for changing the page size and jumping to a page.

[preview]
<div class="btn-group dropdown">
  <a href="#" class="btn btn-default"><i class="fa fa-angle-left"></i></a>
  <a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="">15<span class="text-muted">/25</span> <span class="caret"></span></a>
  <a href="#" class="btn btn-default"><i class="fa fa-angle-right"></i></a>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu4">
        <li role="presentation" class="dropdown-header">Jump to page</li>
        <li style="padding: 0 16px;" role="presentation">
            <form action="">
                <input type="text" placeholder="15" class="form-control"/>
            </form>
        </li>
        <li class="divider"></li>
        <li role="presentation" class="dropdown-header">Show up to</li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">10 items</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">25 items</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">50 items</a></li>
        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">100 items</a></li>
    </ul>
</div>
[/preview]

[/pattern]



