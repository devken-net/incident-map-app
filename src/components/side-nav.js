import { LitElement, html, css } from 'lit-element';
import './list-item';

const sidebarStyle = css`
  :host {
    height: 100vh;
    max-width: 500px;
    min-width: 300px;
    overflow-y: scroll;
  }
  * {
    box-sizing: border-box;
  }
  .list {
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: .009375em;
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
    list-style-type: none;
    color: rgba(0,0,0,.87);
    border-top: 1px solid rgba(0,0,0,.08);
  }
`;

class SideNav extends LitElement {
  static get properties() {
    return {
      items: { type: Object },
    };
  }

  render() {
    return html`
      <style>
        ${sidebarStyle}
      </style>
      <div class="sidebar">
        <h3>Road Incidents</h3>
        <aside id="sidebar">
          <div class="list">
            ${this.getList(this.items)}
          </div>
        </aside>
      </div>
    `;
  }

  getList(items) {
    if (items) {
      return html`
      ${items.map((item) => html`<list-item .item="${item}"><list-item>`)}
    `;
    }
    return html`<p>Loading list...</p>`;
  }
}

customElements.define('side-nav', SideNav);
