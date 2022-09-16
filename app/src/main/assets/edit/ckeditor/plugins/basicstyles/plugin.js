/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.plugins.add("basicstyles",{lang:"af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",icons:"bold,italic,underline,strike,subscript,superscript,h1,h2,h3,others",icontype:".svg",iconoffset:"center",iconbgsize:"16px",hidpi:!1,init:function(a){a.config.csdn_stlye_url?a.addContentsCss(a.config.csdn_stlye_url):
"";var k=0,b=function(f,d,e,b){if(b){b=new CKEDITOR.style(b);var c=m[e];c.unshift(b);a.attachStyleStateChange(b,function(f){!a.readOnly&&a.getCommand(e).setState(f)});a.addCommand(e,new CKEDITOR.styleCommand(b,{contentForms:c}));a.ui.addButton&&a.ui.addButton(f,{label:d,command:e,toolbar:"insert,"+(k+=1)})}},m={bold:["strong","b",["span",function(a){a=a.styles["font-weight"];return"bold"==a||700<=+a}]],italic:["em","i",["span",function(a){return"italic"==a.styles["font-style"]}]],underline:["u",["span",
function(a){return"underline"==a.styles["text-decoration"]}]],strike:["s","strike",["span",function(a){return"line-through"==a.styles["text-decoration"]}]],subscript:["sub"],superscript:["sup"],h1:["h1"],h2:["h2"],h3:["h3"]},d=a.config,c=a.lang.basicstyles;b("Bold",c.bold,"bold",d.coreStyles_bold);b("Italic",c.italic,"italic",d.coreStyles_italic);b("Underline",c.underline,"underline",d.coreStyles_underline);b("Strike",c.strike,"strike",d.coreStyles_strike);b("Subscript",c.subscript,"subscript",d.coreStyles_subscript);
b("Superscript",c.superscript,"superscript",d.coreStyles_superscript);b("h1",c.h1,"h1",d.coreStyles_h1);b("h2",c.h2,"h2",d.coreStyles_h2);b("h3",c.h3,"h3",d.coreStyles_h3);if(a.ui.addRichCombo){var g={},h=["italic","underline","strike"],l={italic:"倾斜",underline:"下划线",strike:"删除线"};a.ui.addRichCombo("PanelFontStyle",{icon:"others",label:"其他",title:"其他样式",panel:{css:[CKEDITOR.skin.getPath("editor")].concat(a.config.contentsCss),multiSelect:!0,attributes:{"aria-label":"其他样式"}},init:function(){this.startGroup("对齐");
for(var b in h){var c=h[b],e=CKEDITOR.skin.getIconStyle(c,"rtl"==a.lang.dir,void 0,void 0);g[b]=new CKEDITOR.style(d["coreStyles_"+c]);this.add(c,'\x3cspan class\x3d"cke_combo_icon cke_combo_icon__fontstyle cke_button_icon" style\x3d"'+e+'"\x3e'+l[c]+"\x3c/span\x3e",l[c])}},onClick:function(b){a.focus();a.fire("saveSnapshot");a.execCommand(b);setTimeout(function(){a.fire("saveSnapshot")},0)},onRender:function(){a.on("selectionChange",function(b){var c=this.getValue();b=b.data.path;this.refresh();
for(var d in g)g[d].checkActive(b,a)&&d!=c&&"p"!=d&&this.setValue(h[d])},this)},refresh:function(){this.editor&&a.elementPath()&&this.setValue("")}})}a.setKeystroke([[CKEDITOR.CTRL+66,"bold"],[CKEDITOR.CTRL+73,"italic"],[CKEDITOR.CTRL+85,"underline"],[CKEDITOR.CTRL+49,"h1"],[CKEDITOR.CTRL+50,"h2"],[CKEDITOR.CTRL+51,"h3"]])}});CKEDITOR.config.coreStyles_bold={element:"strong",overrides:"b"};CKEDITOR.config.coreStyles_italic={element:"em",overrides:"i"};CKEDITOR.config.coreStyles_underline={element:"u"};
CKEDITOR.config.coreStyles_strike={element:"s",overrides:"strike"};CKEDITOR.config.coreStyles_subscript={element:"sub"};CKEDITOR.config.coreStyles_superscript={element:"sup"};CKEDITOR.config.coreStyles_h1={element:"h1"};CKEDITOR.config.coreStyles_h2={element:"h2"};CKEDITOR.config.coreStyles_h3={element:"h3"};