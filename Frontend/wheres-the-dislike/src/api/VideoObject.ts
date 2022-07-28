export default class VideoObject {

    public videoLink: string;
    public dateReleased: string;
    public likes: number;
    public dislikes: number;
    public views: number;

    constructor(videoLink: string, dateReleased: string, likes: number, dislikes: number, views: number) {
        this.videoLink = videoLink;
        this.dateReleased = dateReleased;
        this.likes = likes;
        this.dislikes = dislikes;
        this.views = views;
    }

}