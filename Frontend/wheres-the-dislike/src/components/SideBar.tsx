import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";

export const SideBar = (): JSX.Element => {
    return (
        <div>
            {/*Delete all button*/}
            <List>
                <ListItem button onClick={e => console.log("Hey")}>
                    <ListItemText primary="Delete All Notes"/>
                </ListItem>
            </List>
        </div>
    );
}