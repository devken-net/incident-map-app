import { LitElement, html, css } from 'lit-element';

const mapStyle = css`
  :host {
    background: rgba(0,0,0,0.03);
    height: 100vh;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    position: absolute;
  }
  :host, * {
    box-sizing: border-box;
  }
  .map-holder {
    width: 1px;
  }
  #map {
    height: 100vh;
    width: auto;
  }
  .location-holder {
    position: absolute;
    z-index: 1000;
  }
  .location-wrapper {
    position: relative;
    z-index: 1100;
  }
  .incident {
    background-color: red;
    border-radius: 100%;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: -10px;
    left: -10px;
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

class CustomMap extends LitElement {
  static get properties() {
    return {
      incidents: { type: Object },
    };
  }

  firstUpdated() {
    setTimeout(() => {
      this.setMapSize();
    }, 300);
  }

  render() {
    return html`
      <style>${mapStyle}</style>
      <div class="location-holder">
        <div class="location-wrapper">
          ${this.renderIncidents(this.incidents)}
        </div>
      </div>
      <div class="map-holder">
          <img id="map"
            src="../assets/img/berlin_map.png" 
            loading="lazy" alt="Berlin Map"/>
      </div>
    `;
  }
  /* eslint-disable */
  renderIncidents(incidents) {
    if(incidents) {
      return html`
        ${incidents.map((incident) => {
          const { x, y } = this.coordToPixel(incident.point.x, incident.point.y);
          return html`
          <div class="incident magnitude-${incident.magnitude}" 
            style="top:${x}px;left:${y}px;">
          </div>
          `;
        })}
        `;
    }
    return html``;
  }
  /* eslint-enable */

  /*
  * I don't really know what I'm doing here. hahaha...
  * Just guesing that there migth be a computation to compute
  * coordinates to px but I dont have enough data.
  */
  coordToPixel(x, y) {
    const xsize = 0.0222222222;
    const ysize = -0.0222222222;
    const xOff = 0;
    const yOff = 64;
    const px = (x - xOff) / xsize;
    const py = (y - yOff) / ysize;
    return { x: px, y: py };
  }


  setMapSize() {
    const map = this.shadowRoot.querySelector('#map');
    const mapHeigth = map.clientHeight;
    const mapWidth = map.clientWidth;
    const mapHolder = this.shadowRoot.querySelector('.map-holder');
    const locationHolder = this.shadowRoot.querySelector('.location-holder');
    const locationWrapper = this.shadowRoot.querySelector('.location-wrapper');
    const height = `${mapHeigth}px`;
    const width = `${mapWidth}px`;

    if (mapHeigth) {
      mapHolder.style.width = width;
      mapHolder.style.height = height;
      locationHolder.style.width = width;
      locationHolder.style.height = height;
      locationWrapper.style.width = width;
      locationWrapper.style.height = height;
    }
  }
}

customElements.define('custom-map', CustomMap);
