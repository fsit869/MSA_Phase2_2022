import React from "react";
import Header from "../components/Header";
import {VideoComponent} from "../components/VideoComponent";
import {Box, Grid} from "@mui/material";

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
                    <VideoComponent videoLink="www.mylink.com" likes={324} dislikes={61} views={32131} dateReleased={"24-12-1924"}/>
                </Grid>
                <Grid item>
                    <VideoComponent videoLink="www.mylink.com" likes={324} dislikes={61} views={32131} dateReleased={"24-12-1924"}/>
                </Grid>
                <Grid item>
                    <VideoComponent videoLink="www.mylink.com" likes={324} dislikes={61} views={32131} dateReleased={"24-12-1924"}/>
                </Grid>
                <Grid item>
                    <VideoComponent videoLink="www.mylink.com" likes={324} dislikes={61} views={32131} dateReleased={"24-12-1924"}/>
                </Grid>
                <Grid item>
                    <VideoComponent videoLink="www.mylink.com" likes={324} dislikes={61} views={32131} dateReleased={"24-12-1924"}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default MainPage;