---
title: "Forms"
---

[pattern]
### General

__Do__
- Properly mark fields as required
- Add help blocks with inputs when necessary, especially when users may not fully understand the purpose of the input
- Place constructive action buttons on the right, and deconstructive action buttons on the left of the form
- If necessary, place short, related inputs on the same line (e.g., `City` and `State`, `Start` and `End`, `Min` and `Max`)
- Ensure that unsaved changes are not easily lost

__Don't__
- Use placeholders as the only label
- Place unrelated inputs on the same line

&nbsp;

This is an evolving document. Here are some things that are still being worked on.<br>
<span class="label label-warning">TODO</span> Field width guidelines<br>
<span class="label label-warning">TODO</span> Advanced options<br>
<span class="label label-warning">TODO</span> Dynamic/evolving forms<br>
<span class="label label-warning">TODO</span> Input/format parsing<br>
<span class="label label-warning">TODO</span> Add/remove fields (e.g., multiple phone numbers)<br>
<span class="label label-warning">TODO</span> More examples<br>

&nbsp;

[/pattern]

[pattern]
### Labels

Form labels can either go above or beside the input, depending on the space constraints. If you are horizontally constrained, place the labels above the input, otherwise, place the labels beside the input. In a responsive design, labels should automatically reposition themselves depending on the space available.

__Do__
- Ensure that clicking on a label focuses the corresponding input
- Use sentence capitalization for labels
- Use concise labels name
- Use the user's language for labels
- Be consistent with label positioning (above/beside)
- Be consistent with questions or statements labels

__Don't__
- Use colons after labels

&nbsp;

#### Top aligned labels

Labels are placed above the inputs, left justified.

[preview]
<div class="row">
    <form role="form" class="col-sm-10 col-md-8 col-lg-6">
      <div class="form-group col-sm-offset-3">
        <label class="control-label" for="emailInput">Email</label>
        <input type="email" class="form-control" id="emailInput">
      </div>
      <div class="form-group col-sm-offset-3">
        <label class="control-label" for="passwordInput">Password</label>
        <input type="password" class="form-control" id="passwordInput" >
      </div>
    </form>
</div>
[/preview]

```html
<form role="form">
  <div class="form-group col-sm-offset-3">
    <label class="control-label" for="emailInput">Email</label>
    <input type="email" class="form-control" id="emailInput">
  </div>
  <div class="form-group col-sm-offset-3">
    <label class="control-label" for="passwordInput">Password</label>
    <input type="password" class="form-control" id="passwordInput" >
  </div>
</form>
```

&nbsp;

#### Left aligned labels

Labels are to the left of the input, right justified. 

[preview]
<div class="row">
  <form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
    <div class="form-group">
      <label for="emailInput2" class="col-sm-3 control-label">Email</label>
      <div class="col-sm-9">
        <input type="email" class="form-control" id="emailInput2">
      </div>
    </div>
    <div class="form-group">
      <label for="passwordInput2" class="col-sm-3 control-label">Password</label>
      <div class="col-sm-9">
        <input type="password" class="form-control" id="passwordInput2" >
      </div>
    </div>
  </form>
</div>
[/preview]



```html
<form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
  <div class="form-group">
    <label for="emailInput2" class="col-sm-3 control-label">Email</label>
    <div class="col-sm-9">
      <input type="email" class="form-control" id="emailInput2">
    </div>
  </div>
  <div class="form-group">
    <label for="passwordInput2" class="col-sm-3 control-label">Password</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="passwordInput2" >
    </div>
  </div>
</form>
```


[/pattern]
[pattern]
### Required fields
Required fields are generally marked with an asterisk. For external, public facing forms, you may want to put a `* indicates required` message. For internal applications, this is generally not necessary.

If the majority of the fields are required, consider adding `(optional)` to the minority optional fields.

&nbsp;

