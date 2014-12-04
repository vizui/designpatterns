---
title: "Tables"
---

[pattern]
<h3>Tables</h3>
#### Purpose
Users need to see structured data in a manner that makes the data readable, scannable, and comparable.

#### Description
Tables provide customizable views of tabular data with features including sorting and managing columns. Tables are useful when a collection of data requires vertical alignment through columns for quick scanning and discovery of information, as well as for data that with many attributes that requires sorting, grouping, and a user customizable display.

#### Basic functionality
Tables list a collection of items in rows that have similar attributes, usually with headers to label each attribute. 

The following functionality can be provided by tables:
- Sorting by columns
- Resizing columns
- Showing and hiding columns
- Reordering columns
- Row selection
- Performing actions on row
- Grouping by attributes
- Expanding rows

A table's complexity and needs can vary greatly. This pattern provides many different features a table _may_ have. Features can be mixed and matched based on your needs. Don't include features unless they're actually needed.

[/pattern]

[pattern]
### Styles

#### Standard
A standard table has subtle row borders.
[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table">
        <thead>
            <tr>
                <th>Project name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Invoice</td>
                <td><span >Add invoice confirmation</span></td>
                <td><span >$4,500</span></td>
            </tr>
            <tr>
                <td>Templates</td>
                <td><span >Refactor templates to use the new templating library</span></td>
                <td><span >$9,000</span></td>
            </tr>
            <tr>
                <td>Payments</td>
                <td><span >Process payments using third party api</span></td>
                <td><span >$5,400</span></td>
            </tr>
            <tr>
                <td>Account Management</td>
                <td><span >Improve account management workflow</span></td>
                <td><span >$6,000</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]

#### Striped
A striped table adds an alternating row background color, increasing usability for wider tables.
[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Project name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Invoice</td>
                <td><span >Add invoice confirmation</span></td>
                <td><span >$4,500</span></td>
            </tr>
            <tr>
                <td>Templates</td>
                <td><span >Refactor templates to use the new templating library</span></td>
                <td><span >$9,000</span></td>
            </tr>
            <tr>
                <td>Payments</td>
                <td><span >Process payments using third party api</span></td>
                <td><span >$5,400</span></td>
            </tr>
            <tr>
                <td>Account Management</td>
                <td><span >Improve account management workflow</span></td>
                <td><span >$6,000</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]

#### Bordered
A bordered table adds column and row borders, increasing usability for content-dense tables.
[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Project name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Invoice</td>
                <td><span >Add invoice confirmation</span></td>
                <td><span >$4,500</span></td>
            </tr>
            <tr>
                <td>Templates</td>
                <td><span >Refactor templates to use the new templating library</span></td>
                <td><span >$9,000</span></td>
            </tr>
            <tr>
                <td>Payments</td>
                <td><span >Process payments using third party api</span></td>
                <td><span >$5,400</span></td>
            </tr>
            <tr>
                <td>Account Management</td>
                <td><span >Improve account management workflow</span></td>
                <td><span >$6,000</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]

#### Borderless
A borderless table removes all borders, decreasing clutter for simple tables.
[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table table-borderless">
        <thead>
            <tr>
                <th>Project name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Invoice</td>
                <td><span >Add invoice confirmation</span></td>
                <td><span >$4,500</span></td>
            </tr>
            <tr>
                <td>Templates</td>
                <td><span >Refactor templates to use the new templating library</span></td>
                <td><span >$9,000</span></td>
            </tr>
            <tr>
                <td>Payments</td>
                <td><span >Process payments using third party api</span></td>
                <td><span >$5,400</span></td>
            </tr>
            <tr>
                <td>Account Management</td>
                <td><span >Improve account management workflow</span></td>
                <td><span >$6,000</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]

#### Condensed
Use the condensed style, which reduces cell padding, for very large amounts of data.
[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table table-bordered table-condensed">
        <thead>
            <tr>
                <th>Project name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Invoice</td>
                <td><span >Add invoice confirmation</span></td>
                <td><span >$4,500</span></td>
            </tr>
            <tr>
                <td>Templates</td>
                <td><span >Refactor templates to use the new templating library</span></td>
                <td><span >$9,000</span></td>
            </tr>
            <tr>
                <td>Payments</td>
                <td><span >Process payments using third party api</span></td>
                <td><span >$5,400</span></td>
            </tr>
            <tr>
                <td>Account Management</td>
                <td><span >Improve account management workflow</span></td>
                <td><span >$6,000</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]

