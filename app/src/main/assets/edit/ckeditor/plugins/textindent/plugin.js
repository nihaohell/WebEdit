CKEDITOR.plugins.add("textindent",{icons:"textindent",lang:["pt-br","en","zh-cn"],icontype:".svg",iconoffset:"center",iconbgsize:"16px",hidpi:!1,init:function(a){var b=a.config.indentation;"undefined"==typeof b&&(b="50");a.ui.addButton&&a.ui.addButton("textindent",{label:a.lang.textindent.labelName,command:"insert",toolbar:"insert, 33"});a.on("selectionChange",function(){(new CKEDITOR.style({element:"p",styles:{"text-indent":b+"px"},overrides:[{element:"text-indent",attributes:{size:b+"0"}}]})).checkActive(a.elementPath(),
a)?a.getCommand("insert").setState(CKEDITOR.TRISTATE_ON):a.getCommand("insert").setState(CKEDITOR.TRISTATE_OFF)});a.addCommand("insert",{allowedContent:"p{text-indent}",requiredContent:"p",exec:function(){var c=new CKEDITOR.style({element:"p",styles:{"text-indent":b+"px"},overrides:[{element:"text-indent",attributes:{size:"0"}}]}),d=new CKEDITOR.style({element:"p",styles:{"text-indent":"0"},overrides:[{element:"text-indent",attributes:{size:b+"px"}}]});c.checkActive(a.elementPath(),a)?(a.fire("saveSnapshot"),
a.applyStyle(d)):(a.fire("saveSnapshot"),a.applyStyle(c))}})}});