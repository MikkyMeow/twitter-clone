import { Box } from '@material-ui/core';
import React from 'react';

interface IProps {
  className: string;
}

export const Dropdown: React.FC<IProps> = ({ className }) => {
  return <Box className={className}></Box>;
};
