---
title: "Filters"
draft: true
---

<div class="pl-pattern">

<h3>Filters</h3>

#### Purpose
Users need filter a collection of items or search results to find items of interest.

#### Description
Filters provide a set of controls to reduce items in a collection based on attributes the user is interested in (e.g., filtering items by creation date).

Filters can provide the following functionality:

- A list of interesting attributes common to items in a collection, and 
possible values to filter by
- An indication of the currently applied filters
- A way to clear the currently applied filters
- Predefined filters


#### Common filter types

- Single-select and categorical refinement
- Multi-select
- Date range
- Sliders
- Single-select dropdown
- Single search and/or autocomplete
- Multi search and/or autocomplete

&nbsp;

</div>

<div class="pl-pattern">

### Side filters

Filters can be placed on the left side if:

- You have many filters
- Filtering is a primary interaction, meaning users are very likely to use them in each session
- You have enough horizontal screen real estate 

If there are more than 5 filter groups, consider making them collapsible and even collapsing them by default.

{::nomarkdown}
<div class="pl-preview">
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
                                <label for="serange" class="sr-only control-label">Distance</label>
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
    </div>
</div>
</div>
{:/nomarkdown}
</div>

<div class="pl-pattern">

### Dropdown filters

Filters can be collapsed to a single dropdown if:

- Screen real estate is limited due to constrained or dense layouts
- Filtering is not a primary interaction, meaning collapsing and obfuscating the filtering functionality is acceptable

{::nomarkdown}
<div class="pl-preview">
    <div class="dropdown">
        <button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="badge" style="margin-right: 5px;">3</span>Filters <span class="caret"></span></button>
        <div class="dropdown-menu" role="menu" style="padding: 0; width: 500px;">
            <form class="clearfix" role="form">
                <div style="width: 200px; min-height: 300px; border-right: 1px solid #ddd; float: left;">
                    <ul class="nav nav-stacked" role="tab-list" style="margin-top: 10px">
                        <li role="presentation" class="active"><a role="tab" href="#">Applied filters <span class="badge pull-right">3</span></a></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation"><a role="tab" href="#">Year</a></li>
                        <li role="presentation"><a role="tab" href="#">Conveyance type <span class="badge pull-right">2</span></a></li>
                        <li role="presentation"><a role="tab" href="#">Date range</a></li>
                        <li role="presentation"><a role="tab" href="#">Distance</a></li>
                        <li role="presentation"><a role="tab" href="#">Name <span class="badge pull-right">1</span></a></li>
                        <li role="presentation"><a role="tab" href="#">Colors</a></li>
                        <li role="presentation"><a role="tab" href="#">Tags</a></li>
                    </ul>
                </div>
                <div style="margin-left: 200px; max-height: 300px; overflow: auto;">
                    <div style="opacity: 1; display: inline-block; width: 100%;">
                        <div class="modal-body">
                            <a href="" class="pull-right">Clear</a>
                            <div class="form-group">
                                <label class="control-label">Conveyance type </label>
                                <div class="">
                                    <ul class="list-unstyled">
                                        <li><button class="filter-value">Assignment <i class="pull-right icon icon-close icon-muted"></i></button></li>
                                        <li><button class="filter-value">Change of name <a href=""><i class="pull-right icon icon-close icon-muted"></i></a></button></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Name</label>
                                <div class="">
                                    <ul class="list-unstyled">
                                        <li><button class="filter-value">Jane Doe <i class="pull-right icon icon-close icon-muted"></i></button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
{:/nomarkdown}

</div>

<div class="pl-pattern">

### Top filters

Filters can be listed horizontally if:

- You have less than 5 filters
- You have plenty of horizontal space above your collection

If you allow multi-selection in filters, the currently applied filters can be listed below each dropdown:

{::nomarkdown}
<div class="pl-preview">
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
</div>
{:/nomarkdown}

&nbsp;

If you allow single-selection for each filter, the currently applied filter can replace the label for the dropdown:

{::nomarkdown}
<div class="pl-preview">
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
</div>
{:/nomarkdown}

</div>
