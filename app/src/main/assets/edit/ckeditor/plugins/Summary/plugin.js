CKEDITOR.plugins.add("Summary",{lang:"en,zh-cn",icons:"Summary",icontype:".svg",iconoffset:"center",iconbgsize:"16px",hidpi:!1,init:function(a){a.addCommand("Summary",new CKEDITOR.dialogCommand("SummaryDialog"));a.ui.addButton("Summary",{label:"摘要",icons:"Summary",command:"Summary",toolbar:"insert,30"});CKEDITOR.dialog.add("SummaryDialog",this.path+"dialogs/summary.js")}});