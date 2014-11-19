---
title: "Settings"
preview: true
---

[pattern]
<h3>Settings</h3>
Depending on the application type, settings can appear as a dedicated page or as a modal dialog. The complexity of the settings panel can vary drastically between applications. 

The settings panel can be composed of:
- Side tree navigation containing grouped settings
- The settings forms and controls

Avoid the urge to “just make it a setting”. Only add a setting if:
- More than 20% of your users will change the setting
- It's actually a setting that can be changed, not just information
- It's infrequently changed by users. If its frequently changed, consider making it more available

[preview]
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 750px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Settings</h4>
      </div>
      <div style="width: 200px; min-height: 400px; border-right: 1px solid #f0f2f3; float: left;">
        <ul class="nav nav-pills nav-stacked" role="tab-list" style="margin-top: 6px;">
            <li role="presentation" class="category">General</li>
            <li role="presentation"><a data-toggle="tab" role="tab" href="#">Profile</a></li>
            <li role="presentation" class="active"><a data-toggle="tab" role="tab" href="#">Account</a></li>
            <li role="presentation"><a data-toggle="tab" role="tab" href="#">Billing</a></li>
            <li role="presentation" class="category">System</li>
            <li role="presentation"><a data-toggle="tab" role="tab" href="#">Notifications</a></li>
            <li role="presentation"><a data-toggle="tab" role="tab" href="#">Emails</a></li>
            <li role="presentation"><a data-toggle="tab" role="tab" href="#">SSH keys</a></li>
        </ul>
      </div>
      <div style="margin-left: 200px; max-height: 400px; overflow: auto;" class="clearfix">
        <div style="opacity: 1; display: inline-block; width: 100%;">
<!--          <div style="padding: 16px 16px 0 16px;"><h4>Account settings</h4></div>
           <ul class="nav nav-tabs nav-tabs-light" role="tab-list" style="text-align: center; padding: 16px 16px 0 16px">
              <li class="active" role="presentation"><a data-toggle="tab" role="tab" href="">General</a></li>
              <li role="presentation"><a data-toggle="tab" role="tab" href="">Password</a></li>
              <li role="presentation"><a data-toggle="tab" role="tab" href="">Advanced</a></li>
          </ul>
           <form class="" role="form" style="padding: 16px; max-width: 300px;">
            <div class="form-group">
              <label for="emailInput2" class="3 control-label">Name</label>
              <div class="9">
                <input type="text" class="form-control" value="John Smith" id="emailInput2">
              </div>
            </div>
            <div class="form-group">
              <label for="passwordInput2" class="3 control-label">Email</label>
              <div class="9">
                <input type="email" class="form-control" value="john.smith@gmail.com" id="passwordInput2" >
              </div>
            </div>
            <div class="form-group">
              <label for="passwordInput2" class="3 control-label">Language</label>
              <div class="9">
                <select id="se17" class="form-control select2">
                    <option value="A">English (US)</option>
                    <option value="B">English (UK)</option>
                    <option value="C">Español</option>
                </select>
              </div>
            </div>
          </form>-->
        </div>
      </div>
      <div class="modal-footer" style="clear: both;">
        <button type="button" class="btn btn-default">Done</button>
      </div>
    </div>
  </div>
</div>
[/preview]
[/pattern]

