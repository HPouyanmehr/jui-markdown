import { Typography as JoyUiTypography, styled } from '@mui/joy';

// Types
import type { ElementType } from 'react';
import type { TypographyProps as JoyUiTypographyProps } from '@mui/joy';

// Custom Types
export interface TypographyProps extends JoyUiTypographyProps {
  component?: ElementType;
}

const Typography = styled(JoyUiTypography)<TypographyProps>(() => ({}));

export default Typography;
