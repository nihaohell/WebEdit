/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function(){CKEDITOR.plugins.add("csdnvote",{lang:"zh,zh-cn",icons:"csdnvote",iconfolder:"images/",icontype:".svg",iconoffset:"center",iconbgsize:"16px",hidpi:!1,init:function(a){a.addCommand("csdnvote",{modes:{wysiwyg:!CKEDITOR.env.iOS,source:!CKEDITOR.env.iOS},readOnly:1,editorFocus:!1,exec:function(){console.log("csdnvote",a);a.config.csdnvote&&a.config.csdnvote.execShowAppend(a)},canUndo:!1});var b=a.lang.csdnvote;a.ui.addButton&&a.ui.addButton("CsdnVote",{label:b.title,command:"csdnvote",toolbar:"tools,10"})}})})();