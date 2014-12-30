---
title: "File upload"
preview: true
---

[pattern]
<h3>File upload</h3>

__Components__
- 'Select file(s)...' button
  - Opens the operating system file upload dialog
- File list
  - Lists files that are uploading, uploaded, or failed to upload. 
  - Uploads can be canceled/removed by pressing the X
[preview]
<form action="" class="form-horizontal">
    <div class="form-group">
        <label class="col-sm-3 control-label">Attachments</label>
        <div class="col-sm-9">
            <div style="max-width: 300px;">
            </div> 
            <button class="btn btn-default">Select files...</button>
        </div>
    </div>
</form>
[/preview]
[preview]
<form action="" class="form-horizontal">
    <div class="form-group">
        <label class="col-sm-3 control-label">Attachments</label>
        <div class="col-sm-9">
            <div style="max-width: 300px;">
                <ul class="list-group" style="margin-bottom: 9px;">
                    <li class="list-group-item">
                        <a href=""><i style="position: relative; top: 2px;" class="pull-right fa text-muted fa-times fa-1x fa-fw"></i></a>
                        IMG_209.jpg  <span class="text-muted">(322 KB)</span>
                    </li>
                    <li class="list-group-item">
                        <a href=""><i style="position: relative; top: 2px;" class="pull-right fa text-muted fa-times fa-1x fa-fw"></i></a>
                        IMG_210.jpg  <span class="text-muted">(1.1 MB)</span>
                    </li>
                    <li class="list-group-item">
                        <a href=""><i style="position: relative; top: 2px;" class="pull-right fa text-muted fa-times fa-1x fa-fw"></i></a>
                        IMG_211.jpg  <span class="text-muted">(5 MB)</span>
                        <div class="text-danger" style="margin: 2px 0 0 0">
                            This file exceeds the 2 MB limit.
                        </div>
                    </li>
                    <li class="list-group-item">
                        <a href=""><i style="position: relative; top: 2px;" class="pull-right fa text-muted fa-times fa-1x fa-fw"></i></a>
                        IMG_212.jpg  <span class="text-muted">(312 KB)</span>
                        <div class="text-danger" style="margin: 2px 0 0 0">
                            Error uploading file.
                        </div>
                    </li>
                    <li class="list-group-item">
                        <a href=""><i style="position: relative; top: 2px;" class="pull-right fa text-muted fa-times fa-1x fa-fw"></i></a>
                        <span id="exampleProgressBarValue" class="pull-right text-muted">60%</span>
                        <div>IMG_213.jpg <span class="text-muted">(43 KB)</span></div>
                        <div class="progress" style="margin-bottom: 0; margin-top: 8px; clear: both;">
                          <div id="exampleProgressBar" class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                          </div>
                        </div>
                    </li>
                </ul>
            </div> 
            <button class="btn btn-default">Select files...</button>
        </div>
    </div>
</form>
[/preview]
[preview]
<form action="" class="form-horizontal">
    <div class="form-group">
        <label class="col-sm-3 control-label">Attachments</label>
        <div class="col-sm-9">
            <div style="max-width: 300px;">
                <ul class="list-group" style="margin-bottom: 9px;">
                    <li class="list-group-item">
                        <img style="margin-right: 8px;" src="http://placehold.it/50x50">
                        <a href=""><i style="position: relative; top: 2px;" class="pull-right fa text-muted fa-times fa-1x fa-fw"></i></a>
                        IMG_209.jpg  <span class="text-muted">(322 KB)</span>
                    </li>
                    <li class="list-group-item">
                        <img style="margin-right: 8px;" src="http://placehold.it/50x50">
                        <a href=""><i style="position: relative; top: 2px;" class="pull-right fa text-muted fa-times fa-1x fa-fw"></i></a>
                        IMG_210.jpg  <span class="text-muted">(1.1 MB)</span>
                    </li>
                    <li class="list-group-item">
                        <a href=""><i style="position: relative; top: 2px;" class="pull-right fa text-muted fa-times fa-1x fa-fw"></i></a>
                        IMG_212.jpg  <span class="text-muted">(312 KB)</span>
                        <div class="text-danger" style="margin: 2px 0 0 0">
                            Error uploading file.
                        </div>
                    </li>
                </ul>
            </div> 
            <button class="btn btn-default">Select files...</button>
        </div>
    </div>
</form>
[/preview]
[/pattern]