#### Top aligned labels
When the fields are top aligned, the asterisk is placed on the right.
[preview]
<div class="row">
  <form class="col-sm-10 col-md-8 col-lg-6" role="form">
    <div class="form-group col-sm-offset-3">
      <label for="emailInput3" class="control-label required">Email</label>
      <input type="email" class="form-control" id="emailInput3">
    </div>
    <div class="form-group col-sm-offset-3">
      <label for="emailInput4" class="control-label">Password</label>
      <input type="password" class="form-control" id="emailInput4">
    </div>
    <div class="form-group col-sm-offset-3">
        <span class="help-block text-right">* indicates required</span>
    </div>
  </form>
</div>
[/preview]
```html
<form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
  <div class="form-group">
    <label for="emailInput5" class="col-sm-3 control-label required">Email</label>
    <div class="col-sm-9">
      <input type="email" class="form-control" id="emailInput5">
    </div>
  </div>
  <div class="form-group">
    <label for="pw6" class="col-sm-3 control-label">Password</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="pw6">
    </div>
  </div>
</form>
```

&nbsp;

#### Left aligned labels
When the fields are left aligned, the asterisk is placed to the left.

[preview]
<div class="row">
  <form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
    <div class="form-group">
      <label for="em7" class="col-sm-3 control-label required">Email</label>
      <div class="col-sm-9">
        <input type="email" class="form-control" id="em7">
      </div>
    </div>
    <div class="form-group">
      <label for="pw7" class="col-sm-3 control-label">Password</label>
      <div class="col-sm-9">
        <input type="password" class="form-control" id="pw7">
      </div>
    </div>
  </form>
</div>
[/preview]

```html
<form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
  <div class="form-group">
    <label for="em7" class="col-sm-3 control-label required">Email</label>
    <div class="col-sm-9">
      <input type="email" class="form-control" id="em7">
    </div>
  </div>
  <div class="form-group">
    <label for="pw7" class="col-sm-3 control-label">Password</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="pw7">
    </div>
  </div>
</form>
```

[/pattern]

[pattern]
### Form validation

There are two types of form validation, often used together.

- __Inline level__: Validation errors appear directly below the field with errors (e.g., `This field is required.`)
- __Form level__: Validation errors appear at the top or bottom of the form (e.g., `The email or password you entered is incorrect.`, and `Please fix the 3 errors.`)

__Do__
- Scroll to and focus the first field with an error when the submit button is pressed.
- Provide validation feedback as soon as possible, either 500ms after a key is pressed, when the field is blurred, or (if all else fails) when the form is submitted.
- Provide inline level validation for fields that are known to be invalid
- Provide form level validation for large forms, or when the system doesn't know exactly which field is invalid
- Describe _why_ an error occurred. `Email is already in use` rather than `Invalid email`
- Describe/imply what the user should do to fix the error

__Don't__
- Cause the form to 'bounce' as validation errors show/hide while the user is typing
- Include technical jargon in errors

[preview]
<div class="row">
  <form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
    <div class="form-group has-error">
      <label for="em9" class="col-sm-3 control-label required">Email</label>
      <div class="col-sm-9">
        <input type="email" class="form-control" id="em9" value="john.smith@gmail">
        <span class="help-block">This email address is not valid.<span>
      </div>
    </div>
    <div class="form-group has-error">
      <label for="pw9" class="col-sm-3 control-label required">Password</label>
      <div class="col-sm-9">
        <input type="password" class="form-control" id="pw9" >
        <span class="help-block">This field is required.<span>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-3 col-sm-9">
        <button type="submit" class="btn btn-primary">Sign in</button>
        <a class="pull-right" style="padding: 7px 0; display: inline-block; cursor: pointer;">Forgot password?</a> <!-- todo: inline style -->
      </div>
    </div>
  </form>
</div>
[/preview]

```html
<form class="form-horizontal" role="form">
  <div class="form-group has-error">
    <label for="em9" class="col-sm-3 control-label required">Email</label>
    <div class="col-sm-9">
      <input type="email" class="form-control" id="em9" value="john.smith@gmail">
      <span class="help-block">This email address is not valid.<span>
    </div>
  </div>
  <div class="form-group has-error">
    <label for="pw9" class="col-sm-3 control-label required">Password</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="pw9" >
      <span class="help-block">This field is required.<span>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-3 col-sm-9">
      <a style="padding: 7px 0; display: inline-block; cursor: pointer;">Forgot password?</a> <!-- todo: inline style -->
      <button type="submit" class="btn btn-primary pull-right">Sign in</button>
    </div>
  </div>
</form>
```

