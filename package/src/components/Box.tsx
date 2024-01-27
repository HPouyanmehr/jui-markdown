import { Box as JoyUiBox, styled } from '@mui/joy';

// Types
import type { BoxProps as JoyUiBoxProps } from '@mui/joy';

// Custom Types
export interface BoxProps extends JoyUiBoxProps {}

const Box = styled(JoyUiBox)<BoxProps>(() => ({}));

export default Box;
