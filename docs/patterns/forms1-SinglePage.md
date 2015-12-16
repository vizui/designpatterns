---
title: "Form: Single page"
---

<div class="pl-pattern">   
<h3>Form: Single page</h3>

#### Purpose
Users need guidance filling out a form where all sections are positioned on a single page.

#### Description

<div class="row">

<div class="col-sm-6 col-md-3">
#### The good

* There's only one submit button to press
* A single URL gives access to all form fields
* It doesn't force a fixed order of completion
* You benefit from context of neighboring sections
* Progress is self-evident
</div>

<div class="col-sm-6 col-md-3">
#### The bad

* Long forms can be overwhelming and off-putting
* It's less well suited to branching or non-linear flow
* How do you save partial progress?
* Can be harder to track analytics like drop-off rates
</div> 

<div class="col-sm-6 col-md-5 col-lg-2">
<img src="../images/USPTO-EF-Single-Page.png" alt="Diagram showing all sections on a page">
</div>

</div>

<br><br>
</div>

<div class="pl-pattern">
### Example: Create account

{::nomarkdown}
<div class="pl-preview">

<div class="container" style="margin: 0">
  <div class="row">
    <form class="col-sm-6" role="form">
      <div class="form-group">
        <div class="alert alert-danger" role="alert">
          <i class="alert-icon alert-icon-danger"></i>Please fix the 3 errors.
        </div>
      </div>
      <div class="form-group">
        <span class="help-block text-right">* indicates required</span>
      </div>
      <div class="form-group">
        <div class="form-group-heading">
          <h4>Account ID</h4>
        </div>
      </div>
      
      <div class="form-group has-error">
        <label class="control-label required" for="em14">USPTO email address</label>
        <input type="email" class="form-control" id="em14" value="john.smith@gmail.com" required aria-required="true" aria-invalid="true">
        <span class="help-block">Email must end with uspto.gov.</span>
      </div>
      <div class="form-group has-error" >
        <label class="control-label required" for="eid12">Employee ID</label> <a href="#" class="pull-right">Find my Employee ID</a>
        <input type="text" class="form-control" id="eid12" value="238942a" required aria-required="true" aria-invalid="true">
        <span class="help-block">Employee ID must be numeric.</span>
      </div>
      <div class="form-group">
        <div class="form-group-heading">
          <h4>Name</h4>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label required" for="t12">Title</label>
        <div>
            <select class="select2 form-control-width-sm form-control" id="t12" required aria-required="true">
              <option value="" disabled selected hidden>Select</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss">Miss</option>
            </select>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label required" for="fn12">First name</label>
        <input type="text" class="form-control" id="fn12" value="John" required aria-required="true">
      </div>
      <div class="form-group has-error">
        <label class="control-label required" for="mn12">Middle name</label>
        <input type="text" class="form-control" id="mn12" required aria-required="true" aria-invalid="true">
        <span class="help-block">This field is required.</span>
      </div>
      <div class="form-group">
        <label class="control-label required" for="ln12">Last name</label>
        <input type="text" class="form-control" id="ln12" value="Smith" required aria-required="true">
      </div>
      <div class="form-group">
        <label class="control-label required" for="phone12">Telephone number</label>
        <input type="text" class="form-control" id="phone12" required aria-required="true">
      </div>
      <div class="form-group">
        <div class="form-group-heading">
          <h4>Address</h4>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label required" for="country12">Country</label>
        <select class="select2 form-control" id="country12" required aria-required="true">
          <option value="" disabled selected hidden>Select</option>
          <option value="Mr.">United States</option>
        </select>
      </div>
      <div class="form-group">
        <label class="control-label required" for="adline1">Address line 1</label>
        <input type="text" class="form-control" id="adline1" required aria-required="true">
      </div>
      <div class="form-group">
        <label class="control-label required" for="adline2">Address line 2</label>
        <input type="text" class="form-control" id="adline2" required aria-required="true">
      </div>
      <div class="form-group">
        <label class="control-label required" for="city12">City</label>
        <input type="text" class="form-control" id="city12" required aria-required="true">
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label required" for="state12">State</label>
            <input type="text" class="form-control" id="state12" required aria-required="true">
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label required" for="zipcode12">Zip code</label>
            <input type="text" class="form-control" id="zipcode12" required aria-required="true">
          </div>
        </div>
      </div>
      <br>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default">Cancel</button>
    </form>
  </div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<form role="form">
  <div class="form-group">
    <div class="alert alert-danger">
      <i class="alert-icon alert-icon-danger"></i>Please fix the 3 errors below.
    </div>
  </div>
  <div class="form-group has-error">
    <label class="control-label required" for="em15">USPTO email address</label>
    <input type="email" class="form-control" id="em15" value="john.smith@gmail.com" required aria-required="true">
    <span class="help-block">Email must end with uspto.gov.</span>
  </div>
  <div class="form-group has-error" >
    <label class="control-label required" for="eid12">Employee ID</label> <a href="#" class="pull-right">Find my Employee ID</a>
    <input type="text" class="form-control" id="eid12" value="238942a" required aria-required="true">
    <span class="help-block">Employee ID must be numeric.</span>
  </div>
  <div class="form-group">
    <label class="control-label required" for="t12">Title</label>
    <select class="form-control" id="t12" required aria-required="true">
      <option value="" disabled selected hidden>Select</option>
      <option value="Mr.">Mr.</option>
      <option value="Mrs.">Mrs.</option>
      <option value="Miss">Miss</option>
    </select>
  </div>
  <div class="form-group">
    <label class="control-label required" for="fn12">First name</label>
    <input type="text" class="form-control" id="fn12" value="John" required aria-required="true">
  </div>
  <div class="form-group has-error">
    <label class="control-label required" for="mn12">Middle name</label>
    <input type="text" class="form-control" id="mn12" required aria-required="true">
    <span class="help-block">This field is required.</span>
  </div>
  <div class="form-group">
    <label class="control-label required" for="ln12">Last name</label>
    <input type="text" class="form-control" id="ln12" value="Smith" required aria-required="true">
  </div>
  <div class="form-group">
    <label class="control-label required" for="phone12">Telephone number</label>
    <input type="text" class="form-control" id="phone12" required aria-required="true">
  </div>
  <div class="form-group">
    <div class="form-group-heading">
        <h4>Address</h4>
    </div>
  </div>
  <div class="form-group">
    <label class="control-label required" for="country12">Country</label>
    <select class="form-control" id="country12" required aria-required="true">
      <option value="" disabled selected hidden>Select</option>
      <option value="Mr.">United States</option>
    </select>
  </div>
  <div class="form-group">
    <label class="control-label required" for="adline1">Address line 1</label>
    <input type="text" class="form-control" id="adline1" required aria-required="true">
  </div>
  <div class="form-group">
    <label class="control-label required" for="adline2">Address line 2</label>
    <input type="text" class="form-control" id="adline2" required aria-required="true">
  </div>
  <div class="form-group">
    <label class="control-label required" for="city12">City</label>
    <input type="text" class="form-control" id="city12" required aria-required="true">
  </div>
  <div class="row">
    <div class="col-sm-6">
      <div class="form-group">
        <label class="control-label required" for="state12">State</label>
        <input type="text" class="form-control" id="state12" required aria-required="true">
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label class="control-label required" for="zipcode12">Zip code</label>
        <input type="text" class="form-control" id="zipcode12" required aria-required="true">
      </div>
    </div>
  </div>
  <button type="button" class="btn btn-default">Cancel</button>
  <button type="submit" class="btn btn-primary pull-right">Save &amp; Continue</button>
</form>
{% endhighlight %}
	
</div>

<div class="pl-pattern">
<h3 style="font-size: 16px; margin-top: 0">Attribution</h3>

This guide has been adapted from [Effective forms](https://cfpb.github.io/design-manual/guides/effective-forms.html) in the [CFPB Design Manual](https://cfpb.github.io/design-manual/) which is itself adapted from the guide [Designing transactions](https://www.gov.uk/service-manual/user-centred-design/designing-transactions.html) in the [GOV.UK Government Service Design Manual](https://www.gov.uk/service-manual), which is licensed under the [Open Government License v2.0](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/).

&nbsp;
</div>

