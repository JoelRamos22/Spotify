import { LitElement, css, html } from "lit";
import { newMusic } from "./newMusic";
import { titlesTopChart } from "./titleTopChart";
import { nowPlaying } from "./titleNowPlaying";
import { trackList } from "./titleTracklist";
import { reproductorMusic } from "./reproductor";
import { myTrack } from "./tracklist";
import { MyLeftBar } from "./nav";

export class gridSpotify extends LitElement {
    constructor() {
        super()
    }
    static styles = css`
        .main {
            width: 100%;
            height: 100vh;
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            grid-template-rows: repeat(10, 1fr);
        }
        .top-chart { 
            grid-area: 1 / 2 / 3 / 5; 
            padding: 5px; 
        }
        .new-music {
            display: flex; 
            align-items: center;
            grid-area: 3 / 2 / 8 / 5;
            padding: 5px; 
        }
        .my-track-section { 
            overflow: hidden; 
            grid-area: 8 / 2 / 11 / 5; 
            padding: 5px; 
        }
        .now-playing { 
            grid-area: 1 / 5 / 2 / 9; 
            background-color: #FAFAFA;
            padding: 5px; 
        }
        .my-reproductor {
            grid-area: 2 / 5 / 11 / 9; 
            overflow: hidden; 
            background-color: #FAFAFA;
            padding: 5px; 
        }
        .track-list { 
            grid-area: 1 / 9 / 3 / 11; 
            padding: 5px; 
        }
        .my-track { 
            grid-area: 3 / 9 / 11 / 11; 
            padding: 5px; 
            overflow-x: scroll; 
        }
        .my-nav { 
            grid-area: 1 / 1 / 11 / 2; 
            background-color: #FAFAFA;
            padding: 5px; 
        }
    `
    render() {
        return html`
            <main class="main">
                <top-chart class="top-chart"></top-chart>
                <new-music class="new-music"></new-music>
                <my-track class="my-track-section"></my-track>
                <now-playing class="now-playing"></now-playing>
                <my-reproductor class="my-reproductor"></my-reproductor>
                <track-list class="track-list"></track-list>
                <my-track class="my-track"></my-track>
                <my-nav class="my-nav"></my-nav>
            </main>
        `
    }
} 

customElements.define('grid-spotify', gridSpotify)