import CodeIcon from "@UI/illustrator/Code2";
import FileCompareIcon from "@UI/illustrator/FileComparer";
import ImageApp from "@UI/illustrator/ImageCompress";
import NoteBookIcon from "@UI/illustrator/Notebook";
import TodoIcon from "@UI/illustrator/Todo";
import {
  Book as BookIcon,
  Code,
  FileText,
  Home as HomeIcon,
  Image as ImageIcon,
  List
} from "react-feather";


export const appList = [
  {
    title: "Todo",
    image: <TodoIcon />,
    path: "/app/todo",
    icon: <List />,
  },
  {
    title: "File Comparer",
    image: <FileCompareIcon />,
    path: "/app/file-comparer",
    icon: <FileText />,
  },
  {
    title: "Json Viewer",
    image: <CodeIcon />,
    path: "/app/json-viewer",
    icon: <Code />,
  },
  {
    title: "Notes",
    image: <NoteBookIcon />,
    path: "/app/notes",
    icon: <BookIcon />,
  },
  {
    title: "Image Compressor",
    image: <ImageApp />,
    path: "https://compressimage.app",
    icon: <ImageIcon />,
  },
];
export const NavigationList = [
  { title: "Home", image: <TodoIcon />, path: "/app", icon: <HomeIcon /> },
  ,
  ...appList,
];