import {html} from '../helpers/html.js'

class JustComponent extends HTMLElement {

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
        Hello world from JustComponent
      </div>
    `
  }
}

customElements.define('just-component', JustComponent);
