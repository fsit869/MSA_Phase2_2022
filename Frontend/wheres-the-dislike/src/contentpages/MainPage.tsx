import React from "react";
import Header from "../components/Header";
import {VideoComponent} from "../components/VideoComponent";
import {Box, Grid} from "@mui/material";
import VideoObject from "../api/VideoObject";

/**
 * This contains all the content of the main page.
 * @author Frank Situ
 */
function MainPage() {

    return (
        <div>
            {/*<iframe*/}
            {/*    src="https://www.youtube.com/embed/E7wJTIfff-1dvQ"*/}
            {/*    allowFullScreen={true}*/}
            {/*/>*/}

            <Box p={4}/>


            <Grid container spacing={2} justifyContent="center" >
                <Grid item>
                    <VideoComponent videoLink={"aaa"} dateReleased={"date"} likes={1} dislikes={2} views={3}></VideoComponent>
                </Grid>

            </Grid>
        </div>
    );
}

export default MainPage;