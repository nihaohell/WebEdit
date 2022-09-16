"use strict";
!function (o) {
  var i = {
    editor: null,
    title: null,
    inited: !1,
    version: "v1.1.0",
    isNight: !1
  },
    r = -1 < o.navigator.userAgent.indexOf("Android") || -1 < navigator.userAgent.indexOf("Adr"),
    s = !!o.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  function t(e) {
    document.querySelector("a.cke_button__" + e).click()
  }
  i.setContentStyle = function (e) {
    switch (e) {
      case "h1":
        t("h1");
        break;
      case "h2":
        t("h2");
        break;
      case "h3":
        t("h3");
        break;
      case "bulletedlist":
        t("bulletedlist");
        break;
      case "numberedlist":
        t("numberedlist");
        break;
      case "blockquote":
        t("blockquote");
        break;
      case "horizontalrule":
        t("horizontalrule")
    }
  },
    i.setAlign = function (e) {
      switch (e) {
        case "left":
          t("justifyleft");
          break;
        case "center":
          t("justifycenter");
          break;
        case "right":
          t("justifyright");
          break;
        case "block":
          t("justifyblock")
      }
    },
    i.setTextStyle = function (e) {
      switch (e) {
        case "bold":
          t("bold");
          break;
        case "strike":
          t("strike");
          break;
        case "italic":
          t("italic");
          break;
        case "underline":
          t("underline")
      }
    },
    i.enterPreviousFun = function () {
      i.editor.getCommand("accessPreviousSpace").exec(),
        i.editor.focus()
    },
    i.enterNextFun = function () {
      i.editor.getCommand("accessNextSpace").exec()
    },
    i.insertImg = function (e) {
      i.editor.fire("saveSnapshot");
      var t = i.editor.document.createElement("img");
      t.on("load", function () {
        i.editor.getCommand("justifycenter").exec(),
          setTimeout(function () {
            i.editor.getCommand("accessNextSpace").exec(),
              i.editor.fire("saveSnapshot"),
              i.editor.getCommand("autogrow").exec()
          }, 200)
      }),
        t.setAttribute("src", e),
        i.editor.insertElement(t)
    },
    i.insertLink = function (e, t, n) {
      t = t || (t || e), n ? (n.setText(t), n.setAttribute("href", e)) : ((n = i.editor.document.createElement("a")).setAttribute("href", e), n.setText(t = t || e), i.editor.insertElement(n), i.editor.widgets.initOn(n, "csdnlink"))
    };
  var a = null;
  function n() {
    i.title.style.height = "",
      i.title.style.height = i.title.scrollHeight + "px"
  }
  function e() {
    i.title = document.getElementById("txtTitle");
    function t() {
      var e = i.title.value.replace(/[\r\n\v]+/g, "");
      i.title.value = e
    }
    i.title.addEventListener("input", function () {
      t(), n()
    }),
      i.title.addEventListener("keyup", function () {
        t();
        var e = i.title.value.replace(/[\r\n\v]+/g, "");
        i.title.value = e
      }),
      i.title.addEventListener("focus", function () {
        var e = {
          action: "titleFocus",
          query: {
            enabled: !0
          }
        };
        r ? o.jsCallBackListener.richTextJs(JSON.stringify(e)) : s ? o.webkit.messageHandlers.richTextJs.postMessage(JSON.stringify(e)) : console.log("htmlEditor.title focus")
      }),
      i.title.addEventListener("blur", function () {
        var e = {
          action: "titleFocus",
          query: {
            enabled: !1
          }
        };
        r ? o.jsCallBackListener.richTextJs(JSON.stringify(e)) : s ? o.webkit.messageHandlers.richTextJs.postMessage(JSON.stringify(e)) : console.log("htmlEditor.title blur")
      })
  }
  function c() {
    i.editor = CKEDITOR.replace("editor", {
      contentsCss: ["css/ck_htmledit.css", "./css/ck_htmledit_dark.css"],
      disabledContentMenu: !0,
      cancelDbclick: !0,
      removePlugins: [
        "Summary",
        "image2",
        "imagebase",
        "uploadimage",
        "image",
        "uploadwidget",
        "notificationaggregator",
        "colorbutton",
        "textindent",
        "toc",
        "SimpleLink"
      ],
      extraPlugins: [
        "autogrow",
        "editorplaceholder",
        "justify",
        "CsdnLink"
      ],
      toolbar: [
        {
          name: "undo",
          items: ["Undo", "Redo"]
        },
        {
          name: "basestyle",
          items: [
            "Bold",
            "Italic",
            "Strike",
            "Underline",
            "JustifyLeft",
            "JustifyCenter",
            "JustifyRight",
            "JustifyBlock"
          ]
        },
        {
          name: "html",
          items: [
            "h1",
            "h2",
            "h3",
            "Blockquote",
            "BulletedList",
            "NumberedList",
            "HorizontalRule",
            "CsdnLink"
          ]
        },
        {
          name: "ignore",
          items: [
            "CodeSnippet",
            "csdnvideo",
            "Table"]
        }
      ],
      editorplaceholder: "请输入正文",
      height: "calc(100vh - 64px)",
      extraAllowedContent: "img[class](*);pre[class](*);a[href](*);h1;h2;h3;a[data-link-*];cmark[*];",
      breakAfterOpen: !1,
      breakAfterClose: !1,
      enterMode: CKEDITOR.ENTER_P,
      autoParagraph: !0,
      autoGrow_minHeight: 700,
      autoGrow_onStartup: !0,
      autoGrow_bottomSpace: 24,
      magicline_color: "transparent",
      widgetEditable: !1,
      csdnlink: { disabled: !0 },
      on: {
        instanceReady: function (e) {
          i.inited = !0,
            i.editor.on("selectionChange", function (e) {
              var t = document.querySelectorAll(".cke_button_on"),
                n = [];
              t.forEach(function (e) {
                e = (e = e.className.replace("cke_button cke_button__", "")).replace(" cke_button_on", ""); n.push(e)
              }); t = { action: "editorStyleState", query: { state: n } }; r ? o.jsCallBackListener.richTextJs(JSON.stringify(t)) : s ? o.webkit.messageHandlers.richTextJs.postMessage(JSON.stringify(t)) : console.log("editorStyleState", n); var i, e = e.editor.getSelection().getStartElement(); (i = e ? e.getAscendant("a", !0) : i) && "a" === i.getName() && (i = { action: "editorLink", query: { text: i.getText(), url: i.getAttribute("href"), curElement: i } }, r ? o.jsCallBackListener.richTextJs(JSON.stringify(i)) : s ? o.webkit.messageHandlers.richTextJs.postMessage(JSON.stringify(i)) : console.log("editorLink", i))
            }),
            i.editor.undoManager.onChange = function () {
              var e = {
                action: "recall",
                query: { enabled: i.editor.undoManager.undoable() }
              },
                t = {
                  action: "renewal",
                  query: {
                    enabled: i.editor.undoManager.redoable()
                  }
                };
              r ? (o.jsCallBackListener.richTextJs(JSON.stringify(e)), o.jsCallBackListener.richTextJs(JSON.stringify(t)))
                : s ? (
                  o.webkit.messageHandlers.richTextJs.postMessage(JSON.stringify(e)),
                  o.webkit.messageHandlers.richTextJs.postMessage(JSON.stringify(t)))
                  : (console.log("undoManager.undoable()",
                    i.editor.undoManager.undoable()),
                    console.log("undoManager.redoable()",
                      i.editor.undoManager.redoable()
                    )
                  )
            },
            i.editor.on("focus", function () {
              i.editor.getCommand("autogrow").exec();
              var e = {
                action: "contentFocus",
                query: {
                  enabled: i.editor.focusManager.hasFocus
                }
              };
              r ? o.jsCallBackListener.richTextJs(JSON.stringify(e)) : s ? o.webkit.messageHandlers.richTextJs.postMessage(JSON.stringify(e)) : console.log("htmlEditor.editor focus")
            }),
            i.editor.on("blur", function () {
              var e = {
                action: "contentFocus",
                query: {
                  enabled: i.editor.focusManager.hasFocus
                }
              };
              r ? o.jsCallBackListener.richTextJs(JSON.stringify(e)) : s ? o.webkit.messageHandlers.richTextJs.postMessage(JSON.stringify(e)) : console.log("htmlEditor.editor blur")
            });
          var t = {
            action: "initCallback"
          };
          r ? o.jsCallBackListener.richTextJs(JSON.stringify(t)) : s && o.webkit.messageHandlers.richTextJs.postMessage(JSON.stringify(t))
        }
      }
    })
  }
  i.insertLinkIos = function (e, t, n) {
    if (!a) return !1;
    i.editor.getSelection().selectRanges(a),
      t = t || (t || e),
      n ? (n.setText(t),
        n.setAttribute("href", e)) : (
        (n = i.editor.document.createElement("a")).setAttribute("href", e),
        n.setText(t = t || e),
        i.editor.insertElement(n))
  },
    i.getRange = function () {
      a = i.editor.getSelection().getRanges()
    },
    i.getTitle = function () {
      return i.title ? i.title.value : ""
    },
    i.getContent = function () {
      return i.editor ? i.editor.getData() : ""
    },
    i.getData = function () {
      return { title: i.getTitle(), content: i.getContent() }
    },
    i.setTitle = function (e) {
      i.title.value = e, n()
    },
    i.setContent = function (e) {
      new RegExp("<p>&nbsp;</p>\n$").test(e) || (e += "<p>&nbsp;</p>\n"),
        i.editor.setData(e),
        setTimeout(function () {
          i.editor.resetUndo()
        }, 200)
    },
    i.setData = function (e) {
      i.setTitle(e.title),
        i.setContent(e.content)
    },
    i.undo = function () {
      i.editor.undoManager.undoable() && i.editor.undoManager.undo()
    },
    i.redo = function () {
      i.editor.undoManager.redoable() && i.editor.undoManager.redo()
    },
    i.getVersion = function () {
      return i.version
    },
    i.blur = function () {
      i.editor.focusManager.blur(!0)
    },
    i.setNightTheme = function () {
      document.body.classList.add("is_night"),
        i.editor.document.getBody().addClass("is_night"),
        i.isNight = !0,
        i.editor.config.bodyClass = "htmledit_views is_night"
    },
    o.addEventListener("load", function () {
      e(), c()
    }), o.htmlEditor = i
}(window);