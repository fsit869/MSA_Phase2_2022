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
import {VideoKeys} from "./VideoKeys";

type GetUsersResponse = {
    data: VideoKeys;
};
export default async function getVideoInformation(videoURL: string) {
    try {
        // 👇️ const data: GetUsersResponse
        const {data, status} = await axios.get<GetUsersResponse>(
            'https://returnyoutubedislikeapi.com/votes?videoId=' + videoURL,
        );

        console.log(JSON.stringify(data, null, 4));

        // 👇️ "response status is: 200"
        console.log('response status is: ', status);

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}