#### Colored
For text heavy pages (e.g., FAQ, APIs, Documentation, Pricing), or pages where there is one primary grid, a colored header may be appropriate.

Similar to other components, the available styles are `.table-{primary, success, info, warning, danger, inverse}`.
[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table table-striped table-info">
        <thead>
            <tr>
                <th>Project name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Invoice</td>
                <td><span >Add invoice confirmation</span></td>
                <td><span >$4,500</span></td>
            </tr>
            <tr>
                <td>Templates</td>
                <td><span >Refactor templates to use the new templating library</span></td>
                <td><span >$9,000</span></td>
            </tr>
            <tr>
                <td>Payments</td>
                <td><span >Process payments using third party api</span></td>
                <td><span >$5,400</span></td>
            </tr>
            <tr>
                <td>Account Management</td>
                <td><span >Improve account management workflow</span></td>
                <td><span >$6,000</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]

[/pattern]

[pattern]
### Headers

#### Normal
A normal header scrolls with the data.

[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table">
        <thead>
            <tr>
                <th>Project name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Invoice</td>
                <td><span >Add invoice confirmation</span></td>
                <td><span >$4,500</span></td>
            </tr>
            <tr>
                <td>Templates</td>
                <td><span >Refactor templates to use the new templating library</span></td>
                <td><span >$9,000</span></td>
            </tr>
            <tr>
                <td>Payments</td>
                <td><span >Process payments using third party api</span></td>
                <td><span >$5,400</span></td>
            </tr>
            <tr>
                <td>Account Management</td>
                <td><span >Improve account management workflow</span></td>
                <td><span >$6,000</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]

#### Fixed

A fixed header remains visible as the table body is scrolled. This is useful for larger amounts of data.

