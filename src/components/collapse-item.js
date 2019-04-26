import { LitElement, html, css } from 'lit-element';

const collapseStyle = css`
    :host {
      width: 100%;
    }
    .collapse *{
      box-sizing: border-box;
    }
    .collapse {
      height: 0;
      width: 100%;
      overflow: hidden;
      transition: height .25s;
    }
    .collapse[open] {
      height: 117px;
    }
    .collapse-wrapper {
      display: block;
      width: 100%;
      list-style-type: none;
    }
    .collapse-content {
      background-color: rgba(0,0,0,.04);
      border-top: 1px solid rgba(0,0,0,.08);
      width: 100%;
      padding: 16px;
      text-align: left;
    }
    .collapse-list {
      list-style-type: none;
      width: 100%;
      margin: 0;
      padding: 0;
    }
    .collapse-row {
      display: flex;
      width: 100%;
      padding: 8px 0;
    }
    .collapse-list__label {
      display: inline-block;
      width: 30%;
    }
    .collapse-list__text {
      display: flex;
      align-items: center;
      padding-left: 1rem;
      text-align: left;
      width: 70%;
    }
    .magnitude-0 {
      color: green;
      text-shadow: 1px 1px 2px black;
    }
    .magnitude-1 {
      color: yellow;
      text-shadow: 1px 1px 2px black;
    }
    .magnitude-2 {
      color: orange;
      text-shadow: 1px 1px 1px rgba(0,0,0,.8);
    }
    .magnitude-3 {
      color: red;
      text-shadow: 1px 1px 2px rgba(0,0,0,.5);
    }
  `;

class CollapseItem extends LitElement {
  static get properties() {
    return {
      data: { type: Object },
      isOpen: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.isOpen = false;
  }

  render() {
    return html`
      <style>${collapseStyle}</style>
      <div class="collapse" ?open="${this.isOpen}">
        <div class="collapse-wrapper">
          <div class="collapse-content">
            <ul class="collapse-list">
              <li class="collapse-row">
                <span class="collapse-list__label">Magnitude</span>
                <span class="collapse-list__text magnitude-${this.data.magnitude}">
                  ${this.data.magnitudeTxt}
                </span>
              </li>
              <li class="collapse-row">
                <span class="collapse-list__label">Type</span>
                <span class="collapse-list__text">${this.data.type}</span>
              </li>
              <li class="collapse-row">
                <span class="collapse-list__label">From</span>
                <span class="collapse-list__text">${this.data.from}</span>
              </li>
              <li class="collapse-row">
                <span class="collapse-list__label">To</span>
                <span class="collapse-list__text">${this.data.to}</span>
              </li>
              <li class="collapse-row">
                <span class="collapse-list__label">Traffic Delay</span>
                <span class="collapse-list__text">${this.data.delay} sec</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  toggle() {
    const collapse = this.shadowRoot.querySelector('.collapse');
    const collapseWrapper = this.shadowRoot.querySelector('.collapse-wrapper');

    collapse.style.height = collapse.clientHeight ? 0
      : `${collapseWrapper.clientHeight}px`;
  }
}

customElements.define('collapse-item', CollapseItem);
