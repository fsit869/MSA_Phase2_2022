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
    const [videoList, setVideoList] = useState<any | any>({})

    const addNewComponentToList = (videoID: string) => {
        let newVideo = <VideoComponent videoID={videoID} deleteMethod={deleteComponentInList}></VideoComponent>;
        setVideoList({...videoList, [videoID]: newVideo})
    }

    const deleteComponentInList = (videoID: string) => {
        console.log("Deleting");
        const oldVideos = {...videoList};
        delete oldVideos[videoID];
        setVideoList(oldVideos);
    }

    return (
        <div>
            <Box p={4}/>

            <Grid container spacing={2} justifyContent="center" >

                {/*{videoList.map((currentVideo: JSX.Element) => (*/}
                {/*    <Grid item>*/}
                {/*        {currentVideo}*/}
                {/*    </Grid>*/}
                {/*))}*/}

                {Object.keys(videoList).map(function(key, index) {
                    return <Grid item>
                        {videoList[key]}
                    </Grid>
                })}

            </Grid>
            {/* New task FAB */}
            <NewTask onNewNote={addNewComponentToList}></NewTask>

        </div>
    );
}

export default MainPage;