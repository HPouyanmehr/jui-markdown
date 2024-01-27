// Custom Types
import type {
  JuiMarkdownProps,
  JuiMarkdownWithOptions,
  JuiMarkdownWithOverrides,
} from '../types/juiMarkdown';

export const hasOptionsAndOverridesProps = (
  props: JuiMarkdownProps
): props is JuiMarkdownWithOptions & JuiMarkdownWithOverrides =>
  'options' in props && 'overrides' in props;
