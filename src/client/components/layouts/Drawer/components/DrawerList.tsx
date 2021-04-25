import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme, withStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import * as React from "react";

export interface DrawerListProps {
  menu: any;
}
const CListItem = withStyles((theme) => ({
  root: {
    padding: 3,
    paddingLeft: 10,
    fontFamily: "Inter, Robota",
    fontWeight: 600,
    "&$selected": {
      borderRight: `3px solid ${theme.palette.primary.main}`,
    },
  },
  selected: {},
}))(ListItem);
const DrawerList: React.FC<DrawerListProps> = (props) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <List>
      {props.menu.map((x, i) => (
        <CListItem button key={i} selected={router.pathname.includes(x.path)}>
          <ListItemIcon style={{ color: theme.palette.text.secondary }}>
            {x.icon}
          </ListItemIcon>
          <ListItemText primary={x.title} />
        </CListItem>
      ))}
    </List>
  );
};

export default DrawerList;
