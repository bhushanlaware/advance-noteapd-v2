import { Box } from "@material-ui/core";
import FileComparer from "@UI/containers/FileComparer";
import * as React from "react";
export interface FileComparerProps {}

const FileComparerPage: React.FC<FileComparerProps> = () => {
  return (
    <Box pt={0}>
      <FileComparer></FileComparer>
    </Box>
  );
};
export default FileComparerPage;
