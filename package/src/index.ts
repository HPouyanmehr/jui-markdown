import JuiMarkdown from './JuiMarkdown';

// Types
export type { Options, Overrides } from './types/markdown';
export type { JuiMarkdownProps } from './types/juiMarkdown';
export type { PrismTheme } from './types/highlight';

// Utilities
export { defaultOverrides, getOverrides } from './overrides';

// Joy UI Markdown
export default JuiMarkdown;
export { default as JuiMarkdown } from './JuiMarkdown';
