---
title: "Filters"
preview: true
---

[pattern]
### Side filters

[preview]
<div class="container-fluid" style="margin-top: 8px;">
    <div class="row">
        <div style="max-width: 275px;" class="pull-left">
            <form class="filters">
                <div class="filter-heading">
                    Refine by <a href="" class="filters-clear">Defaults</a>
                </div>
                <div data-toggle="collapse" data-target="#filterGroup2" class="filter-group-title">
                    <i class="fa fa-angle-down pull-right text-muted fa-1x"></i> Conveyance Type 
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
                <div data-toggle="collapse" data-target="#filterGroup4" class="filter-group-title">
                    Year <i class="fa fa-angle-right pull-right text-muted fa-1x"></i>
                </div>
                <div id="filterGroup4" class="collapse in">
                    <div class="filter-group-content">
                        <div class="form-group">
                            <ul class="list-unstyled">
                                <li><a href="">2014 <span class="text-muted">(15)</span></a></li>
                                <li><a href="">2013 <span class="text-muted">(23)</span></a></li>
                                <li><a href="">2012 <span class="text-muted">(41)</span></a></li>
                                <li><a href="">2011 <span class="text-muted">(39)</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-toggle="collapse" data-target="#filterGroup1" class="filter-group-title">
                    <i class="fa fa-angle-right pull-right text-muted fa-1x"></i> Date Range 
                </div>
                <div id="filterGroup1" class="collapse in">
                    <div class="filter-group-content">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <span class="input-icon fa fa-calendar-o"></span>
                                <input type="text" placeholder="Start" class="datepicker form-control" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'">
                            </div>
                            <div class="form-group col-sm-6">
                                <span class="input-icon fa fa-calendar-o"></span>
                                <input type="text" placeholder="End" class="datepicker form-control" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'">
                            </div>
                        </div>
                    </div>
                </div>
                <div data-toggle="collapse" data-target="#filterGroup5" class="filter-group-title">
                    <i class="fa fa-angle-right pull-right text-muted fa-1x"></i> Distance 
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
                    <i class="fa fa-angle-right pull-right text-muted fa-1x"></i> Name 
                </div>
                <div id="filterGroup6" class="collapse in">
                    <div class="filter-group-content">
                        <div class="form-group">
                            <label for="serange" class="sr-only control-label">Range</label>
                            <span class="input-icon fa fa-search"></span>
                            <input type="text" class="form-control" placeholder="Search">
                        </div>
                    </div>
                </div>
                <div data-toggle="collapse" data-target="#filterGroup3" class="filter-group-title">
                    Colors <i class="fa fa-angle-right pull-right text-muted fa-1x"></i>
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
                    Tags <i class="fa fa-angle-right pull-right text-muted fa-1x"></i>
                </div>
                <div id="filterGroup7" class="collapse in">
                    <div class="filter-group-content">
                        <div class="form-group">
                            <ul class="list-unstyled">
                                <li class="filter-value">Assignment <i class="pull-right fa fa-times"></i></li>
                                <li class="filter-value">Change of name <i class="pull-right fa fa-times"></i></li>
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
            </form>
        </div>
        <div style="margin-left: 290px; opacity: .15;">
            <div class="panel panel-default" style="display: inline-block; width: 100%;">
                <div class="panel-body">
                    <div style="margin-bottom: 4px; display: inline-block; width: 100%;">
                        <div class="pull-right">
                            <div class="dropdown" style="display: inline-block">
                                <button type="button" id="dropdownMenu3" class="btn btn-link dropdown-toggle" data-toggle="dropdown"><span class="text-muted">Showing</span> 1-100 <span class="caret"></span></button>
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
                        </div>
                        <h4 style="margin-top: 4px; margin-bottom: 20px;">4,342 <span class="text-muted">results found</span></h4>
                    </div>
                    <div>
                        <div class="pull-left">
                            <button class="btn btn-default"><input type="checkbox" indeterminate style="margin: 0;"> &nbsp;<span class="caret"></span></button> <span class="btn btn-hover">8 selected</span>
                        </div>
                        <div class="pull-right">
                            <button class="btn btn-default">Sort by Inventor <span class="caret"></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel panel-default" style="display: inline-block; width: 100%;">
                <div class="panel-heading" style="padding: 10px 14px; display: inline-block; width: 100%;">
                    <div class="pull-right">
                        <button class="btn btn-hover btn-icon-only"><i class="fa fa-download fa-1x"></i></button>
                        <button class="btn btn-hover btn-icon-only"><i class="fa fa-envelope fa-1x"></i></button>
                    </div>
                    <div style="padding: 4px 8px;">
                        <input type="checkbox"> <span class="bold">10951/1202</span>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-6">
                            <dl style="margin-bottom: 0;" class="dl-horizontal">
                                <dt>Examiner</dt>
                                <dd>IP, Sikyin / 69776 / 1742</dd>
                                <dt>SPE (Multiple)</dt>
                                <dd>John Olaskey</dd>
                                <dt>Applicants</dt>
                                <dd>Roman Amirpur</dd>
                                <dt>Inventors</dt>
                                <dd>Disney Dale</dd>
                                <dt>Law Firm</dt>
                                <dd>Clayton & Clayton Associates</dd>
                            </dl>
                        </div>
                        <div class="col-md-6">
                            <dl style="margin-bottom: 0;" class="dl-horizontal">
                                <dt>Confirmation #</dt>
                                <dd>1662</dd>
                                <dt>Publication #</dt>
                                <dd><a href="">32132132132 <i class="fa fa-external-link-square fa-1x"></i></a></dd>
                                <dt>Patent #</dt>
                                <dd>---</dd>
                                <dt>Attorney Docket #</dt>
                                <dd>10951/1202</dd>
                                <dt>Foreign Priority Claimed</dt>
                                <dd>Yes</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel panel-default" style="display: inline-block; width: 100%;">
                <div class="panel-heading" style="padding: 10px 14px; display: inline-block; width: 100%;">
                    <div class="pull-right">
                        <button class="btn btn-hover btn-icon-only"><i class="fa fa-download fa-1x"></i></button>
                        <button class="btn btn-hover btn-icon-only"><i class="fa fa-envelope fa-1x"></i></button>
                    </div>
                    <div style="padding: 4px 8px;">
                        <input type="checkbox"> <span class="bold">10951/1202</span>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-6">
                            <dl style="margin-bottom: 0;" class="dl-horizontal">
                                <dt>Examiner</dt>
                                <dd>IP, Sikyin / 69776 / 1742</dd>
                                <dt>SPE (Multiple)</dt>
                                <dd>John Olaskey</dd>
                                <dt>Applicants</dt>
                                <dd>Roman Amirpur</dd>
                                <dt>Inventors</dt>
                                <dd>Disney Dale</dd>
                                <dt>Law Firm</dt>
                                <dd>Clayton & Clayton Associates</dd>
                            </dl>
                        </div>
                        <div class="col-md-6">
                            <dl style="margin-bottom: 0;" class="dl-horizontal">
                                <dt>Confirmation #</dt>
                                <dd>1662</dd>
                                <dt>Publication #</dt>
                                <dd><a href="">32132132132 <i class="fa fa-external-link-square fa-1x"></i></a></dd>
                                <dt>Patent #</dt>
                                <dd>---</dd>
                                <dt>Attorney Docket #</dt>
                                <dd>10951/1202</dd>
                                <dt>Foreign Priority Claimed</dt>
                                <dd>Yes</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel panel-default" style="display: inline-block; width: 100%;">
                <div class="panel-heading" style="padding: 10px 14px; display: inline-block; width: 100%;">
                    <div class="pull-right">
                        <button class="btn btn-hover btn-icon-only"><i class="fa fa-download fa-1x"></i></button>
                        <button class="btn btn-hover btn-icon-only"><i class="fa fa-envelope fa-1x"></i></button>
                    </div>
                    <div style="padding: 4px 8px;">
                        <input type="checkbox"> <span class="bold">10951/1202</span>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-6">
                            <dl style="margin-bottom: 0;" class="dl-horizontal">
                                <dt>Examiner</dt>
                                <dd>IP, Sikyin / 69776 / 1742</dd>
                                <dt>SPE (Multiple)</dt>
                                <dd>John Olaskey</dd>
                                <dt>Applicants</dt>
                                <dd>Roman Amirpur</dd>
                                <dt>Inventors</dt>
                                <dd>Disney Dale</dd>
                                <dt>Law Firm</dt>
                                <dd>Clayton & Clayton Associates</dd>
                            </dl>
                        </div>
                        <div class="col-md-6">
                            <dl style="margin-bottom: 0;" class="dl-horizontal">
                                <dt>Confirmation #</dt>
                                <dd>1662</dd>
                                <dt>Publication #</dt>
                                <dd><a href="">32132132132 <i class="fa fa-external-link-square fa-1x"></i></a></dd>
                                <dt>Patent #</dt>
                                <dd>---</dd>
                                <dt>Attorney Docket #</dt>
                                <dd>10951/1202</dd>
                                <dt>Foreign Priority Claimed</dt>
                                <dd>Yes</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
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
        <h4 style="display: inline-block;">Refine by</h4>
        <div style="display: inline-block; vertical-align: top;">
            <button class="btn btn-link">
                Date Range <span class="caret"></span>
            </button>
            <ul class="list-unstyled">
                <li class="filter-value">4/01/2014 - 5/01/2014 <i class="pull-right fa fa-times"></i></li>
            </ul>
        </div>
        <div style="display: inline-block; vertical-align: top;">
            <button class="btn btn-link">
                Conveyance Type <span class="caret"></span>
            </button>
            <ul class="list-unstyled">
                <li class="filter-value">Assignment <i class="pull-right fa fa-times"></i></li>
                <li class="filter-value">Change of name <i class="pull-right fa fa-times"></i></li>
            </ul>
        </div>
        <div style="display: inline-block; vertical-align: top;">
            <button class="btn btn-link">
                Color <span class="caret"></span>
            </button>
            <ul class="list-unstyled">
                <li class="filter-value">4 colors <i class="pull-right fa fa-times"></i></li>
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
        <h4 style="display: inline-block;">Refine by</h4>
        <button class="btn btn-link">
            4/01/2014 - 5/01/2014 <span class="caret"></span>
        </button>
        <button class="btn btn-link">
            Conveyance Type <span class="caret"></span>
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
