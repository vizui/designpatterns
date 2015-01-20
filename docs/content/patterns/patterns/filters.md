---
title: "Filters"
draft: true
---

[pattern]
<h3>Filters</h3>
#### Purpose
Users may need filter a collection of items or search results to find items of interest.

#### Description
Filters provide a set of controls to reduce items in a collection based on characteristics or attributes that a user is targeting. For example, showing all notes created last year.

#### Basic functionality
Filters can provide the following functionality:
- A list of interesting attributes common to items in a collection, and 
possible values to filter by
- An indication of the currently applied filters
- A way to clear the currently applied filters
- Predefined filters

&nbsp;

[/pattern]

[pattern]
### Side filters
When filters are frequently used or there are many filters, place them to the left. This provides more space and makes filters easier to access. If there are more than 5 filter groups, consider making them collapsible and even collapsing them by default.

[preview]
<div class="container-fluid" style="margin-top: 8px;">
    <div class="row">
        <div style="width: 275px;" class="panel panel-default pull-left">
            <form class="filters">
                <div class="filter-heading">
                    Refine by <a href="" class="filters-clear">Clear</a>
                </div>
                <div class="filter-list">
                    <div data-toggle="collapse" data-target="#filterGroup8" class="filter-group-title">
                        Year <i class="icon icon-angle-right pull-right"></i>
                    </div>
                    <div id="filterGroup8" class="collapse in">
                        <div class="filter-group-content">
                            <div class="form-group">
                                <ul class="list-unstyled">
                                    <li><a href="">2014</a></li>
                                    <li><a href="">2013</a></li>
                                    <li><a href="">2012</a></li>
                                    <li><a href="">2011</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div data-toggle="collapse" data-target="#filterGroup2" class="filter-group-title">
                        <i class="icon icon-angle-right pull-right"></i> Conveyance type 
                    </div>
                    <div id="filterGroup2" class="collapse in">
                        <div class="filter-group-content">
                            <div class="form-group">
                                <div class="checkbox">
                                    <label><input checked type="checkbox">Assignment <span class="text-muted">(13)</span></label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox"> Change of name <span class="text-muted">(45)</span></label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox"> Trademark <span class="text-muted">(18)</span></label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox"> Certification <span class="text-muted">(32)</span></label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox"> Service <span class="text-muted">(43)</span></label>
                                </div>
                                <a href="" style="margin-left: 21px; display: block; margin-top: -5px;">Show 12 more...</a>
                            </div>
                        </div>
                    </div>
                    <div data-toggle="collapse" data-target="#filterGroup1" class="filter-group-title">
                        <i class="icon icon-angle-right pull-right"></i> Date range 
                    </div>
                    <div id="filterGroup1" class="collapse in">
                        <div class="filter-group-content">
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <span class="input-icon icon icon-calendar-o"></span>
                                    <input type="text" placeholder="Start" class="datepicker form-control" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'">
                                </div>
                                <div class="form-group col-sm-6">
                                    <span class="input-icon icon icon-calendar-o"></span>
                                    <input type="text" placeholder="End" class="datepicker form-control" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-toggle="collapse" data-target="#filterGroup5" class="filter-group-title">
                        <i class="icon icon-angle-right pull-right"></i> Distance 
                    </div>
                    <div id="filterGroup5" class="collapse in">
                        <div class="filter-group-content">
                            <div class="form-group">
                                <label for="serange" class="sr-only control-label">Range</label>
                                <select name="" id="serange" class="form-control select2">
                                    <option value="5">Within 5 miles</option>
                                    <option value="255">Within 25 miles</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div data-toggle="collapse" data-target="#filterGroup6" class="filter-group-title">
                        <i class="icon icon-angle-right pull-right"></i> Name 
                    </div>
                    <div id="filterGroup6" class="collapse in">
                        <div class="filter-group-content">
                            <div class="form-group">
                                <label for="serange" class="sr-only control-label">Range</label>
                                <span class="input-icon icon icon-search"></span>
                                <input type="text" class="form-control" placeholder="Search">
                            </div>
                        </div>
                    </div>
                    <div data-toggle="collapse" data-target="#filterGroup3" class="filter-group-title">
                        Colors <i class="icon icon-angle-right pull-right"></i>
                    </div>
                    <div id="filterGroup3" class="collapse in">
                        <div class="filter-group-content">
                            <div class="form-group">
                                <div style="background-color: red;" class="filter-color"></div>
                                <div style="background-color: green;" class="filter-color"></div>
                                <div style="background-color: orange;" class="filter-color active"></div>
                                <div style="background-color: purple;" class="filter-color"></div>
                                <div style="background-color: black;" class="filter-color"></div>
                                <div style="background-color: white;" class="filter-color"></div>
                            </div>
                        </div>
                    </div>
                    <div data-toggle="collapse" data-target="#filterGroup7" class="filter-group-title">
                        Tags <i class="icon icon-angle-right pull-right"></i>
                    </div>
                    <div id="filterGroup7" class="collapse in">
                        <div class="filter-group-content">
                            <div class="form-group">
                                <ul class="list-unstyled">
                                    <li class="filter-value">Assignment <i class="pull-right icon icon-close icon-muted"></i></li>
                                    <li class="filter-value">Change of name <i class="pull-right icon icon-close icon-muted"></i></li>
                                </ul>
                                <div class="input-group">
                                  <input class="form-control" type="email" placeholder="Enter tag">
                                  <div class="input-group-btn">
                                    <button class="btn btn-default">Add</button>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div style="margin-left: 290px;" class="panel panel-default">
            <div class="filter-criteria" style="display: inline-block; width: 100%; float; left;">
                <div class="pull-right">
                    <div class="dropdown" style="display: inline-block">
                        <button type="button" id="dropdownMenu3" class="btn btn-link dropdown-toggle" data-toggle="dropdown"><span class="text-muted normal">Showing</span> 150-160 <span class="text-muted normal">of</span> 305 <span class="caret"></span></button>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu3">
                            <li role="presentation" class="dropdown-header">Jump to page</li>
                            <li style="padding: 0 16px;" role="presentation">
                                <form action="">
                                    <div class="input-group input-group-sm">
                                        <input type="text" placeholder="15" class="form-control"/>
                                        <div class="input-group-btn">
                                            <button class="btn btn-default">Go</button>
                                        </div>
                                    </div>
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
                      <a href="#" class="btn btn-default"><i class="icon icon-angle-left"></i></a>
                     <a href="#" class="btn btn-default"><i class="icon icon-angle-right"></i></a>
                    </div>
                </div>
                <span class="toolbar-text">
                    Filtered by
                    <ul class="filter-applied-list">
                        <li>Assignment <i class="icon icon-close icon-muted"></i></li>
                        <li>2014 <i class="icon icon-close icon-muted"></i></li>
                        <li>Orange <i class="icon icon-close icon-muted"></i></li>
                        <li>Within 5 miles <i class="icon icon-close icon-muted"></i></li>
                    </ul>
                </span>
            </div>
            <h5 style="margin: 0;"></h5>
        </div>
    </div>