[preview]
<div class="row">
  <form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
    <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
            <div class="alert alert-danger" style="margin: 0;">
                The email or password you entered is incorrect.
            </div>
        </div>
    </div>
    <div class="form-group">
      <label for="em10" class="col-sm-3 control-label required">Email</label>
      <div class="col-sm-9">
        <input type="email" class="form-control" id="em10" value="john.smith@gmail.com">
      </div>
    </div>
    <div class="form-group">
      <label for="pw10" class="col-sm-3 control-label required">Password</label>
      <div class="col-sm-9">
        <input type="password" class="form-control" id="pw10" >
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-3 col-sm-9">
        <button type="submit" class="btn btn-primary">Sign in</button>
        <a style="padding: 7px 0; display: inline-block; cursor: pointer;" class="pull-right">Forgot password?</a> <!-- todo: inline style -->
      </div>
    </div>
  </form>
</div>
[/preview]

```html
<form class="form-horizontal" role="form">
  <div class="form-group has-error">
    <label for="em10" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="em10">
      <span class="help-block">Email is not valid.<span>
    </div>
  </div>
  <div class="form-group">
    <label for="pw10" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="pw10" >
    </div>
  </div>
  <div class="form-group has-error">
    <label for="passwordInput4" class="col-sm-2 control-label">Confirm password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="passwordInput4">
      <span class="help-block">Passwords do not match.</span>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
```
[/pattern]

[pattern]
### Help text

Help text can be placed at the top of the form, under the heading of a form group, and under an individual form field. Use the class `help-block` for lightened help text.

[preview]

<div class="row">
    <form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
        <div class="form-group">
            <div class="col-sm-9 col-sm-offset-3">
                <h4>Public profile</h4>
                <span class="help-block">This information will be visible on your public profile page.</span>
            </div>
        </div>
        <div class="form-group">
            <label for="ht3" class="col-sm-3 control-label">Full name</label>
            <div class="col-sm-9">
                <input class="form-control" type="text" id="ht3">
            </div>
        </div>
        <div class="form-group">
            <label for="ht4" class="col-sm-3 control-label">Email</label>
            <div class="col-sm-9">
                <input class="form-control" type="text" id="ht4">
                <span class="help-block">This is how people will contact you.</span>
            </div>
        </div>
        <div class="form-group">
            <label for="ht1" class="col-sm-3 control-label">URL</label>
            <div class="col-sm-9">
                <input class="form-control" type="text" id="ht1">
            </div>
        </div>
    </form>
</div>

[/preview]

```html
<form class="form-horizontal" role="form">
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <h4>Public profile</h4>
            <span class="help-block">This information will be visible from your public profile page.</span>
        </div>
    </div>
    <div class="form-group">
        <label for="ht3" class="col-sm-3 control-label">Full name</label>
        <div class="col-sm-9">
            <input class="form-control" type="text" id="ht3">
        </div>
    </div>
    <div class="form-group">
        <label for="ht4" class="col-sm-3 control-label">Email</label>
        <div class="col-sm-9">
            <input class="form-control" type="text" id="ht4">
            <span class="help-block">This will be public</span>
        </div>
    </div>
    <div class="form-group">
        <label for="ht1" class="col-sm-3 control-label">Email</label>
        <div class="col-sm-9">
            <input class="form-control" type="text" id="ht1">
        </div>
    </div>
</form>
```

[/pattern]

[pattern]
### Form groups

Grouping related form controls into groups helps users understand the purpose more fields at once. 


[preview]
<div class="row">
    <form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
        <div class="form-group">
            <div class="col-sm-9 col-sm-offset-3">
                <h4>Personal Information</h4>
            </div>
        </div>
        <div class="form-group">
            <label for="fg1" class="col-sm-3 control-label required">Email</label>
            <div class="col-sm-9">
              <input type="email" class="form-control" id="fg1">
            </div>
        </div>
        <div class="form-group">
            <label for="fg2" class="col-sm-3 control-label required">Full name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="fg2">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-9 col-sm-offset-3">
                <h4 style="margin-top: 40px;">Shipping Details</h4>
            </div>
        </div>
        <div class="form-group">
            <label for="fg3" class="col-sm-3 control-label required">Address line 1</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="fg3">
            </div>
        </div>
    </form>
