import {Card, CardActions, CardContent, CardHeader, IconButton, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface VideoComponentProps {
    videoLink: string;
    dateReleased: string;
    likes: number;
    dislikes: number;
    views: number;
}

export const VideoComponent = (props: VideoComponentProps) => {

    return <Card sx={{
        maxWidth: 340,
        maxHeight: 350,
        minWidth: 260,
        minHeight: 300,
    }}>
        {/*Header*/}
        <CardHeader
            title="Video One"
            subheader={"Date Created: " + props.dateReleased}
            subheaderTypographyProps={{variant: "subtitle2"}}
            sx={{
                backgroundColor: "lightyellow",
                textAlign: "left",
            }}>

        </CardHeader>

        {/*Video*/}
        <CardContent sx={{
            paddingTop: 0,
            minHeight: "160px",
            backgroundColor: "lightyellow",
        }}>
            <iframe
                src="https://www.youtube.com/embed/E7wJTIfff-1dvQ"
                allowFullScreen={true}
            />
        </CardContent>

        {/* Action area */}
        <CardActions
            sx={{
                backgroundColor: "lightyellow",
                textAlign: "right",
            }}
        >
            {/* Ranking text */}
            <Typography variant="body2" align="left" component="p">
                Likes: {props.likes}
            </Typography>

            <Typography variant="body2" align="left" component="p">
                Dislikes: {props.dislikes}
            </Typography>

            {/* Delete button */}
            <IconButton aria-label="Delete Task" >
                <DeleteIcon></DeleteIcon>
            </IconButton>
        </CardActions>
    </Card>;
}