[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table" style="margin: 0;">
        <thead>
            <tr>
                <th style="width: 25%">Project name</th>
                <th style="width: 50%">Description</th>
                <th style="width: 25%">Price</th>
            </tr>
        </thead>
    </table>
    <div style="overflow: auto; max-height: 200px; border-top: none;">
        <table class="table table-striped " style="border: none; margin-bottom: 0; border-top: none;">
            <thead style="visibility: hidden; border: none;height: 0; overflow: hidden;">
                <tr>
                    <th style="width: 25%; height: 0; line-height: 0; font-size: 0; padding: 0; border: 0;">Project name</th>
                    <th style="width: 50%; height: 0; line-height: 0; font-size: 0; padding: 0; border: 0;">Description</th>
                    <th style="width: 25%; height: 0; line-height: 0; font-size: 0; padding: 0; border: 0;">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border-top: none;">Invoice</td>
                    <td style="border-top: none;"><span >Add invoice confirmation</span></td>
                    <td style="border-top: none;"><span >$4,500</span></td>
                </tr>
                <tr>
                    <td>Templates</td>
                    <td><span >Refactor templates to use the new templating library</span></td>
                    <td><span >$9,000</span></td>
                </tr>
                <tr>
                    <td>Payments</td>
                    <td><span >Process payments using third party api</span></td>
                    <td><span >$5,400</span></td>
                </tr>
                <tr>
                    <td>Account Management</td>
                    <td><span >Improve account management workflow</span></td>
                    <td><span >$6,000</span></td>
                </tr>
                <tr>
                    <td>Invoice</td>
                    <td><span >Add invoice confirmation</span></td>
                    <td><span >$4,500</span></td>
                </tr>
                <tr>
                    <td>Templates</td>
                    <td><span >Refactor templates to use the new templating library</span></td>
                    <td><span >$9,000</span></td>
                </tr>
                <tr>
                    <td>Payments</td>
                    <td><span >Process payments using third party api</span></td>
                    <td><span >$5,400</span></td>
                </tr>
                <tr>
                    <td>Account Management</td>
                    <td><span >Improve account management workflow</span></td>
                    <td><span >$6,000</span></td>
                </tr>
                <tr>
                    <td>Invoice</td>
                    <td><span >Add invoice confirmation</span></td>
                    <td><span >$4,500</span></td>
                </tr>
                <tr>
                    <td>Templates</td>
                    <td><span >Refactor templates to use the new templating library</span></td>
                    <td><span >$9,000</span></td>
                </tr>
                <tr>
                    <td>Payments</td>
                    <td><span >Process payments using third party api</span></td>
                    <td><span >$5,400</span></td>
                </tr>
                <tr>
                    <td>Account Management</td>
                    <td><span >Improve account management workflow</span></td>
                    <td><span >$6,000</span></td>
                </tr>
                <tr>
                    <td>Invoice</td>
                    <td><span >Add invoice confirmation</span></td>
                    <td><span >$4,500</span></td>
                </tr>
                <tr>
                    <td>Templates</td>
                    <td><span >Refactor templates to use the new templating library</span></td>
                    <td><span >$9,000</span></td>
                </tr>
                <tr>
                    <td>Payments</td>
                    <td><span >Process payments using third party api</span></td>
                    <td><span >$5,400</span></td>
                </tr>
                <tr>
                    <td>Account Management</td>
                    <td><span >Improve account management workflow</span></td>
                    <td><span >$6,000</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
[/preview]

#### Headerless
If the content of the table is self-explanatory for your users, it may not need a header. Provide an alternative for sorting, if necessary (e.g., a toolbar with a dropdown). 

[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table table-valign table-bordered table-striped">
        <tbody>
            <tr>
                <td class="vert-align"><strong>CSS is 20 years old today!</strong><br><span >13 points and 4 comments - 2 days ago</span></td>
                <td class="vert-align text-center" style="width: 63px;"><span class="text-success semi-bold"><i class="fa fa-1x fa-angle-up"></i> 3.4%</span></td>
            </tr>
            <tr>
                <td class="vert-align"><strong>Motion Experiments</strong><br><span >31 points and 7 comments - 11 hours ago</span></td>
                <td class="vert-align text-center" style="width: 63px;"><span class="text-success semi-bold"><i class="fa fa-1x fa-angle-up"></i> 2.5%</span></td>
            </tr>
            <tr>
                <td class="vert-align"><strong>Is everyone a designer? </strong><br><span >15 points and 3 comments - 3 days ago</span></td>
                <td class="vert-align text-center" style="width: 63px;"><span class="text-primary semi-bold"><i class="fa fa-1x fa-angle-right"></i> 0.0%</span></td>
            </tr>
            <tr>
                <td class="vert-align"><strong>Introducing GIFV</strong><br><span >24 points and 9 comments - 5 days ago</span></td>
                <td class="vert-align text-center" style="width: 63px;"><span class="text-danger semi-bold"><i class="fa fa-1x fa-angle-down"></i> 0.1%</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]
[/pattern]

[pattern]
### Sorting

#### Single sorting
Clicking a header cell sets that column as the currently sorted column. The first click should sort `descending`, the second click should sort `ascending`. 

[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table table-sortable table-bordered table-striped">
        <thead>
            <tr>
                <th class="sortable active">Project name <i class="fa fa-caret-down fa-1x text-muted"></i></th>
                <th class="sortable">Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Invoice</td>
                <td><span >Add invoice confirmation</span></td>
                <td><span >$4,500</span></td>
            </tr>
            <tr>
                <td>Templates</td>
                <td><span >Refactor templates to use the new templating library</span></td>
                <td><span >$9,000</span></td>
            </tr>
            <tr>
                <td>Payments</td>
                <td><span >Process payments using third party api</span></td>
                <td><span >$5,400</span></td>
            </tr>
            <tr>
                <td>Account Management</td>
                <td><span >Improve account management workflow</span></td>
                <td><span >$6,000</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]

#### Multi sorting
When a table is sorted by multiple columns, the sort order is indicated by the superscript numbers.

Performing a `shift+click` on a header cell should add that column to the sorted list. A second `shift+click` on the same header cell should toggle the sort direction. A third `shift+click` on the same header cell should remove that column from the sort list. A left click should clear the sort list and then behave as a single sort.
[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table table-sortable table-bordered table-striped">
        <thead>
            <tr>
                <th class="sortable active">Event <i class="fa fa-caret-down fa-1x text-muted"></i> <sup >1</sup></th>
                <th class="sortable active">Date <i class="fa fa-caret-up fa-1x text-muted"></i> <sup >2</sup></th>
                <th>Module</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>user.create</td>
                <td><span >10/21/14</span></td>
                <td><span >Users</span></td>
            </tr>
            <tr>
                <td>user.create</td>
                <td><span >10/19/14</span></td>
                <td><span >Users</span></td>
            </tr>
            <tr>
                <td>user.register</td>
                <td><span >10/21/14</span></td>
                <td><span >Users</span></td>
            </tr>
            <tr>
                <td>user.register</td>
                <td><span >10/18/14</span></td>
                <td><span >Users</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]

[/pattern]

[pattern]
### Selection

Checkboxes are generally the best way to facilitate multi-row selection, especially if clicking a row already has a different action (e.g., opening an email).

- Checking a checkbox should highlight the corresponding row.
- If there's a control for selecting all/none, it should represent the current state of the row selection, including an indeterminate state.
- `shift+click` should select all items between the previoulsy clicked checkbox and the currently clicked checkbox.

[preview]
<div style="padding: 40px; background: #fff;">
    <span class="help-block" style="color: #ccc;">Note: checkboxes are disabled for demo purposes.</span>
    <table class="table">
        <thead>
            <tr>
                <th style="width: 28px;"><input indeterminate type="checkbox" disabled></th>
                <th>Project name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type="checkbox" disabled></td>
                <td>Payments</td>
                <td><span >Process payments using third party api</span></td>
                <td><span >$5,400</span></td>
            </tr>
            <tr class="info">
                <td><input type="checkbox" disabled checked></td>
                <td>Invoice</td>
                <td><span >Add invoice confirmation</span></td>
                <td><span >$4,500</span></td>
            </tr>
            <tr class="info">
                <td><input type="checkbox" disabled checked></td>
                <td>Templates</td>
                <td><span >Refactor templates to use the new templating library</span></td>
                <td><span >$9,000</span></td>
            </tr>
            <tr>
                <td><input type="checkbox" disabled></td>
                <td>Account Management</td>
                <td><span >Improve account management workflow</span></td>
                <td><span >$6,000</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]
