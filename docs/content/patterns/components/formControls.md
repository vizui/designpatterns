---
title: "Form controls"
---


[pattern]
### Text box

#### Purpose
Users need to be able to input free form text into a field.

#### Description
Text boxes allow the user to input free form text into a field. A text box only allows for a single line of input. 

#### Basic functionality
Text boxes allow for single line input.

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

Text areas allow for multi-line input.

[preview]
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="ta12" class="col-sm-3 control-label">Normal</label>
                <div class="col-sm-9">
                    <textarea class="form-control" id="ta12" cols="30" rows="2"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="ta13" class="col-sm-3 control-label">Disabled</label>
                <div class="col-sm-9">
                    <textarea class="form-control" id="ta12" cols="30" rows="2" disabled></textarea>
                </div>
            </div>
        </form>
    </div>
</div>
[/preview]

```html
<textarea class="form-control" id="ta12" cols="30" rows="2" disabled></textarea>
```

[/pattern]

[pattern]
### Radio buttons

#### Purpose
Users must choose between two or more mutually exclusive options.

#### Description
Radio buttons come in a group of two or more mutually exclusive options. Users can select only one option.

#### Basic functionality
A radio button has two states, checked and unchecked. Radio buttons are always in a group of two or more. When a radio button is checked, the previously selected radio button is unchecked. There can only be one radio button checked at any given time. Radio button labels should use sentence casing.

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
A set of Checkboxes are used when a user is able to select none, one, or multiple options. A single checkbox is used when a user is able to select or not select an option.

#### Basic functionality
- When clicked, a checkbox's state toggles between unchecked and checked.
- Checkboxes can have an indeterminate state that is set based on external interactions (e.g., indicating that some but not all items in a collection are selected).
- Checkbox labels should use sentence casing.
- The selected state of a checkbox should ideally indicate a positive action, and may require the rephrasing of the label. E.g. a label `Send me weekly reminders`, vs. `Do not send me weekly reminders`

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
A select, sometimes referred to as a combo box, provides functionality for choosing an option from a set. It is similar to dropdown button but facilitates item selection, filtering, and reflects the currently selected value. 

#### Basic functionality
When clicked, the user is shown all available options and can make a selection. When a selection is made, the dropdown closes and the select control updates to reflect the current selection. If there are 5 or more options, the list should allow for filtering via a text field.

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
<span class="text-muted">Example uses HTML5 input range/slider for demo purposes (IE10+).</span>
[preview]
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="se15" class="col-sm-3 control-label">Normal</label>
                <div class="col-sm-9">
                    <input class="form-control" type="range">
                </div>
            </div>
            <div class="form-group">
                <label for="se16" class="col-sm-3 control-label">Disabled</label>
                <div class="col-sm-9">
                    <input class="form-control" type="range" disabled>
                </div>
            </div>
        </form>
    </div>
</div>
[/preview]

```html

```

[/pattern]

