import { useTheme } from "@material-ui/core";
import JsonViewer from "@UI/containers/JsonViewer";
import * as React from "react";
export interface JSONViwerProps {}

const JSONViwerPage: React.FC<JSONViwerProps> = () => {
  const theme=useTheme();

  return <JsonViewer isDark={theme.palette.mode==='dark'}></JsonViewer>
};

export default JSONViwerPage;
