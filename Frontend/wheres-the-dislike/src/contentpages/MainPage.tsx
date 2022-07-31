import React, {useState} from "react";
import Header from "../components/Header";
import {VideoComponent} from "../components/VideoComponent";
import {Box, Button, Grid} from "@mui/material";
import getVideoInformation from "../api/YoutubeDislikeApi";
import {NewTask} from "../components/NewTask";

/**
 * This contains all the content of the main page.
 * @author Frank Situ
 */
function MainPage() {
    const [videoList, setVideoList] = useState<any | any>([])

    const addNewComponentToList = (videoID: string) => {
        let newVideo = <VideoComponent videoID={videoID} ></VideoComponent>
        setVideoList([...videoList, newVideo]);
    }

    const deleteComponentInList = (componentID: string) => {

    }


    return (
        <div>
            <Box p={4}/>

            <Grid container spacing={2} justifyContent="center" >

                {videoList.map((currentVideo: JSX.Element) => (
                    <Grid item>
                        {currentVideo}
                    </Grid>
                ))}


                <Grid item>
                    <Button onClick={() => {
                        console.log(videoList);
                    }}>ew</Button>
                </Grid>

                <Grid item>
                    <Button onClick={() => {
                        addNewComponentToList("QH2-TGUlwu4");
                    }}>ewaddd</Button>
                </Grid>
            </Grid>
            {/* New task FAB */}
            <NewTask onNewNote={addNewComponentToList}></NewTask>

        </div>
    );
}

export default MainPage;