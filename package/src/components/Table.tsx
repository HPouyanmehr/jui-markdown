import { Table as JoyUiTable, styled } from '@mui/joy';

// Types
import type { TableProps as JoyUiTableProps } from '@mui/joy';

// Custom Types
export interface TableProps extends JoyUiTableProps {}

const Table = styled(JoyUiTable)<TableProps>(() => ({}));

export default Table;
