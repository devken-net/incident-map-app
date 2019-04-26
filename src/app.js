import { LitElement, html, css } from 'lit-element';
import { getIncidents } from './services/incidents-api';
import './components/map';
import './components/side-nav';

class IncidentMap extends LitElement {
  static get properties() {
    return {
      incidents: { type: Object },
    };
  }

  firstUpdated() {
    getIncidents()
      .then((incidents) => {
        this.incidents = incidents.slice();
      })
      .then(() => this.setHeartBeat());
  }

  static get styles() {
    return [
      css`
        * {
          box-sizing: border-box;
        }
        #app {
          text-align: left;
          min-height: 100vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: #1a2b42;
          overflow: hidden;
        }

        .side-bar {
          display: flex;
          flex-grow: 1;
          width: 30vw;
          min-wdth: 300px;
          max-wdth: 500px;
          align-self: flex-start;
          max-width: 500px;
        }

        .map {
          display: flex;
          flex-grow: 2;
          width: 70vw;
          align-self: flex-start;
        }
      `,
    ];
  }

  render() {
    return html`
      <div id="app">
        <section class="side-bar">
          <side-nav .items="${this.incidents}"></side-nav>
        </section>
        <section class="map">
          <custom-map .incidents="${this.incidents}"></custom-map>
        </section>
      </div>
    `;
  }

  setHeartBeat() {
    setInterval(() => {
      getIncidents().then((incidents) => {
        this.incidents = incidents.slice();
      });
    }, 120000);
  }
}

customElements.define('incident-map', IncidentMap);
