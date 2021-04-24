import { Box, Grid } from "@material-ui/core";
import AppCard from "@UI/components/AppCard";
import SideBar from "@UI/components/layouts/SideBar";
import CodeIcon from "@UI/illustrator/Code2";
import FileCompareIcon from "@UI/illustrator/FileComparer";
import ImageApp from "@UI/illustrator/ImageCompress";
import NoteBookIcon from "@UI/illustrator/Notebook";
import TodoIcon from "@UI/illustrator/Todo";
import * as React from "react";
import { Book as BookIcon, Code, FileText, Home as HomeIcon, Image as ImageIcon, List } from 'react-feather';

export interface MainAppProps {}

export interface MainAppState {}

const appList = [
  {
    title: "Todo",
    image: <TodoIcon />,
    path: "/app",
    icon: <List />,
  },
  {
    title: "File Comparer",
    image: <FileCompareIcon />,
    path: "/app",
    icon: <FileText />,
  },
  {
    title: "Json Viewer",
    image: <CodeIcon />,
    path: "/app",
    icon: <Code />,
  },
  {
    title: "Notes",
    image: <NoteBookIcon />,
    path: "/app",
    icon: <BookIcon />,
  },
  {
    title: "Image Compressor",
    image: <ImageApp />,
    path: "https://compressimage.app",
    icon: <ImageIcon />,
  },
];
const menuList = [
  { title: "Home", image: <TodoIcon />, path: "/app", icon: <HomeIcon /> },
  ,
  ...appList,
];

class MainApp extends React.Component<MainAppProps, MainAppState> {
  state = { todos: [] };
  render() {
    return (
      <Box>
        <SideBar menu={menuList as any}>
        <Box p={3}>
            <Grid container spacing={3}>
              {appList.map((x) => (
                <AppCard {...x} />
              ))}
            </Grid>
        </Box>
        </SideBar>
      </Box>
    );
  }
}

export default MainApp;
