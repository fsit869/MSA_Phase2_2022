import React from "react";
import Header from "../components/Header";
import {VideoComponent} from "../components/VideoComponent";
import {Box, Grid} from "@mui/material";
import VideoObject from "../api/VideoObject";
import getVideoInformation from "../api/YoutubeDislikeApi";

/**
 * This contains all the content of the main page.
 * @author Frank Situ
 */
function MainPage() {
    getVideoInformation("QH2-TGUlwu4").then(r => console.log("re") );
    return (
        <div>
            <Box p={4}/>

            <Grid container spacing={2} justifyContent="center" >
                <Grid item>
                    <VideoComponent videoID={"QH2-TGUlwu4"} dateReleased={"date"} likes={1} dislikes={2} views={3}></VideoComponent>
                </Grid>

            </Grid>
        </div>
    );
}

export default MainPage;