Uploader Object API
==================

The API set for controlling the work of the Uploader object.

Methods
--------------

{{api
- uploader/api/abort.md - cancels upload of a file
- uploader/api/linkdroparea.md - links an extra area for dropping files for upload to Uploader
- uploader/api/unlinkdroparea.md - unlinks an extra drop area from Uploader
- uploader/api/selectfile.md - opens the dialog for selecting a new file (files) for adding to Uploader
- uploader/api/send.md - sets an URL to the server-side script that will process file upload
}}

Properties
----------------

{{api
- uploader/api/autosend_config.md - enables/disables automatic sending of an added file
- uploader/api/fieldname_config.md - sets the file field name in the form data that is sent to the server
- uploader/api/params_config.md - adds extra parameters for sending an XMLHttpRequest
- uploader/api/singlerequest_config.md - defines whether files are sent in one request
- uploader/api/target_config.md - the path for upload
- uploader/api/updatefromresponse.md - updates file attributes with data from server response 
}}

@index:

- uploader/api/refs/uploader_methods.md
- uploader/api/refs/uploader_properties.md

@todo:
update examples and descrs from vault to uploader 