import { LitElement, html, css } from 'lit-element';
import './collapse-item';

const itemStyle = css`
  :host {
    width: 100%;
  }
  .list-item {
    border-bottom: 1px solid rgba(0,0,0,.08);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0;
    position: relative;
    overflow: hidden;
  }
  .list-item:hover, 
  .list-item:focus {
    background-color: rgba(0,0,0,.03);
    outline: 0;
  }
  .list-item * {
    box-sizing: border-box;
    pointer-events: none;
  }
  .list-item__text {
    padding:16px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
  .list--two-line .list-item__text {
    align-self: flex-start;
  }
  .list-item__primary-text {
    display: block;
    font-weight: 700;
    line-height: normal;
    margin-top: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .list-item__secondary-text {
    color: rgba(0,0,0,.65);
    display: block;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 0;
  }
  .magnitude {
    border-radius: 1rem;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    display: inline-block;
    height: 0.8rem;
    width: 0.8rem;
    vertical-align: middle;
  }
  .magnitude-0 {
    background-color: green;
  }
  .magnitude-1 {
    background-color: yellow;
  }
  .magnitude-2 {
    background-color: orange;
  }
  .magnitude-3 {
    background-color: red;
  }
`;

class ListItem extends LitElement {
  static get properties() {
    return {
      item: { type: Object },
    };
  }

  renderSkeleton() {
    return html`
      <style>${itemStyle}</style>
      <div class="list-item" tabindex="0" @click="${this.toggle}">
        <div class="list-item__text">
          <span class="list-item__primary-text">loading...</span>
        </div>
      </div>
    `;
  }

  renderItem() {
    return html`
      <style>${itemStyle}</style>
      <div class="list-item" tabindex="0" @click="${this.toggle}">
        <div class="list-item__text">
          <span class="list-item__primary-text">${this.item.from}</span>
          <span class="list-item__secondary-text">
            <span class="magnitude magnitude-${this.item.magnitude}"></span>
            ${this.item.type} - ${this.item.delay} sec
          </span>
        </div>
        <collapse-item .data=${this.item}></collapse-item>
      </div>
    `;
  }

  render() {
    if (this.item) {
      return this.renderItem();
    }
    return this.renderSkeleton();
  }

  toggle(e) {
    const collapse = e.target.querySelector('collapse-item');

    if (collapse) {
      collapse.toggle();
    }
  }
}

customElements.define('list-item', ListItem);
