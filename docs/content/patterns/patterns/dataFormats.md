---
title: "Data formats"
preview: true
---

[pattern]
### Date and time
Formats:
- `time` 10:00 AM
- `short date` Jan 11
- `long date` Apr 23, 2010
- `short date, time` Feb 5, 8:00 AM
- `long date, time` Feb 8, 2014, 1:00 PM
- `day of week, time` Mon, 7:30 AM
- `day of week, short date, time` Mon, Mar 15, 3:25 PM

In some cases it may make sense to add a tooltip to a formatted date to reveal the whole date/time (e.g, when showing a `short date`, the tooltip can show `long date, time`).

<hr>

For dates/times associated with user generated data, use the `smart format`:
<table class="table table-borderless" style="max-width: 600px;">
    <colgroup>
        <col style="width: 60%">
        <col style="width: 40%;">
    </colgroup>
    <tbody>
        <tr>
            <td>If the date is in the past or future on the current day, format as <code>time</code> only</td>
            <td>10:00 AM</td>
        </tr>
        <tr>
            <td>If the date is in the past or future within the current calendar year, format as <code>short date</code></td>
            <td>Jan 11</td>
        </tr>
        <tr>
            <td>If the date is in the past or future outside the current calendar year, format as <code>long date</code></td>
            <td>Apr 23, 2010</td>
        </tr>
    </tbody>
</table>
<hr>
<table class="table table-borderless" style="max-width: 600px">
    <colgroup>
        <col style="width: 60%">
        <col style="width: 40%;">
    </colgroup>
    <tbody>
        <tr>
            <td>For reminders or appointments, show both time and date</td>
            <td>Jun 8, 8:00 AM <br>Today, 8:00 AM</td>
        </tr>
        <tr>
            <td>Separate ranges with an en-dash without a space</td>
            <td>Jun 15–Jun 16 <br> Dec 20, 2014–Jan 2, 2015</td>
        </tr>
        <tr>
            <td>If a time range shares a common AM/PM, append only on the end of the range</td>
            <td>10:00–11:00 AM <br>10:00 AM–12:30 PM</td>
        </tr>
    </tbody>
</table>

[/pattern]
