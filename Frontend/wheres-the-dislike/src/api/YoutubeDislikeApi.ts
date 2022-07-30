// import VideoObject from "./VideoObject";
//
// interface videoDetails {
//
// }
//
// export const getVideoInformation = (videoURL:string) => {
//     let rfe: VideoObject = new VideoObject("abc", "bcd", 2, 2, 2);
// }


import axios from 'axios';

export type VideoKeys = {
    id: number;
    dateCreated: string;
    likes: number;
    dislikes: number;
    viewCount: number;
    deleted: boolean;
};

export default function getVideoInformation(videoURL: string, setData: React.Dispatch<any>, setLoading:  React.Dispatch<React.SetStateAction<boolean>>) {
    axios.get<VideoKeys>('https://returnyoutubedislikeapi.com/votes?videoId=' + videoURL).then((res) => {
        setData(res.data);
        setLoading(false);
    })
}