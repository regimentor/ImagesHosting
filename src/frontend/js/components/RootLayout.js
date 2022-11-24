import {html} from '../helpers/html.js'

class RootLayout extends HTMLElement {

  #li = [{text: 'first', id: 'first'}, {text: 'second', id: 'second'}];
  #isLoading = true;
  #shadow = null;
  
  constructor() {
    super();

    this.#shadow = this.attachShadow({mode: "open"});
    this.#shadow.innerHTML = this.template();
  }

  connectedCallback() {
    setTimeout(() => {
      this.#isLoading = false
      this.#shadow.innerHTML = this.template();
    }, 2000)
  }


  template = () => {
    if (this.#isLoading) {
      return html`
        <div class="root-layout">
          Loading...
        </div>
      `
    }

    return html`
      <div class="root-layout">
        Hello world
        <ul>
          ${this.#li.map(el => html`
            <li id="${el.id}">${el.text}</li>
          `)}
        </ul>
        <just-component></just-component>
      </div>
    `
  }
}

customElements.define('root-layout', RootLayout);
