import DeveloperConsole from '@atxm/developer-console';
import meta from '../package.json';

const console = new DeveloperConsole({
  name: meta.name
});


const suffix = '[Developer Mode]';

function titleMode(): void {
  if (!atom.inDevMode()) return;

  const editors = atom.workspace.getTextEditors();
  editors.map(editor => modifyTitle(editor));

  const panes = atom.workspace.getPanes();
  panes.map(pane => modifyTitle(pane));

  atom.workspace.observeTextEditors(editor => modifyTitle(editor));
  atom.workspace.observePanes(pane => modifyTitle(pane));
  atom.workspace.observeActiveTextEditor(editor => modifyTitle(editor));
  atom.workspace.observeActivePane(editor => modifyTitle(editor));
}

function modifyTitle(element): void {
  const view: HTMLElement = atom.views.getView(element);

  if (document.title && !document.title.endsWith(suffix)) {
    console.log(`${meta}: Updating document title to '${document.title} ${suffix}'`);
    document.title = `${document.title} ${suffix}`;
  }
}

export default titleMode;
