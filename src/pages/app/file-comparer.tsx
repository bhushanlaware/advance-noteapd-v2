import { Box } from "@material-ui/core";
import dynamic from "next/dynamic";
const FileComparer = dynamic(() => import("@UI/containers/FileComparer"), {
  ssr: false,
});
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
