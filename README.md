# View as Markdown

A simple browser extension that lets you view any webpage as Markdown via the right-click context menu.

## Browser Support

- **Chrome** / Chromium-based browsers
- **Firefox** 140+

## Installation

### Chrome

1. Clone this repo
2. Open `chrome://extensions`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the `src` folder

### Firefox

1. Clone this repo
2. Open `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select any file inside the `src` folder (e.g., `manifest.json`)

## Usage

1. Navigate to any webpage
2. Right-click anywhere on the page
3. Click "View as Markdown"
4. A new tab will open with the page converted to Markdown using [into.md](https://into.md)

The extension opens the current page URL in `https://into.md/{currentpageurl}` format.

## Development

**Note:** Version is managed in `src/manifest.json`, not `package.json`.

```bash
# Install dependencies
pnpm install

# Run in Firefox
pnpm dev:firefox

# Run in Chrome
pnpm dev:chrome

# Build for both browsers
pnpm build

# Lint (validate manifest for Firefox AMO)
pnpm lint
```

## How it works

The extension adds a context menu item that opens the current page URL in [into.md](https://into.md), a service that converts web pages to Markdown format.

## Credits

Powered by [into.md](https://into.md) created by [Timo Lins](https://x.com/timolins).

## Privacy Policy

This extension does not collect, store, or transmit any user data. All operations are performed locally in your browser. When you click "View as Markdown", the extension simply opens a new tab with the current page URL passed to into.md. The actual conversion is handled by the into.md service.