</div>
[/preview]

```html
<div class="row">
    <form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
        <div class="form-group">
            <div class="col-sm-9 col-sm-offset-3">
                <h4>Personal Information</h4>
            </div>
        </div>
        <div class="form-group">
            <label for="fg1" class="col-sm-3 control-label required">Email</label>
            <div class="col-sm-9">
              <input type="email" class="form-control" id="fg1">
            </div>
        </div>
        <div class="form-group">
            <label for="fg2" class="col-sm-3 control-label required">Full name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="fg2">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-9 col-sm-offset-3">
                <h4>Shipping Details</h4>
            </div>
        </div>
        <div class="form-group">
            <label for="fg3" class="col-sm-3 control-label required">Address line 1</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="fg3">
            </div>
        </div>
    </form>
</div>
```

[/pattern]

[pattern]
### Radio buttons

Radio buttons provide a set of mutually exclusives options from which a person may only select one. 

__Do__
- Provide an initially checked option when the field is not required and/or there is a sane default
- Ensure the labels are click-able, as well as the radio button
- Use concise labels
- Align vertically when possible
- Align in shorter columns when there are many options

[preview]
<form class="form-horizontal" role="form">
  <div class="form-group">
    <label class="col-sm-2 control-label">Shipping</label>
    <div class="col-sm-10">
      <div class="radio">
        <label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>UPS</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">FedEx</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">USPS</label>
      </div>
    </div>
  </div>
</form>
[/preview]

```html
<form class="form-horizontal" role="form">
  <div class="form-group">
    <label class="col-sm-2 control-label">Shipping</label>
    <div class="col-sm-10">
      <div class="radio">
        <label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>UPS</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">FedEx</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">USPS</label>
      </div>
    </div>
  </div>
</form>
```

[/pattern]

[pattern]
### Checkboxes

Checkboxes provide a set of options from which a person may select none, one, many, or all.

__Do__
- Ensure the labels are click-able, as well as the checkboxes
- Try to use 'positive' labels.
- Use concise labels
- Align vertically when possible
- Align in shorter columns when there are many options

[preview]
<div class="row">
  <form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
    <div class="form-group col-sm-12">
      <label class="col-sm-3 control-label">Post card</label>
      <div class="col-sm-9">
        <div class="checkbox">
          <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked>Post card received</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2" checked>Postage paid</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes3" value="option3">Address included</label>
        </div>
      </div>
    </div>
    <div class="form-group col-sm-12">
      <label class="col-sm-3 control-label">Options</label>
      <div class="col-sm-9">
          <div class="row">
              <div class="col-sm-6">
                <div class="checkbox">
                  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked>Option A</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2" checked>Option B</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes3" value="option3">Option C</label>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="checkbox">
                  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked>Option D</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2" checked>Option E</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes3" value="option3">Option F</label>
                </div>
              </div>
          </div>
      </div>
    </div>
  </form>
</div>
[/preview]

```html
<form class="form-horizontal" role="form">
    <div class="form-group col-sm-12">
      <label class="col-sm-3 control-label">Post card</label>
      <div class="col-sm-9">
        <div class="checkbox">
          <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked>Post card received</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2" checked>Postage paid</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes3" value="option3">Address included</label>
        </div>
      </div>
    </div>
    <div class="form-group col-sm-12">
      <label class="col-sm-3 control-label">Options</label>
      <div class="col-sm-9">
          <div class="row">
              <div class="col-sm-6">
                <div class="checkbox">
                  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked>Option A</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2" checked>Option B</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes3" value="option3">Option C</label>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="checkbox">
                  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked>Option D</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2" checked>Option E</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes3" value="option3">Option F</label>
                </div>
              </div>
          </div>
      </div>
    </div>
  </form>
```

[/pattern]

