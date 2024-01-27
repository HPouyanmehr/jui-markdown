import MarkdownRoot from 'markdown-to-jsx';

// Types
import type { FC } from 'react';

// Custom Hooks
import useOptions from './hooks/options';

// Custom Utilities
import { hasOptionsAndOverridesProps } from './utilities/juiMarkdown';

// Custom Types
import type { JuiMarkdownProps } from './types/juiMarkdown';

const JuiMarkdown: FC<JuiMarkdownProps> = (props) => {
  // Props
  const { children = '' } = props;

  // Hooks
  const options = useOptions(props);

  if (hasOptionsAndOverridesProps(props)) {
    console.error(
      "Cannot set both 'options' and 'overrides' in the JuiMarkdown component props."
    );
  }

  return (
    <MarkdownRoot options={options}>{children ? children : ''}</MarkdownRoot>
  );
};

export default JuiMarkdown;
