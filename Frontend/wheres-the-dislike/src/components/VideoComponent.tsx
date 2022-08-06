import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Stack,
    CardHeader,
    Container,
    IconButton,
    Typography, Grid
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import VideoObject from "../api/VideoObject";
import React, {useEffect, useState} from "react";
import getVideoInformation from "../api/YoutubeDislikeApi";
import {wait} from "@testing-library/user-event/dist/utils";

interface Props {
    videoID: string,
    deleteMethod: any
}

export const VideoComponent = (props: Props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    const [videoDetails, setVideoDetails] = useState<undefined | any>(undefined);
    // let apiData = null;
    useEffect(() => {
        // Update the document title using the browser API
        getVideoInformation(props.videoID, setVideoDetails, setLoading, setError);
    }, []);

    if (loading) return <p>Loading</p>
    // if (error) return <p>Error</p>

    return <Card sx={{
        maxWidth: 340,
        maxHeight: 350,
        minWidth: 260,
        minHeight: 300,
    }}>
        {/*Header*/}
        <CardHeader
            title={props.videoID}
            subheader={"wow a subheading"}
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
                src={"https://www.youtube.com/embed/" + props.videoID}
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
            {error ? <p>Video could not be found</p> : <div>
                <Typography variant="body2" align="left" component="p">
                    Likes: {videoDetails.likes}
                </Typography>
                <Typography variant="body2" align="left" component="p">
                    Dislikes: {videoDetails.dislikes}
                </Typography>
                <Typography variant="body2" align="left" component="p">
                    Rating: {videoDetails.rating.toString().substring(0, 3)} / 5
                </Typography>
            </div>}


            <Box p={5}></Box>

            {/* Delete button */}
            <IconButton aria-label="Delete Task" onClick={() =>
                props.deleteMethod(props.videoID)
            }>
                <DeleteIcon></DeleteIcon>
            </IconButton>
        </CardActions>
    </Card>;
}