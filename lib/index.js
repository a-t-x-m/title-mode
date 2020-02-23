'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var developer_console_1 = require("@atxmtx/developer-console");
var meta = '@atxmtx/title-mode';
var suffix = ' [Developer Mode]';
function titleMode() {
    if (!atom.inDevMode())
        return;
    var editors = atom.workspace.getTextEditors();
    editors.map(function (editor) { return modifyTitle(editor); });
    var panes = atom.workspace.getPanes();
    panes.map(function (pane) { return modifyTitle(pane); });
    atom.workspace.observeTextEditors(function (editor) { return modifyTitle(editor); });
    atom.workspace.observePanes(function (pane) { return modifyTitle(pane); });
    atom.workspace.observeActiveTextEditor(function (editor) { return modifyTitle(editor); });
    atom.workspace.observeActivePane(function (editor) { return modifyTitle(editor); });
}
function modifyTitle(element) {
    var view = atom.views.getView(element);
    if (document.title && !document.title.endsWith(suffix)) {
        developer_console_1.log(meta + ": Updating document title to '" + document.title + suffix + "'");
        document.title = "" + document.title + suffix;
    }
}
exports.default = titleMode;
//# sourceMappingURL=index.js.map