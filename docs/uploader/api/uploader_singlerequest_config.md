---
sidebar_label: singleRequest
title: singleRequest
---          

@short: defines whether files are sent in one request
	
@default:false
@type: boolean
@example:
var vault = new dhx.Vault("vault_container", { 
    uploader:{
    	// obligatory, the path for upload
    	target:"/upload"
    	singleRequest:true
    }
});


@template:	api_config
@descr:


