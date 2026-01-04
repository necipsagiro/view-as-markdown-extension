// Namespace Polyfill - Firefox (browser) and Chrome (chrome) compatibility
const runtime = typeof browser !== 'undefined' ? browser : chrome;

runtime.runtime.onInstalled.addListener(() => {
  runtime.contextMenus.create({
    id: 'view-as-markdown',
    title: 'View as Markdown',
    contexts: ['page']
  });
});

runtime.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'view-as-markdown' && tab.url) {
    const markdownUrl = `https://into.md/${encodeURIComponent(tab.url)}`;
    runtime.tabs.create({ url: markdownUrl });
  }
});
