/**
 * Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* exported initSample */

if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
	CKEDITOR.tools.enableHtml5Elements( document );

// The trick to keep the editor in the sample quite small
// unless user specified own height.
CKEDITOR.config.height = 150;
CKEDITOR.config.width = 'auto';

var csdnLinkOpt = null;

var initSample = ( function() {
	var wysiwygareaAvailable = isWysiwygareaAvailable(),
		isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' );

	return function() {
		var editorElement = CKEDITOR.document.getById( 'editor' );

		// :(((
		if ( isBBCodeBuiltIn ) {
			editorElement.setHtml(
				'Hello world!\n\n' +
				'I\'m an instance of [url=https://ckeditor.com]CKEditor[/url].'
			);
		}



		// Depending on the wysiwygare plugin availability initialize classic or inline editor.
		if ( wysiwygareaAvailable ) {
      console.log('wysiwygareaAvailable', wysiwygareaAvailable);
      CKEDITOR.replace('editor', {
        skin: 'moono-lisa-mp',
        dialog_backgroundCoverColor: 'rgba(0,0,0,.5)',
        contentsCss: window.CKEDITOR.getUrl('contents-mp.css'),
        extraPlugins: 'format,justify,eqneditor,addtpl,csdnvote,maximizewidth,CsdnLink,devtools', //devtools 开发专用！！！
        removePlugins: 'SimpleLink',
        removeButtons: 'DocProps,Cut,Copy,Paste,PasteText,PasteFromWord,Find,Replace,Subscript,Superscript,Outdent,Indent,SpecialChar,Styles,Source,Font,RemoveFormat',
        toolbarGroups: null,
        toolbar: [
          { name: 'undo', items: ['Undo', 'Redo'] },
          {
            name: 'basestyle',
            items: ['Format', 'Bold', 'TextColor', 'BGColor', 'PanelFontStyle']
          }, //, 'ImageOutside'
          {
            name: 'insertdom',
            items: [
              'PanelList',
              'PanelJustify',
              'HorizontalRule',
              'Blockquote',
              'CodeSnippet',
              'Table'
            ]
          },
          {
            name: 'otherstyle',
            items: [
              'ImageOutside',
              'csdnvideo',
              'EqnEditor',
              'CsdnLink',
              'Summary',
              'addtpl',
              'toc',
              'CsdnVote',
              'MaximizeWidth'
            ]
          },
          // { name: 'fontstyle', items: ['Italic', 'Underline', 'Strike']},
          {
            name: 'ignore',
            items: [
              'Chart',
              'BulletedList',
              'NumberedList',
              'JustifyLeft',
              'JustifyCenter',
              'JustifyRight',
              'JustifyBlock',
              'Italic',
              'Underline',
              'Strike'
            ]
          }
          // { name: 'otherstyle', items: ['BGColor', 'TextColor', 'Image', 'EqnEditor', 'SimpleLink', 'toc'] }
        ],
        on: {
          instanceReady: function (evt) {
            document.getElementById('editorbox').style.display = 'block';
            document.getElementById('loadingBox').style.display = "none";
          }
        },
        imageUploadFun: function (editor){
          console.log('imageUploadFunimageUploadFun', editor)
          CKEDITOR.instances.editor.insertHtml('<img src="https://img-blog.csdnimg.cn/20210426193437742.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2Nwb25nbzg=,size_16,color_FFFFFF,t_70"/>')
        },
        maximizewidth: {
          execMaximize: function (editor) {
            console.log('maximizewidth', 'maximize', editor)
            editor.container.addClass('ck_maximize_width')
          },
          execMinimize: function (editor) {
            console.log('maximizewidth', 'minimize', editor);
            editor.container.removeClass('ck_maximize_width')
          },
        },
        csdnlink: {
          getInfoUrl: 'http://csdn-cradinfo.internal.csdn.net/crawler/v1/resource/getUrlInfo'
        }
      } );
		} else {
			editorElement.setAttribute( 'contenteditable', 'true' );
			CKEDITOR.inline( 'editor' );

			// TODO we can consider displaying some info box that
			// without wysiwygarea the classic editor may not work.
		}
	};

	function isWysiwygareaAvailable() {
		// If in development mode, then the wysiwygarea must be available.
		// Split REV into two strings so builder does not replace it :D.
		if ( CKEDITOR.revision == ( '%RE' + 'V%' ) ) {
			return true;
		}

		return !!CKEDITOR.plugins.get( 'wysiwygarea' );
	}
} )();

