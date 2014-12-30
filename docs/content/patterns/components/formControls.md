---
title: "Form controls"
---


[pattern]
### Text box

#### Purpose
Users need to input a simple text value.

#### Description
Text boxes allow the user to input a simple text value. A text box only allows for a single line of input. 

[preview]
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="tb12" class="col-sm-3 control-label">Normal</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="tb12">
                </div>
            </div>
            <div class="form-group">
                <label for="tb13" class="col-sm-3 control-label">Disabled</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="tb13" disabled>
                </div>
            </div>
        </form>
    </div>
</div>
[/preview]
```html
<input type="text" class="form-control">
<input type="text" class="form-control" disabled>
```

#### Input masks

Input masks ensure that the user understands the input format required, in addition to making input less error-prone by potentially restricting the number or types of characters that can be entered.

<span class="text-muted">Example uses https://github.com/RobinHerbots/jquery.inputmask for demo purposes.</span>
[preview]
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form class="form-horizontal col-sm-12" role="form">
          <div class="form-group">
              <label for="im1" class="col-sm-3 control-label">SSN</label>
              <div class="col-sm-9">
                  <input type="text" class="form-control" id="im1" data-inputmask="'mask': '999-99-9999', 'placeholder': 'ˍ'">
              </div>
          </div>
          <div class="form-group">
              <label for="im1" class="col-sm-3 control-label">Routing #</label>
              <div class="col-sm-9">
                  <input type="text" class="form-control" placeholder="PCT/" id="im1" data-inputmask="'mask': '\\PCT/99,999,999', 'placeholder': 'ˍ'">
              </div>
          </div>
          <div class="form-group">
              <label for="im1" class="col-sm-3 control-label">Start date</label>
              <div class="col-sm-9">
                  <input type="text" class="form-control" id="im1" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'">
              </div>
          </div>
        </form>
    </div>
</div>
[/preview]
```html
<input type="text" class="form-control" id="im1" data-inputmask="'mask': '999-99-9999'">
<input type="text" class="form-control" id="im1" data-inputmask="'mask': 'PCT/99,999,999'">
<input type="text" class="form-control" id="im1" data-inputmask="'alias': 'date'">
```


[/pattern]

[pattern]
### Text area
#### Purpose
Users need to input an extended, potentially multi-line text value.

#### Description
Text areas allow the user to input extended, multi-line text values. 

[preview]
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="ta12" class="col-sm-3 control-label">Normal</label>
                <div class="col-sm-9">
                    <textarea class="form-control" id="ta12" rows="2"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="ta13" class="col-sm-3 control-label">Disabled</label>
                <div class="col-sm-9">
                    <textarea class="form-control" id="ta13" rows="2" disabled></textarea>
                </div>
            </div>
        </form>
    </div>
</div>
[/preview]

```html
<textarea class="form-control" rows="2"></textarea>
```

[/pattern]

[pattern]
### Radio buttons

#### Purpose
Users must choose between two or more mutually exclusive options.

#### Description
- Radio buttons come in a group of two or more mutually exclusive options
- A radio button is either checked or unchecked
- There can only be one radio button checked in a group
- Radio button labels should use sentence casing
- Use concise labels
- Provide an initially checked option when the field is not required and/or there is a sane default
- Align vertically when possible
- Align in shorter columns if there are many options
- Ensure there is adequate spacing between adjacent fields and radio/checkbox groups

#### Vertical
[preview]
<div class="radio">
    <label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>Checked</label>
</div>
<div class="radio">
    <label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">Normal</label>
</div>
<div class="radio">
    <label><input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>Disabled</label>
</div>
[/preview]

#### Inline
[preview]
<label class="radio-inline">
  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked> Checked
</label>
<label class="radio-inline">
  <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> Normal
</label>
<label class="radio-inline">
  <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled> Disabled
</label>

[/preview]

```html

```

[/pattern]

[pattern]
### Checkboxes

