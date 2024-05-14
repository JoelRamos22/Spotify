import { LitElement, html, css } from "lit"
import { musicData } from "../modules/musicData.js"
import { data } from "../db/data.js"

export class newMusic extends LitElement {
    static properties = {
        container: { typeof: String },
        imgSrc: { typeof: String },
        textSong: { typeof: String },
        textArtist: { typeof: String },
        // Artist: {typeof: String},
        // Song: {typeof: String},
        // year: {typeof: String},
        dataMusic: { typeof: Array }
    }
    constructor() {
        super()
        this.container = "container"
        this.imgSrc = ""
        this.textSongClass = "ArtistSong"
        this.textArtistClass = "ArtistCompositor"
        // this.Artist = "Example Artist"
        // this.Song = "Example Song"
        this.dataMusic = musicData(data)
    }
    static styles = css`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            overflow-x: scroll;
            justify-content: space-around;
            flex-direction: row;
            flex: 1; 
            height: 345px;
            width: 315px;
            gap: 5px;
        }
        .container::-webkit-scrollbar {
            display:none
        }
        .boxMusic {
            display: flex;
            flex-direction: column;
            background: #fff;
            width: 48%;
            height: 65%;
            cursor: pointer;
        }
        .boxMusic__img { 
            width: 100%;
            height: 70%;
            border-radius: 10px;
        }
        .boxMusic__text { 
            width: 100%; 
            height: 20%;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            padding: 0 5px; 
        }
        .boxMusic__text p {
            text-transform: capitalize;
            font-weight: 600;
        }
        .boxMusic__text p small {
            text-transform: capitalize;
            font-weight: 480;
            color: #4F4F4F;
        }
        `
    render() {
        return html`
            <div class=${this.container}>
                ${this.dataMusic.map(musicItem => html`
                <div class="boxMusic">
                    <img src=${musicItem.imgSrc} class="boxMusic__img" />
                    <div class="boxMusic__text">
                        <p class="${this.textSongClass}">${musicItem.song} <br><small class="${this.textArtistClass}">${musicItem.artist} ${musicItem.year}</small></p>
                    </div>
                </div>
            `)}
            </div>
        `;
    }

}

customElements.define("new-music", newMusic)