[/pattern]

[pattern]
### Row action buttons
Buttons with the `btn-hover` and `btn-icon-only` classes.
[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table table-outline table-valign table-striped">
        <tbody>
            <tr>
                <td class="vert-align">
                    <strong>IMG_234.jpg</strong><br><span >2 days ago</span>
                </td>
                <td class="vert-align">
                    <div class="pull-right">
                        <button class="btn btn-hover btn-icon-only" title="Delete">
                            <i class="fa fa-1x text-muted fa-times"></i>
                        </button>
                        <button class="btn btn-hover btn-icon-only" title="More options">
                            <i class="fa fa-1x text-muted fa-ellipsis-v"></i>
                        </button>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="vert-align">
                    <strong>IMG_235.jpg</strong><br><span >2 days ago</span>
                </td>
                <td class="vert-align">
                    <div class="pull-right">
                        <button class="btn btn-hover btn-icon-only" title="Delete">
                            <i class="fa fa-1x text-muted fa-times"></i>
                        </button>
                        <button class="btn btn-hover btn-icon-only" title="More options">
                            <i class="fa fa-1x text-muted fa-ellipsis-v"></i>
                        </button>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="vert-align">
                    <strong>IMG_236.jpg</strong><br><span >2 days ago</span>
                </td>
                <td class="vert-align">
                    <div class="pull-right">
                        <button class="btn btn-hover btn-icon-only" title="Delete">
                            <i class="fa fa-1x text-muted fa-times"></i>
                        </button>
                        <button class="btn btn-hover btn-icon-only" title="More options">
                            <i class="fa fa-1x text-muted fa-ellipsis-v"></i>
                        </button>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="vert-align">
                    <strong>IMG_237.jpg</strong><br><span >2 days ago</span>
                </td>
                <td class="vert-align">
                    <div class="pull-right">
                        <button class="btn btn-hover btn-icon-only" title="Delete">
                            <i class="fa fa-1x text-muted fa-times"></i>
                        </button>
                        <button class="btn btn-hover btn-icon-only" title="More options">
                            <i class="fa fa-1x text-muted fa-ellipsis-v"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]
