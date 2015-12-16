---
title: "Form: Examples"
preview: true
---

<div class="pl-pattern">
<h3>Form: Examples</h3>

These examples show various form configurations.
<br><br>
</div>

<div class="pl-pattern">
### Create Account

{::nomarkdown}
<div class="pl-preview">

<div class="container" style="margin: 0">
  <div class="row">
    <form class="col-sm-6" role="form">      
      <div class="form-group">
        <span class="help-block text-right">* indicates required</span>
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
    </form>
  </div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<form role="form">
    <div class="form-group">
        <span class="help-block text-right">* indicates required</span>
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
</form>
{% endhighlight %}
</div>