[pattern]
### Inline checkboxes and radio buttons

Inline inputs are generally more difficult to scan than vertically stacked inputs. Try to use them sparingly.

__Do__
- Ensure that there is adequate spacing between adjacent checkboxes and radio buttons. 
- Use when you have vertical space constraints

[preview]
<form class="form-horizontal" role="form">
    <div class="form-group">
        <label class="col-sm-2 control-label required">Entry</label>
        <div class="col-sm-10">
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox1" value="option1" checked> Checked
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox2" value="option2" checked> Deleted
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox3" value="option3"> Changed
            </label>
        </div>
    </div>
</form>
<form class="form-horizontal" role="form">
    <div class="form-group">
        <label class="col-sm-2 control-label">Shipping</label>
        <div class="col-sm-10">
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked> UPS
            </label>
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> FedEx
            </label>
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> USPS
            </label>
        </div>
    </div>
</form>
[/preview]

```html
<form class="form-horizontal" role="form">
    <div class="form-group">
        <label class="col-sm-2 control-label required">Entry</label>
        <div class="col-sm-10">
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox1" value="option1" checked> Checked
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox2" value="option2" checked> Deleted
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox3" value="option3"> Changed
            </label>
        </div>
    </div>
</form>
<form class="form-horizontal" role="form">
    <div class="form-group">
        <label class="col-sm-2 control-label">Shipping</label>
        <div class="col-sm-10">
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> UPS
            </label>
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> FedEx
            </label>
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> USPS
            </label>
        </div>
    </div>
</form>
```
[/pattern]

[pattern]

### Text areas

__Do__
- Provide enough vertical space (visible rows of text) for the anticipated/average amount of input
- Give users an indication of any character limits
  - Turn limit indicator red when limit exceeded
  - Update limit indicator as keys are pressed

[preview]
<div class="row">
    <form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
        <div class="form-group has-error">
            <label for="ta1" class="col-sm-3 control-label">Description</label>
            <div class="col-sm-9">
                <textarea id="ta1" rows="3" class="form-control">This textfield has exceed the character limit by 10 characters. The user can still continue to type after reaching the limit, but the field is invalid.</textarea>
                <span class="help-block pull-right"><strong>150/140</strong> character limit</span>
            </div>
        </div>
        <div class="form-group">
            <label for="ta2" class="col-sm-3 control-label">Description</label>
            <div class="col-sm-9">
                <textarea id="ta2" rows="3" class="form-control"></textarea>
                <span class="help-block pull-right">0/140 character limit</span>
            </div>
        </div>
    </form>
</div>
[/preview]

```html
<form class="form-horizontal" role="form">
    <div class="form-group has-error">
        <label for="ta1" class="col-sm-3 control-label">Description</label>
        <div class="col-sm-9">
            <textarea id="ta1" rows="3" class="form-control">This textfield has exceed the character limit by 10 characters. The user can still continue to type after reaching the limit, but the field is invalid.</textarea>
            <span class="help-block pull-right"><strong>150/140</strong> character limit</span>
        </div>
    </div>
    <div class="form-group">
        <label for="ta2" class="col-sm-3 control-label">Description</label>
        <div class="col-sm-9">
            <textarea id="ta2" rows="3" class="form-control"></textarea>
            <span class="help-block pull-right">0/140 character limit</span>
        </div>
    </div>
</form>
```

[/pattern]

[pattern]
### Examples

These examples show various form configurations.

&nbsp;

#### Various form elements

