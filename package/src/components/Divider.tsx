import { Divider as JoyUiDivider, styled } from '@mui/joy';

// Types
import type { DividerProps as JoyUiDividerProps } from '@mui/joy';

// Custom Types
export interface DividerProps extends JoyUiDividerProps {}

const Divider = styled(JoyUiDivider)<DividerProps>(() => ({}));

export default Divider;
