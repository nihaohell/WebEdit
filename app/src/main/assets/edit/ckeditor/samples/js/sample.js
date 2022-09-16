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

var initSample = ( function() {
	var wysiwygareaAvailable = isWysiwygareaAvailable(),
		isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' );

  window.template_switch = true;

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
			CKEDITOR.replace( 'editor', {
        extraPlugins: 'eqneditor,devtools',
        tabSpaces: 8,
        on: {
          instanceReady: function (evt) {
            // document.getElementById('editorbox').style.display = 'block';
            // document.getElementById('loadingBox').style.display = "none";
          }
        },
        contentsCss: CKEDITOR.getUrl('contents.css'),
        filebrowserImageUploadUrl: 'https://blog-console-api.csdn.net/v1/upload/img?shuiyin=2',
        cloudServices_uploadUrl: 'https://blog-console-api.csdn.net/v1/upload/img?shuiyin=2',
        imageUploadFun: function (editor){
          console.log('imageUploadFunimageUploadFun', editor)
          CKEDITOR.instances.editor.insertHtml('<img src="https://img-blog.csdnimg.cn/20210426193437742.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2Nwb25nbzg=,size_16,color_FFFFFF,t_70"/>')
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

