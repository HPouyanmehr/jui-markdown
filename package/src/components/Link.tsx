import { Link as JoyUiLink, styled } from '@mui/joy';

// Types
import type { LinkProps as JoyUiLinkProps } from '@mui/joy';

// Custom Types
export interface LinkProps extends JoyUiLinkProps {}

const Link = styled(JoyUiLink)<LinkProps>(() => ({}));

export default Link;
