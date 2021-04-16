"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function t(t,o){for(var e=0,n=o.length,r=t.length;e<n;e++,r++)t[r]=o[e];return t}var o=new(function(){function o(t){void 0===t&&(t={}),this.name=t.name,this.styleSheet="\n      background-color: "+(t.backgroundColor||"darkgrey")+";\n      border-radius: 2px;\n      color: "+(t.color||"white")+";\n      line-height: 1.5;\n      padding: 1px 4px;\n      text-shadow: 0 1px 0px rgba(0, 0, 0, 0.2);\n    "}return o.prototype.__console__=function(t){for(var o,e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];(null===atom||void 0===atom?void 0:atom.inDevMode())&&(e.unshift("%c"+this.name+"%c",this.styleSheet,""),(o=window.console)[t].apply(o,e))},o.prototype.debug=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];this.__console__.apply(this,t(["debug"],o))},o.prototype.error=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];this.__console__.apply(this,t(["error"],o))},o.prototype.info=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];this.__console__.apply(this,t(["info"],o))},o.prototype.log=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];this.__console__.apply(this,t(["log"],o))},o.prototype.trace=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];this.__console__.apply(this,t(["trace"],o))},o.prototype.warn=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];this.__console__.apply(this,t(["warn"],o))},o}())({name:"@atxm/title-mode"}),e="[Developer Mode]";function n(t){atom.views.getView(t),document.title&&!document.title.endsWith(e)&&(o.log("Updating document title to '"+document.title+" "+e+"'"),document.title=document.title+" "+e)}module.exports=function(){atom.inDevMode()&&(atom.workspace.getTextEditors().map((function(t){return n(t)})),atom.workspace.getPanes().map((function(t){return n(t)})),atom.workspace.observeTextEditors((function(t){return n(t)})),atom.workspace.observePanes((function(t){return n(t)})),atom.workspace.observeActiveTextEditor((function(t){return n(t)})),atom.workspace.observeActivePane((function(t){return n(t)})))};
//# sourceMappingURL=index.js.map
