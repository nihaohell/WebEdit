(function(){CKEDITOR.dialog.add("csdnvideoDialog",function(c){function e(){var a=window.crypto||window.msCrypto,b="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),c=b.length;Uint32Array.prototype.cl_map=function(a){for(var b=0,c=this.length,d=Array(c);b<c;b++)d[b]=a(this[b],b,this);return d};var d=new Uint32Array(8);a.getRandomValues(d);return d.cl_map(function(a){return b[a%c]}).join("")}return{allowedContent:"div(csdn-data-video)[data-*];img[src,data-cke-widget-wrapper];p",
title:"插入视频",minWidth:436,minHeight:100,resizable:CKEDITOR.DIALOG_RESIZE_NONE,contents:[{id:"csdnvideo",label:"csdnvideo",elements:[{type:"text",label:"视频URL：",labelLayout:"horizontal",width:"360px",id:"csdnvideo-URL",validate:function(){if(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(this.getValue())){var a;a=this.getValue();a=CKEDITOR.ajax.load("https://blog-console-api.csdn.net/v1/video/linkConversion?url\x3d"+a);a=JSON.parse(a);if(200===a.code)return this.result=
a,!0;alert(a.msg);return!1}alert("请输入正确的视频URL");return!1},commit:function(a){var b=this.result,b=b.data,c=b.cover_img||"https://img-blog.csdnimg.cn/editor-video.png",d=e()+"-"+Date.now();a.setData("cover_img",c);a.setData("player_url",b.player_url);a.setData("provider",b.provider);a.setData("title",b.title);a.setData("id",d)}},{type:"html",html:'\x3cp style\x3d"color: #999; margin: 12px 0  0 80px"\x3e\x3cspan style\x3d"font-size: 30px;vertical-align: -6px;color: #999;"\x3e⋆\x3c/span\x3e目前仅支持腾讯视频、哔哩哔哩视频、优酷视频、已上传视频\x3c/p\x3e'}]}],
onShow:function(a){a=c.getSelection().getStartElement();var b;a&&(b=a.getAscendant("div",!0));b&&"div"==b.getName()&&"csdn-data-video"==b.getAttribute("class")?this.insertMode=!1:(b=c.document.createElement("div"),b.addClass("csdn-data-video"),a=c.document.createElement("img"),a.isEditable=!1,b.append(a),a=c.document.createElement("p"),a.isEditable=!1,b.append(a),b.isEditable=!1,this.insertMode=!0);this.element=b;this.setupContent(this.element)}}})})();