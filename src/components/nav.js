import { LitElement, html, css } from "lit";
export class MyLeftBar extends LitElement {
    
        constructor() {
        super();
        }
    
        render() {
        return html`
            <div class="container">
                <div class="icons1">
                    <button> 
                    </button>
                </div>
                <div class="icons2"></div>
                <div class="icons3"></div>
            </div>
        `
        }
    
        static get styles() {
        return css`
            .container  {
                width: 100%;
                height: 100vh; 
            }
        `
        }
    }
    
customElements.define('my-nav', MyLeftBar); 