[preview]
<div class="row">
    <form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
      <div class="form-group">
        <label for="em12" class="col-sm-3 control-label required">Email</label>
        <div class="col-sm-9">
          <input type="email" class="form-control" id="em12">
          <span class="help-block">Your email will be used to log in.</span>
        </div>
      </div>
      <div class="form-group">
        <label for="n12" class="col-sm-3 control-label required">Name</label>
        <div class="col-sm-9">
          <input type="email" class="form-control" id="n12">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-3 control-label required">Shipping</label>
        <div class="col-sm-9">
          <div class="radio">
            <label><input type="radio" name="opr2" id="opr21" value="option1" checked>UPS</label>
          </div>
          <div class="radio">
            <label><input type="radio" name="opr2" id="opr22" value="option2">FedEx</label>
          </div>
          <div class="radio">
            <label><input type="radio" name="opr2" id="opr23" value="option3">USPS</label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="ci12" class="col-sm-3 control-label required">City</label>
        <div class="col-sm-4">
          <input type="email" class="form-control" id="ci12">
        </div>
        <label for="si12" class="col-sm-2 control-label required">State</label>
        <div class="col-sm-3">
            <select id="si12" class="form-control">
              <option>AL</option>
              <option>AK</option>
              <option>AZ</option>
              <option>AR</option>
              <option>CA</option>
            </select>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
            <div class="checkbox">
              <label>
                <input type="checkbox"> Send me notifications via email
              </label>
            </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
          <button type="submit" class="btn btn-default">Back</button>
          <button type="submit" class="btn btn-primary pull-right ">Next</button>
        </div>
      </div>
    </form>
</div>
[/preview]

```html
<div class="row">
    <form class="form-horizontal col-sm-10 col-md-8 col-lg-6" role="form">
      <div class="form-group">
        <label for="em12" class="col-sm-3 control-label required">Email</label>
        <div class="col-sm-9">
          <input type="email" class="form-control" id="em12">
          <span class="help-block">Your email will be used to log in.</span>
        </div>
      </div>
      <div class="form-group">
        <label for="n12" class="col-sm-3 control-label required">Name</label>
        <div class="col-sm-9">
          <input type="email" class="form-control" id="n12">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-3 control-label required">Shipping</label>
        <div class="col-sm-9">
          <div class="radio">
            <label><input type="radio" name="opr2" id="opr21" value="option1" checked>UPS</label>
          </div>
          <div class="radio">
            <label><input type="radio" name="opr2" id="opr22" value="option2">FedEx</label>
          </div>
          <div class="radio">
            <label><input type="radio" name="opr2" id="opr23" value="option3">USPS</label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="ci12" class="col-sm-3 control-label required">City</label>
        <div class="col-sm-4">
          <input type="email" class="form-control" id="ci12">
        </div>
        <label for="si12" class="col-sm-2 control-label required">State</label>
        <div class="col-sm-3">
            <select id="si12" class="form-control">
              <option>AL</option>
              <option>AK</option>
              <option>AZ</option>
              <option>AR</option>
              <option>CA</option>
            </select>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
            <div class="checkbox">
              <label>
                <input type="checkbox"> Send me notifications via email
              </label>
            </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
          <button type="submit" class="btn btn-default">Back</button>
          <button type="submit" class="btn btn-primary pull-right ">Submit</button>
        </div>
      </div>
    </form>
</div>
```
&nbsp;

