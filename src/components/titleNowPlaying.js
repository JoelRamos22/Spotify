import { LitElement, css, html } from "lit";

export class nowPlaying extends LitElement {
    constructor(){
        super()
    }
    static styles = css`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        :host {
            display:flex; 
            align-items: center;
            justify-content: center; 
        }
    `
    render() {
        return html`
            <h3 class="title">
                Now Playing
            </h3>
        ` 
    }
}

customElements.define("now-playing", nowPlaying)