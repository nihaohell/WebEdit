/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.editorConfig=function(a){a.toolbarGroups=[{name:"insert",groups:["insert"]},{name:"colors",groups:["colors"]},{name:"links",groups:["links"]},{name:"undo",groups:["undo"]},{name:"pbckcode"}];a.removeButtons="DocProps,Cut,Copy,Paste,PasteText,PasteFromWord,Find,Replace,Subscript,Superscript,Outdent,Indent,SpecialChar,Styles,Csdnvideo,RemoveFormat,Source,Font,FontSize,ImageOutside";a.plugins="basicstyles,blockquote,dialogui,dialog,notification,button,toolbar,clipboard,panel,floatpanel,menu,contextmenu,enterkey,entities,popup,filetools,filebrowser,floatingspace,listblock,richcombo,horizontalrule,htmlwriter,wysiwygarea,image,indent,indentlist,fakeobjects,list,magicline,maximize,pastetext,pastefromword,removeformat,showborders,sourcearea,specialchar,menubutton,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,notificationaggregator,uploadwidget,uploadimage,codesnippet,autolink,balloonpanel,chart,colordialog,docprops,imagebase,xml,ajax,image2,font,csdnvideo,"+
(!0===window.template_switch?"addtpl,":"")+"indentblock,toc,SimpleLink,textindent,tableresize,Summary,colorbutton,textselection";a.toolbarLocation="top";a.height=700;a.extraPlugins="uploadimage";a.imageUploadUrl="/UploadImage?shuiyin\x3d2";a.imageUploadResponse="content";a.filebrowserImageUploadUrl="/UploadImage?shuiyin\x3d2";a.language="zh-cn";a.extraAllowedContent="img[class](*);pre[class](*);a[href](*)";a.bodyClass="htmledit_views";a.pasteFilter="semantic-content";a.magicline_everywhere=1;a.magicline_color=
"#ca0c16";a.saveClass={BODY:["ed_fullscreen"],MAIN:["container"]};a.colorButton_enableMore=!1;try{a.csdn_stlye_url=context_style_url,a.codeSnippet_theme=codeStyle}catch(b){a.csdn_stlye_url=null,a.codeSnippet_theme="atom-one-dark",a.sammary=""}};