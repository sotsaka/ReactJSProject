import '../styles/Header.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home"
import Contact from "./Contact"
import RendezVous from "./RendezVous"
import Services from "./Services"

const elements = {
    "/home": { "name": "Home", "component" : <Home />},
    "/contact" : { "name": "Contact", "component" : <Contact />},
    "/rdv" : { "name": "RDV/Devis", "component" : <RendezVous />},
    "/services" : { "name": "Services", "component" : <Services />}, 
}
function Header() {
    
    return (
        <div className="header">
            {Object.keys(elements).map(function(key){
                return <Link key={key} to={key} className="HeaderItem" onClick={changeButton}>{elements[key]["name"]} </Link>;
            })}
        </div>
        )
}

function RouteH() {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate replace to="/home" />} />*/}
            <Route path="/" element={<Home />} />
            {Object.keys(elements).map(function(key){
                return <Route key={key} path={key} element={elements[key]["component"]} />;
            })}
        </Routes>
    )
}

function changeButton(event){
    let tabs = document.getElementsByClassName("HeaderItem");
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].style.backgroundColor !== getComputedStyle(document.body).getPropertyValue('--color-background-header')){
            tabs[i].style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--color-background-header');
            tabs[i].style.color = getComputedStyle(document.body).getPropertyValue('--color-backfont-header');
        }
      }
    event.target.style.backgroundColor = "#ffd900";
    event.target.style.color = "#000000";
    }
console.log(document.body.clientHeight);
export { Header, RouteH }