#### Purpose
Users need to specify which option(s) from a set are applicable/valid/true based on a label. 

#### Description
- A set of checkboxes are used when a user is able to select none, one, or multiple options
- A single checkbox is used when a user is able to select or not select an option
- When clicked, a checkbox's state toggles between unchecked and checked
- Checkboxes can have an indeterminate state that is set based on external interactions (e.g., indicating that some but not all items in a collection are selected)
- Checkbox labels should use sentence casing
- Use concise labels
- Align vertically when possible
- Align in shorter columns if there are many options
- The selected state of a checkbox should ideally indicate something 'positive' and may require the rephrasing of the label (e.g., `Send me weekly reminders`, vs. `Do not send me weekly reminders`)
- Ensure there is adequate spacing between adjacent fields and radio/checkbox groups

#### Vertical
[preview]
<div class="checkbox">
  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked>Checked</label>
</div>
<div class="checkbox">
  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2">Normal</label>
</div>
<div class="checkbox">
  <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes3" value="option3" disabled>Disabled</label>
</div>
[/preview]

#### Inline
[preview]
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox1" value="option1" checked> Checked
</label> <label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox2" value="option2"> Normal
</label> <label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox3" value="option3" disabled> Disabled
</label>
[/preview]

```html

```

[/pattern]


[pattern]
### Select
#### Purpose
The user needs to choose an option from a predefined set.

#### Description
- A select, sometimes referred to as a combo box, provides functionality for choosing an option from a set
- It is similar to dropdown button but facilitates item selection, filtering, and reflects the currently selected value
- When clicked, the user is shown all available options and can make a selection
- When a selection is made, the dropdown closes and the select control updates to reflect the current selection
- If there are 5 or more options, the list should allow for filtering via a text field
- For empty selects, use a placeholder in the format of `Select a [type]...` or `Select...`

<span class="text-muted">Example uses https://github.com/ivaynberg/select2 for demo purposes.</span>
[preview]
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="se17" class="col-sm-3 control-label">Normal</label>
                <div class="col-sm-9">
                    <select id="se17" class="form-control select2">
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="se18" class="col-sm-3 control-label">Filterable</label>
                <div class="col-sm-9">
                    <select id="se18" class="form-control select2">
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AS">American Samoa</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FM">Federated States Of Micronesia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="GU">Guam</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PW">Palau</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VI">Virgin Islands</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="sel175"  class="col-sm-3 control-label">Placeholder</label>
                <div class="col-sm-9">
                    <select id="sel175" data-placeholder="Select a database..." class="form-control select2">
                        <option></option>
                        <option value="A">mongodb</option>
                        <option value="B">mysql</option>
                        <option value="C">leveldb</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="se19" class="col-sm-3 control-label">Disabled</label>
                <div class="col-sm-9">
                    <select id="se19" disabled class="form-control select2">
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
</div>
[/preview]

```html

```

[/pattern]

[pattern]
### Multi-select
This is the native browser multi-select. `Ctrl+click` (or `cmd+click`) toggles selection on an item. `shift+click` performs a range selection. A single `click` sets the selection to only that item.
[preview]
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="se15" class="col-sm-3 control-label">Normal</label>
                <div class="col-sm-9">
                    <select multiple id="se15" class="form-control">
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                        <option value="D">Option D</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="se16" class="col-sm-3 control-label">Disabled</label>
                <div class="col-sm-9">
                    <select multiple id="se16" disabled class="form-control">
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                        <option value="D">Option D</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
</div>
[/preview]

```html

```

