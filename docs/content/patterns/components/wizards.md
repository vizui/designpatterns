---
title: "Wizards"
preview: true
---

[pattern]
### Steps

In many cases it's beneficial to show the list of steps a wizard will have. Depending on the number of steps and space available, steps can be listed vertically or horizontally.

#### Validation
- Indicate a step's validity
  - Show a check icon when valid (only if the user has left/submitted the form with valid input)
  - Show a warning icon when invalid (only if the user has left/submitted the form with errors)

#### Navigation
- Allow for navigating to previous steps when possible
- In some cases, skipping ahead is applicable
- Navigation may evolve depending on previous steps

&nbsp;

#### Vertical steps
Use vertical steps when there are many steps or 'nested' steps. 

[preview]
<div class="">
    <div class="" style="margin: auto; max-width: 700px;">
        <div class="" style="display: inline-block; width: 100%;">
            <div style="width: 200px; min-height: 400px; float: left;">
                <div class="panel-body">
                    <h4>New alert</h4>
                    <p>Add and configure new alerts for this environment.</p>
                </div>
                <ul class="nav nav-stacked nav-tree" role="tab-list">
                    <li role="presentation"><a role="tab" href="#"><span style="margin-left: -10px; position: relative; top: 1px;" class="fa fa-1x fa-fw fa-check text-success"></span> Criteria</a></li>
                    <li class="active" role="presentation"><a role="tab" href="#"><i style="margin-left: -10px; position: relative; top: 1px;" class="fa fa-1x fa-fw fa-warning text-danger"></i> Recipients</a>
                    </li>
                    <li class="disabled" role="presentation"><a role="tab"><i style="margin-left: -10px; position: relative; top: 1px;" class="fa fa-1x fa-fw"></i> Configure</a>
                        <ul class="nav nav-stacked nav-tree" role="tab-list">
                            <li class="disabled" role="presentation"><a href=""><i style="margin-left: -10px; position: relative; top: 1px;" class="fa fa-1x fa-fw"></i>Instances</a></li>
                            <li class="disabled" role="presentation"><a href=""><i style="margin-left: -10px; position: relative; top: 1px;" class="fa fa-1x fa-fw"></i>Monitoring</a></li>
                        </ul>
                    </li>
                    <li class="disabled" role="presentation"><a role="tab"><i style="margin-left: -10px; position: relative; top: 1px;" class="fa fa-1x fa-fw"></i> Review</a></li>
                </ul>
            </div>
            <div class="panel panel-default" style="margin-left: 200px; height: 400px; max-height: 400px; overflow: auto; position: relative;">
                <div class="panel-body">
                    <h4>Recipients <span class="pull-right" style="font-size: 13px;"><span class="text-primary">Step 2 of 6</span></span></h4>
                    <p>When the alert criteria is met, each recipient will receive an email notification.</p>
                    <hr>
                    <div class="alert alert-danger"><strong>Error!</strong> Fix the 1 error below.</div> 
                    <div class="form-group" style="">
                        <div class="input-group">
                            <input type="text" class="form-control" value="jsmith@corp.com">
                            <div class="input-group-btn"><button class="btn btn-default"><i class="fa fa-times"></i></button></div>
                        </div>
                    </div>
                    <div class="form-group has-error" style="">
                        <div class="input-group">
                            <input type="text" class="form-control" value="aharrison@corp">
                            <div class="input-group-btn"><button class="btn btn-default"><i class="fa fa-times"></i></button></div>
                        </div>
                        <p class="help-block">Invalid email address.</p>
                    </div>
                    <div class="form-group" style="">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter an email address">
                            <div class="input-group-btn"><button class="btn btn-default">Add</button></div>
                        </div>
                    </div>
                </div>
                <div style="position: absolute; text-align: right; padding: 15px; bottom: 0; right: 0; left: 0;">
                    <button class="btn btn-link pull-left">Back</button>
                    <button class="btn btn-primary">Next: Configure</button>
                </div>
            </div>
        </div>
    </div>
</div>
[/preview]

&nbsp;

#### Horizontal steps
Use horizontal steps when there are few steps.

[preview]
<div class="">
    <div class="" style="margin: auto; max-width: 450px;">
        <div class="panel panel-default" style="overflow: auto; position: relative;">
            <div class="">
                <h3 class="text-center">Create your account</h3>
                <ul class="nav nav-steps nav-centered" style="">
                    <li class="success"><a href=""><i class="step-icon"><i class="fa fa-check"></i></i>Account</a></li>
                    <li class="active"><a href=""><i class="step-icon">2</i>Personal</a></li>
                    <li class="disabled"><a href=""><i class="step-icon">3</i>Customize</a></li>
                </ul>
                <div class="panel-body">
                    <form class="" role="form">
                        <div class="form-group">
                          <label for="name1" class="control-label required">Name</label>
                          <div class="">
                            <input type="text" class="form-control" style="" id="name1">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="location1" class="control-label required">Location</label>
                          <div class="">
                            <input type="text" class="form-control" style="" id="location1" >
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="bio1" class=" control-label">Bio</label>
                          <div class="">
                            <textarea id="bio1" class="form-control" style="" rows="4"></textarea>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
            <div style="text-align: right; padding: 15px;">
                <button class="btn btn-link pull-left">Back</button>
                <button class="btn btn-default"><div class="pull-right" style="background: #004c97; padding: 6px; color: #fff; text-align: center;margin-top: 2px;margin-left: 8px;"><i class="fa fa-arrow-right fa-fw"></i></div><div style="margin-right: 4px; float: right;text-align: right;"><div class="text-muted small">NEXT</div>Customize</div></button>
            </div>
        </div>
    </div>
</div>
[/preview]

[/pattern]