[/pattern]

[pattern]
### Column customization
To provide column customization, add an icon to the top right corner of the table. Clicking on the icon will show the `Show and hide columns` dialog.
[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Project name</th>
                <th>Description</th>
                <th>Price</th>
                <th class="table-config-column"><button type="button"><i class="fa fa-ellipsis-h fa-1x"></i></button></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Invoice</td>
                <td><span >Add invoice confirmation</span></td>
                <td colspan="2"><span >$4,500</span></td>
            </tr>
            <tr>
                <td>Templates</td>
                <td><span >Refactor templates to use the new templating library</span></td>
                <td colspan="2"><span >$9,000</span></td>
            </tr>
            <tr>
                <td>Payments</td>
                <td><span >Process payments using third party api</span></td>
                <td colspan="2"><span >$5,400</span></td>
            </tr>
            <tr>
                <td>Account Management</td>
                <td><span >Improve account management workflow</span></td>
                <td colspan="2"><span >$6,000</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]

#### Show and hide columns dialog
This dialog provides the ability to show/hide columns as desired.

[preview]
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 300px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Show and hide columns</h4>
      </div>
      <div class="modal-body">
          <form role="form">
            <div class="form-group">
                <div class="checkbox">
                  <label><input type="checkbox" disabled indeterminate name="optionsCheckboxes" id="optionsCheckboxes0" value="option0" checked>Select all</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" disabled name="optionsCheckboxes" id="optionsCheckboxes1" value="option1">Thumbnail</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" disabled name="optionsCheckboxes" id="optionsCheckboxes2" value="option2">Word mark</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" disabled name="optionsCheckboxes" id="optionsCheckboxes3" value="option3" checked>Review source</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" disabled name="optionsCheckboxes" id="optionsCheckboxes4" value="option4">Review type</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" disabled name="optionsCheckboxes" id="optionsCheckboxes5" value="option5" checked>Review revision</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" disabled name="optionsCheckboxes" id="optionsCheckboxes6" value="option6">Mentor</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" disabled name="optionsCheckboxes" id="optionsCheckboxes7" value="option7" checked>Class</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" disabled name="optionsCheckboxes" id="optionsCheckboxes8" value="option8" checked>Owner</label>
                </div>
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Done</button>
      </div>
    </div>
  </div>
</div>
[/preview]
[/pattern]


[pattern]
### Grouping
[preview]
<div style="padding: 40px; background: #fff;">
    <table class="table table-sortable table-bordered">
        <thead>
            <tr>
                <th style="width: 200px;" class="sortable active">Module <i class="fa fa-caret-down fa-1x text-muted"></i> <sup >1</sup></th>
                <th class="sortable active">Event <i class="fa fa-caret-down fa-1x text-muted"></i> <sup >2</sup></th>
                <th class="sortable active">Date <i class="fa fa-caret-up fa-1x text-muted"></i> <sup >3</sup></th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td class="" style="background: #fff;" colspan="3"><i class="fa fa-1x text-muted fa-angle-down" style="margin-right: 6px;"></i><strong>Module:</strong> User <span style="color: #aaa;">(2)</span></td>
            </tr>
            <tr>
                <td class="" style="background: #fff; padding-left: 20px;" colspan="3"><i class="fa fa-1x text-muted fa-angle-down" style="margin-right: 6px;"></i><strong>Event:</strong> Create <span style="color: #aaa;">(2)</span></td>
            </tr>
            <tr>
                <td><span >Users</span></td>
                <td>Create</td>
                <td><span >10/21/14</span></td>
            </tr>
            <tr>
                <td><span >Users</span></td>
                <td>Create</td>
                <td><span >10/19/14</span></td>
            </tr>
            <tr>
                <td class="" style="background: #fff; padding-left: 20px;" colspan="4"><i class="fa fa-1x text-muted fa-angle-right" style="margin-right: 6px;"></i><strong>Event:</strong> Register <span style="color: #aaa;">(2)</span></td>
            </tr>
        </tbody>
    </table>
</div>
[/preview]
[/pattern]


[pattern]
### Expandable rows
[preview]
[/preview]
[/pattern]

