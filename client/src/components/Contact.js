import '../styles/Contact.css';
import React, { Component } from 'react';

import map from "../ressources/maps.png";
import Title from "./Title"
import { fetch_json } from '../utils';

class Contact extends Component {
  state = {
    contact_data: [],
    schedule_hours: []
  }
  componentDidMount() {
    fetch_json("http://localhost:3001/info/contact")
      .then(res => { this.setState({ contact_data: res }) })
      .catch(err => { console.log(err) });

    fetch_json("http://localhost:3001/info/schedule")
      .then(res => { this.setState({ schedule_hours: res }) })
      .catch(err => { console.log(err) });
  }
  render() {
    return (
      <>
        <h1 className="ContactTitle">Contact </h1>
        <div className="Contact">
          <div className="ContactWrapper">

            <div className="ContactInfo">
              <div className="ContactWay">
                <p className="ContactWayTitle">Comment Contacter ?</p>
                <table className="ContactWayTable">
                  <tbody>
                    {this.state.contact_data.map((elt) => {
                      return (<tr key={elt['type']} className="ContactWayItemRow"><td className="ContactWayItemCol">{elt['type']}: </td><td className="ContactWayItemCol"> {elt['value']}</td></tr>);

                    })}

                  </tbody>
                </table>
              </div>
              <div className="ContactHour">
                <p className="ContactHourTitle">Quand Contacter ?</p>
                <table className="ContactHourTable">
                  <tbody>
                    {this.state.schedule_hours.map((elt) => {
                      return (<tr key={elt['day']} className="ContactHourItemRow"><td className="ContactHourItemCol">{elt['day']} : </td><td className="ContactHourItemCol">{elt['hours']}</td></tr>);
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="map">
              {/*<iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.3639328479766846%2C49.18506427094758%2C-0.3610414266586304%2C49.18711890820479&amp;layer=mapnik"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=19/49.18609/-0.36249">Afficher une carte plus grande</a></small>*/}
              <img src={map} className="map" alt="map" />
            </div>
          </div>

          <div className="footerContact">
            <div className="footerContactInfo">
              <div className="footerContactWay">
                <p className="footerContactWayTitle">Comment Contacter ?</p>
                <table className="footerContactWayTable">
                  <tbody>
                    {this.state.contact_data.map((elt) => {
                      return (<tr key={elt['type']} className="ContactWayItemRow"><td className="ContactWayItemCol">{elt['type']}: </td><td className="ContactWayItemCol"> {elt['value']}</td></tr>);
                    })}
                  </tbody>
                </table>
              </div>
              <div className="footerContactHour">
                <p className="footerContactHourTitle">Quand Contacter ?</p>
                <table className="footerContactHourTable">
                  <tbody>
                    {this.state.schedule_hours.map((elt) => {
                      return (<tr key={elt['day']} className="ContactHourItemRow"><td className="ContactHourItemCol">{elt['day']} : </td><td className="ContactHourItemCol">{elt['hours']}</td></tr>);
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="footerTitle">
            <Title />
          </div>
        </div>
      </>

    );
  }
}
export default Contact;