[/pattern]
[pattern]
### Date picker
<span class="text-muted">Example uses jQuery UI for demo purposes.</span>
[preview]
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="dp1" class="col-sm-3 control-label">When</label>
                <div class="col-sm-9">
                    <span class="input-icon fa fa-calendar-o"></span>
                    <input id="dp1" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'" type="text" class="datepicker form-control" >
                </div>
            </div>
            <div class="form-group">
                <label for="dp2" class="col-sm-3 control-label">Range</label>
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-sm-6">
                            <span class="input-icon fa fa-calendar-o"></span>
                            <input id="dp2" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'" type="text" class="datepicker form-control" >
                        </div>
                        <div class="col-sm-6">
                            <span class="input-icon fa fa-calendar-o"></span>
                            <input id="dp3" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'" type="text" class="datepicker form-control" >
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

[/preview]

```html

```

[/pattern]


[pattern]
### Slider
<span class="text-muted">Example uses https://github.com/seiyria/bootstrap-slider for demo purposes.</span>
[preview]
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="se15" class="col-sm-3 control-label">Normal</label>
                <div class="col-sm-9">
                    <input class="slider">
                </div>
            </div>
            <div class="form-group">
                <label for="se16" class="col-sm-3 control-label">Disabled</label>
                <div class="col-sm-9">
                    <input class="slider" disabled data-slider-enabled="false">
                </div>
            </div>
        </form>
    </div>
</div>
[/preview]

```html

```

[/pattern]

[pattern]
### Rich text editor
Only use toolbar buttons relevant to the intended data.
[preview]
<div class="container-fluid" style="max-width: 450px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <div class="col-sm-12">
                    <div>
                        <div style="background: #f9f9f9; border: 1px solid #ccc; border-bottom:0;" class="btn-toolbar btn-toolbar-hover">
                            <div class="btn-group">
                                <button type="button" class="btn btn-default btn-hover dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    Arial <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu" role="menu">
                                    <li class="active"><a href="#">Arial</a></li>
                                    <li><a href="#">Georgia</a></li>
                                    <li><a href="#">Courier</a></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button data-toggle="tooltip" data-placement="top" title="Bold" class="btn btn-hover btn-icon-only"><i class="fa fa-bold"></i><span class="sr-only">Bold</span></button>
                                <button data-toggle="tooltip" data-placement="top" title="Italicize" class="btn btn-hover active btn-icon-only"><i class="fa fa-italic"></i><span class="sr-only">Italicize</span></button>
                                <button data-toggle="tooltip" data-placement="top" title="Underline" class="btn btn-hover btn-icon-only"><i class="fa fa-underline"></i><span class="sr-only">Underline</span></button>
                            </div>
                            <div class="btn-group">
                                <button data-toggle="tooltip" data-placement="top" title="Ordered list" class="btn btn-hover btn-icon-only"><i class="fa fa-list-ol"></i><span class="sr-only">Ordered list</span></button>
                                <button data-toggle="tooltip" data-placement="top" title="Unordered list" class="btn btn-hover btn-icon-only"><i class="fa fa-list-ul"></i><span class="sr-only">Unordered list</span></button>
                            </div>
                            <div class="btn-group">
                                <button data-toggle="tooltip" data-placement="top" title="Indent" class="btn btn-hover btn-icon-only"><i class="fa fa-indent"></i><span class="sr-only">Indent</span></button>
                                <button data-toggle="tooltip" data-placement="top" title="Outdent" class="btn btn-hover btn-icon-only"><i class="fa fa-outdent"></i><span class="sr-only">Outdent</span></button>
                            </div>
                            <div class="btn-group">
                                <button data-toggle="tooltip" data-placement="top" title="Insert link" class="btn btn-hover btn-icon-only"><i class="fa fa-chain"></i><span class="sr-only">Insert link</span></button>
                                <button data-toggle="tooltip" data-placement="top" title="Insert image" class="btn btn-hover btn-icon-only"><i class="fa fa-image"></i><span class="sr-only">Insert image</span></button>
                            </div>
                        </div>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" class="form-control" style="border-top-left-radius: 0; border-top-right-radius: 0;" placeholder="Enter note here..."></textarea>
                </div>
            </div>
        </form>
    </div>
</div>
[/preview]
[/pattern]

