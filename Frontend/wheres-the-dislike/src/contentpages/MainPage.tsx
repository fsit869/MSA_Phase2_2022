import React from "react";
import Header from "../components/Header";
import {VideoComponent} from "../components/VideoComponent";
import {Box, Grid} from "@mui/material";
import getVideoInformation from "../api/YoutubeDislikeApi";

/**
 * This contains all the content of the main page.
 * @author Frank Situ
 */
function MainPage() {
    return (
        <div>
            <Box p={4}/>

            <Grid container spacing={2} justifyContent="center" >
                <Grid item>
                    <VideoComponent videoID={"QH2-TGUlwu4"} ></VideoComponent>
                </Grid>

            </Grid>
        </div>
    );
}

export default MainPage;