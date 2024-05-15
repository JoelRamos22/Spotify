import { LitElement, css, html } from "lit";
import { newMusic } from "./newMusic";
import { titlesTopChart } from "./titleTopChart";

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
            gap: 5px;
        }
        .top-chart { grid-area: 1 / 2 / 3 / 5; }
        .new-music {
            grid-area: 3 / 2 / 8 / 5;
            }
        .div3 { grid-area: 8 / 2 / 11 / 5; }
        .div4 { grid-area: 1 / 5 / 2 / 9; }
        .div5 { grid-area: 2 / 5 / 11 / 9; }
        .div6 { grid-area: 1 / 9 / 3 / 11; }
        .div7 { grid-area: 3 / 9 / 11 / 11; }
        .div8 { grid-area: 1 / 1 / 11 / 2; }
    `
    render() {
        return html`
            <main class="main">
                <top-chart class="top-chart"></top-chart>
                <new-music class="new-music"></new-music>
            </main>
        `
    }
} 

customElements.define('grid-spotify', gridSpotify)