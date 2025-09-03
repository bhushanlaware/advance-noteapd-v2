import { useTheme } from "@material-ui/core";
import dynamic from "next/dynamic";
const JsonViewer = dynamic(() => import("@UI/containers/JsonViewer"), {
  ssr: false,
});
import * as React from "react";
export interface JSONViwerProps {}

const JSONViwerPage = () => {
  const theme = useTheme();

  return <JsonViewer isDark={theme.palette.mode === "dark"}></JsonViewer>;
};

export default JSONViwerPage;