</div>
[/preview]
[/pattern]

[pattern]
### Top filters

[preview]
<div class="container-fluid" style="margin-top: 8px;">
    <form class="filters filters-horizontal">
        <div class="filter-heading">Refine by</div>
        <div style="display: inline-block; vertical-align: top;">
            <button class="btn btn-link">
                Date range <span class="caret"></span>
            </button>
            <ul class="list-unstyled">
                <li class="filter-value">4/01/2014 - 5/01/2014 <i class="pull-right icon icon-close icon-muted"></i></li>
            </ul>
        </div>
        <div style="display: inline-block; vertical-align: top;">
            <button class="btn btn-link">
                Conveyance type <span class="caret"></span>
            </button>
            <ul class="list-unstyled">
                <li class="filter-value">Assignment <i class="pull-right icon icon-close icon-muted"></i></li>
                <li class="filter-value">Change of name <i class="pull-right icon icon-close icon-muted"></i></li>
            </ul>
        </div>
        <div style="display: inline-block; vertical-align: top;">
            <button class="btn btn-link">
                Color <span class="caret"></span>
            </button>
            <ul class="list-unstyled">
                <li class="filter-value">4 colors <i class="pull-right icon icon-close icon-muted"></i></li>
            </ul>
        </div>
        <button class="btn btn-link">
            Clear
        </button>
   </form>
</div>
[/preview]

[preview]
<div class="container-fluid" style="margin-top: 8px;">
    <form class="filters filters-horizontal">
        <div class="filter-heading">Refine by</div>
        <button class="btn btn-link">
            4/01/2014 - 5/01/2014 <span class="caret"></span>
        </button>
        <button class="btn btn-link">
            Conveyance type <span class="caret"></span>
        </button>
        <button class="btn btn-link">
            Color <span class="caret"></span>
        </button>
        <button class="btn btn-link">
            Clear
        </button>
   </form>
</div>
[/preview]

[/pattern]
