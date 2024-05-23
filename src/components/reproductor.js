import {LitElement, css, html} from 'lit';

export class reproductorMusic extends LitElement {
    static styles = css`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .body{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .UserOptions{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .songName{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .mediaOptions{
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-left: 3vh;
            padding-right: 3vh;
            height: 25vh;
            justify-content: space-around;
        }
        
        .musicTime{
            display: flex;
            justify-content: space-between;

        }
        .progressMusic{
            display: flex;
            justify-content: center;
        }
        .progressMusic progress{
            width: 100%;
            height: 0.5vh;
            background-color: #ddd;
        }
        progress::-webkit-progress-value{
            background-color: #27AE60;
        }
        progress::-webkit-progress-bar {

            background-color: #ececec;
        }
        .mediaControl{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        .volumeControl{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .volumeControl progress{
            width: 50%;
            height: 0.3vh;
            background-color: #ddd;
        }
        .deviceOutput{
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: center;
        }
        .deviceOutput div{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            background: #6fcf9752;
            width: 18vh;
            border-radius: 1vh;
        }
        .SongImage{
            display: flex;
            justify-content: center
        }`;
    render() {
        return html`
            <body class="body">
            <div class="SongInfo">
            <div class="SongImage">
                <img src="src/assets/image.png" alt="">
            </div>
            <div class="UserOptions">
                <div>
                <box-icon name='plus' color='#9bd8b5'></box-icon>
                </div>
                <div class="songName">
                <h3>
                    Money Machine
                </h3>
                <h6>
                    1000 Gecks
                </h6>
                </div>
                <div>
                <box-icon name='heart' color='#9bd8b5' ></box-icon>
                </div>
            </div>
            </div>
            <div class="mediaOptions">
            <div class="musicTimeline">
                <div class="musicTime">
                <p>2:14</p>
                <p>-1:15</p>
                </div>
                <div class="progressMusic">
                <progress class="progress" value="214" max="329"></progress>
                </div>
                </div>
            <div class="mediaControl">
                <box-icon name='shuffle' flip='vertical' color='#828282' ></box-icon>
                <box-icon name='rewind' flip='vertical' color='#27ae60' size='lg' ></box-icon>
                <box-icon name='play-circle' color='#27ae60' size='lg'></box-icon>
                <box-icon name='rewind' rotate='180' color='#27ae60' size='lg'></box-icon>
                <box-icon name='repeat' color='#828282'></box-icon>
            </div>
            <div class="volumeControl">
                <box-icon name='volume-low' color='#828282'></box-icon>
                <progress class="progress" value="214" max="329"></progress>
                <box-icon name='volume-full' color='#828282' ></box-icon>
            </div>
            <div class="deviceOutput">
                <div><box-icon name='headphone' color='#828282' ></box-icon>
                </div>
            </div>
            </div>
        </body>
        `;
    }
}
customElements.define('my-reproductor', reproductorMusic);