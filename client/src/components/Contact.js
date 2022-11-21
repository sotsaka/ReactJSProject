import '../styles/Contact.css';
import map from "../maps.png";
import Title from "./Title"

function Contact() {
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
                  <tr className="ContactWayItemRow"><td className="ContactWayItemCol">Telephone: </td><td className="ContactWayItemCol"> (+33))6 00 00 00 00</td></tr>
                  <tr className="ContactWayItemRow"><td className="ContactWayItemCol">Email: </td><td className="ContactWayItemCol"> jean-michel.dupont@gmail.com</td></tr>
                  <tr className="ContactWayItemRow"><td className="ContactWayItemCol">Adresse: </td><td className="ContactWayItemCol">3 rue des champs élysés, 92000 Paris</td></tr>

                </tbody>
              </table>
            </div>
            <div className="ContactHour">
              <p className="ContactHourTitle">Quand Contacter ?</p>
              <table className="ContactHourTable">
                <tbody>
                  <tr className="ContactHourItemRow"><td className="ContactHourItemCol">Lundi: </td><td className="ContactHourItemCol"> 13h00 - 16h00</td></tr>
                  <tr className="ContactHourItemRow"><td className="ContactHourItemCol">Mardi: </td><td className="ContactHourItemCol"> 13h00 - 16h00</td></tr>
                  <tr className="ContactHourItemRow"><td className="ContactHourItemCol">Mercredi: </td><td className="ContactHourItemCol"> 13h00 - 16h00</td></tr>
                  <tr className="ContactHourItemRow"><td className="ContactHourItemCol">Jeudi: </td><td className="ContactHourItemCol"> 13h00 - 16h00</td></tr>
                  <tr className="ContactHourItemRow"><td className="ContactHourItemCol">Vendredi: </td><td className="ContactHourItemCol"> 13h00 - 16h00</td></tr>
                  <tr className="ContactHourItemRow"><td className="ContactHourItemCol">Samedi: </td><td className="ContactHourItemCol"> 13h00 - 16h00</td></tr>
                  <tr className="ContactHourItemRow"><td className="ContactHourItemCol">Dimanche: </td><td className="ContactHourItemCol"> 13h00 - 16h00</td></tr>
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
              <p className="footerContactWayTitle">Comment footerContacter ?</p>
              <table className="footerContactWayTable">
                <tbody>
                  <tr className="footerContactWayItemRow"><td className="footerContactWayItemCol">Telephone: </td><td className="footerContactWayItemCol"> (+33))6 00 00 00 00</td></tr>
                  <tr className="footerContactWayItemRow"><td className="footerContactWayItemCol">Email: </td><td className="footerContactWayItemCol"> jean-michel.dupont@gmail.com</td></tr>
                  <tr className="footerContactWayItemRow"><td className="footerContactWayItemCol">Adresse: </td><td className="footerContactWayItemCol">3 rue des champs élysés, 92000 Paris</td></tr>

                </tbody>
              </table>
            </div>
            <div className="footerContactHour">
              <p className="footerContactHourTitle">Quand footerContacter ?</p>
              <table className="footerContactHourTable">
                <tbody>
                  <tr className="footerContactHourItemRow"><td className="footerContactHourItemCol">Lundi: </td><td className="footerContactHourItemCol"> 13h00 - 16h00</td></tr>
                  <tr className="footerContactHourItemRow"><td className="footerContactHourItemCol">Mardi: </td><td className="footerContactHourItemCol"> 13h00 - 16h00</td></tr>
                  <tr className="footerContactHourItemRow"><td className="footerContactHourItemCol">Mercredi: </td><td className="footerContactHourItemCol"> 13h00 - 16h00</td></tr>
                  <tr className="footerContactHourItemRow"><td className="footerContactHourItemCol">Jeudi: </td><td className="footerContactHourItemCol"> 13h00 - 16h00</td></tr>
                  <tr className="footerContactHourItemRow"><td className="footerContactHourItemCol">Vendredi: </td><td className="footerContactHourItemCol"> 13h00 - 16h00</td></tr>
                  <tr className="footerContactHourItemRow"><td className="footerContactHourItemCol">Samedi: </td><td className="footerContactHourItemCol"> 13h00 - 16h00</td></tr>
                  <tr className="footerContactHourItemRow"><td className="footerContactHourItemCol">Dimanche: </td><td className="footerContactHourItemCol"> 13h00 - 16h00</td></tr>
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
  export default Contact;

  