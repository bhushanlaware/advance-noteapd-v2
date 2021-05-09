import { Box, useTheme } from "@material-ui/core";
import FileComparer from "@UI/containers/fileComparer";
import * as React from "react";
export interface FileComparerProps {}

const FileComparerPage: React.FC<FileComparerProps> = () => {
  const theme=useTheme();

  return (
    <Box pt={0}>
      <FileComparer isDark={theme.palette.mode==='dark'}></FileComparer>
    </Box>
  );
};
export default FileComparer;
