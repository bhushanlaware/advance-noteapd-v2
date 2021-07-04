import { useTheme } from "@material-ui/core";
// import JsonViewer from "@UI/containers/JsonViewer";
// import dynamic from "next/dynamic";
// const JsonViewer = dynamic(() => import("@UI/containers/JsonViewer"));
import * as React from "react";
export interface JSONViwerProps {}

const JSONViwerPage = () => {
  const theme = useTheme();

  return ""; //<JsonViewer isDark={theme.palette.mode === "dark"}></JsonViewer>;
};

export default JSONViwerPage;
