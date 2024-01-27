// Custom Types
import type { CSSProperties } from 'react';
import type { Options, Overrides } from './markdown';
import type {
  HighlightComponent,
  HighlightThemes,
  PrismTheme,
} from './highlight';

export interface JuiMarkdownRootProps {
  hideLineNumbers?: boolean;
  children?: string | null;
  prismTheme?: PrismTheme;
  codeWrapperStyles?: CSSProperties;
  Highlight?: HighlightComponent;
  themes?: HighlightThemes;
}

export interface JuiMarkdownWithOverrides extends JuiMarkdownRootProps {
  overrides?: Overrides;
  options?: never;
}

export interface JuiMarkdownWithOptions extends JuiMarkdownRootProps {
  options?: Options;
  overrides?: never;
}

export type JuiMarkdownProps =
  | JuiMarkdownWithOptions
  | JuiMarkdownWithOverrides;
