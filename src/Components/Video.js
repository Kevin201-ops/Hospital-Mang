import React from "react";
import "../styles/Video.css"

function Video() {
    return (
        <iframe src="./video.mp4"  className="koke" width={970} height={550} >
            Sorry, your browser doesn't support videos.
        </iframe>
    );
};

export default Video;