[preview]
<div class="row">
    <div class="col-sm-10 col-md-8 col-lg-6">
        <form role="form" class="col-sm-offset-3" style="max-width: 350px;">
          <div class="form-group">
            <div class="alert alert-danger">
              <strong>Woops!</strong> Please fix the 3 errors.
            </div>
          </div>
          <div class="form-group has-error">
            <label class="control-label required" for="em12">USPTO email address</label>
            <input type="email" class="form-control" id="em12" value="john.smith@gmail.com">
            <span class="help-block">Email must end with uspto.gov.</span>
          </div>
          <div class="form-group has-error" >
            <label class="control-label required" for="eid12">Employee ID</label> <a href="#" class="pull-right">Find my Employee ID</a>
            <input type="text" class="form-control" id="eid12" value="238942a">
            <span class="help-block">Employee ID must be numeric.</span>
          </div>
          <div class="form-group">
            <label class="control-label required" for="t12">Title</label>
            <select class="form-control" id="t12">
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss">Miss</option>
            </select>
          </div>
          <div class="form-group">
            <label class="control-label required" for="fn12">First name</label>
            <input type="text" class="form-control" id="fn12" value="John">
          </div>
          <div class="form-group has-error">
            <label class="control-label required" for="mn12">Middle name</label>
            <input type="text" class="form-control" id="mn12">
            <span class="help-block">Middle name is required.</span>
          </div>
          <div class="form-group">
            <label class="control-label required" for="ln12">Last name</label>
            <input type="text" class="form-control" id="ln12" value="Smith">
          </div>
          <div class="form-group">
            <label class="control-label required" for="phone12">Telephone number</label>
            <input type="text" class="form-control" id="phone12">
          </div>
          <div class="form-group">
            <br>
            <h4>Address</h4>
          </div>
          <div class="form-group">
            <label class="control-label required" for="country12">Country</label>
            <select class="form-control" id="country12">
              <option value="Mr.">United States</option>
            </select>
          </div>
          <div class="form-group">
            <label class="control-label required" for="adline1">Address line 1</label>
            <input type="text" class="form-control" id="adline1">
          </div>
          <div class="form-group">
            <label class="control-label required" for="adline2">Address line 2</label>
            <input type="text" class="form-control" id="adline2">
          </div>
          <div class="form-group">
            <label class="control-label required" for="city12">City</label>
            <input type="text" class="form-control" id="city12">
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label class="control-label required" for="state12">State</label>
                <input type="text" class="form-control" id="state12">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label class="control-label required" for="zipcode12">Zip code</label>
                <input type="text" class="form-control" id="zipcode12">
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-default">Cancel</button>
          <button type="submit" disabled class="btn btn-primary pull-right">Next</button>
        </form>
    </div>
</div>
[/preview]
```html
<div class="row">
    <form role="form" class="col-xs-12 col-sm-offset-2" style="max-width: 350px;">
      <div class="form-group">
        <div class="alert alert-danger">
          <strong>Woops!</strong> Please fix the 3 errors.
        </div>
      </div>
      <div class="form-group has-error">
        <label class="control-label required" for="em12">USPTO email address</label>
        <input type="email" class="form-control" id="em12" value="john.smith@gmail.com">
        <span class="help-block">Email must end with uspto.gov.</span>
      </div>
      <div class="form-group has-error" >
        <label class="control-label required" for="eid12">Employee ID</label> <a href="#" class="pull-right">Find my Employee ID</a>
        <input type="text" class="form-control" id="eid12" value="238942a">
        <span class="help-block">Employee ID must be numeric.</span>
      </div>
      <div class="form-group">
        <label class="control-label required" for="t12">Title</label>
        <select class="form-control" id="t12">
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Miss">Miss</option>
        </select>
      </div>
      <div class="form-group">
        <label class="control-label required" for="fn12">First name</label>
        <input type="text" class="form-control" id="fn12" value="John">
      </div>
      <div class="form-group has-error">
        <label class="control-label required" for="mn12">Middle name</label>
        <input type="text" class="form-control" id="mn12">
        <span class="help-block">Middle name is required.</span>
      </div>
      <div class="form-group">
        <label class="control-label required" for="ln12">Last name</label>
        <input type="text" class="form-control" id="ln12" value="Smith">
      </div>
      <div class="form-group">
        <label class="control-label required" for="phone12">Telephone number</label>
        <input type="text" class="form-control" id="phone12">
      </div>
      <div class="form-group">
        <br>
        <h4>Address</h4>
      </div>
      <div class="form-group">
        <label class="control-label required" for="country12">Country</label>
        <select class="form-control" id="country12">
          <option value="Mr.">United States</option>
        </select>
      </div>
      <div class="form-group">
        <label class="control-label required" for="adline1">Address line 1</label>
        <input type="text" class="form-control" id="adline1">
      </div>
      <div class="form-group">
        <label class="control-label required" for="adline2">Address line 2</label>
        <input type="text" class="form-control" id="adline2">
      </div>
      <div class="form-group">
        <label class="control-label required" for="city12">City</label>
        <input type="text" class="form-control" id="city12">
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label required" for="state12">State</label>
            <input type="text" class="form-control" id="state12">
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label required" for="zipcode12">Zip code</label>
            <input type="text" class="form-control" id="zipcode12">
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-default">Cancel</button>
      <button type="submit" disabled class="btn btn-primary pull-right">Next</button>
    </form>
</div>
```

[/pattern]
