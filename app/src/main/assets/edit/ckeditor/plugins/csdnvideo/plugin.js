CKEDITOR.plugins.add("csdnvideo",{requires:"widget,dialog",icons:"csdnvideo",icontype:".svg",iconoffset:"center",iconbgsize:"16px",hidpi:!1,onLoad:function(){CKEDITOR.dialog.add("csdnvideoDialog",this.path+"dialogs/csdnvideo.js")},init:function(b){b.addCommand("csdnvideo",new CKEDITOR.dialogCommand("csdnvideoDialog"));b.ui.addButton("csdnvideo",{label:"视频",command:"csdnvideo",toolbar:"insert,19"});b.widgets.add("csdnvideo",{dialog:"csdnvideoDialog",allowedContent:"div(csdn-data-video)[data-*];img[src];p",
requiredContent:"div(csdn-data-video);img[src];p",editables:{content:{selector:"p"}},defaults:{cover_img:"",player_url:"",provider:"",title:"",id:""},template:'\x3cdiv class\x3d"csdn-data-video" data-video-id\x3d"" data-video-title\x3d"{title}" data-mediaembed\x3d"" data-video-url\x3d"" data-video-cover\x3d""\x3e\x3cimg src\x3d"{cover_img}"\x3e\x3cp class\x3d"title"\x3e{title}\x3c/p\x3e\x3c/div\x3e',data:function(){var a=this;this.element.findOne("p").on("keyup",function(){a.element.data("video-title",
this.getText())});if(this.data.id)this.element.data("video-id",this.data.id),this.element.data("video-title",this.data.title),this.element.data("mediaembed",this.data.provider),this.element.data("video-url",this.data.player_url),this.element.data("video-cover",this.data.cover_img),this.element.findOne("img").setAttribute("src",this.data.cover_img),this.element.findOne("p").setText(this.data.title);else return!1},upcast:function(a){return"div"==a.name&&a.hasClass("csdn-data-video")}})}});