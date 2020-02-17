import React from "react"
import ReactDOM from "react-dom"
import styles from "./modules/css"
import { css } from "aphrodite";
var app = document.getElementById("app");

class YoutubePlayer extends React.Component {
    url: string;
    constructor(props: Readonly<{}>) {
        super(props);
        this.url = "";
        this.state = {
            url: ""
        };
    }
    render() {
        var state: any = this.state;
        var url: String = state.url;
        var video_id = "";
        if (url.match("youtu.be")) {
            video_id = url.split("youtu.be/").slice(-1)[0].substr(0, 11);
        }
        else if (url.match("https://www.youtube.com/watch")) {
            video_id = url.split('v=').slice(-1)[0].substr(0, 11);
        }

        return <div>
            <div className={css(styles['drag'])}>
                <label className={css(styles['input_area'])}>URL:<input type="text" onChange={(e) => this.url = e.target.value} /></label>
                <button className={css(styles['input_area'])} onClick={(e) => { this.setState({ url: this.url }); }}>  Ok  </button>
            </div>
            {
                (() => {
                    if (video_id.length != 0) {
                        return <div className={css(styles['youtube_player'])}>
                            <iframe className={css(styles['youtube_iframe'])} width="640" height="360" src={"https://www.youtube.com/embed/" + video_id} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                    } else {
                        return <div>Video not found.</div>
                    }
                })()
            }
        </div>
    }
}

if (app) {
    ReactDOM.render(
        <YoutubePlayer />,
        app
    );
}
