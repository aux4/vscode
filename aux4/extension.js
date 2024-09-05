const vscode = require("vscode");

function activate(context) {
  vscode.workspace.textDocuments.forEach(oepnDocumentAsAux4);

  context.subscriptions.push(
    vscode.workspace.onDidOpenTextDocument(oepnDocumentAsAux4),
  );
}

function oepnDocumentAsAux4(document) {
  if (!document.fileName.endsWith(".aux4")) return;

  vscode.languages.setTextDocumentLanguage(document, "json");
  vscode.commands.executeCommand("editor.action.formatDocument");
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
