// Custom Utilities
import { getOverrides } from '../overrides';

// Custom Types
import type { Options } from '../types/markdown';
import type { JuiMarkdownProps } from '../types/juiMarkdown';

const useOptions = (props: JuiMarkdownProps): Options => {
  const { options, overrides } = props;

  const defaultOverrides = getOverrides(props);

  if (options) {
    if (options.overrides) return options;
    return {
      ...options,
      overrides: defaultOverrides,
    };
  }

  return { overrides: overrides ? overrides : defaultOverrides };
};

export default useOptions;
