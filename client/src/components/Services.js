import '../styles/Services.css';
function Services() {
  const servicesElts = {
    "service1": "service1",
    "service2": "service2",
    "service3": "service3",
    "service4": "service4",
    "service5": "service5",
    "service6": "service6",
    "service7": "service7",
    "service8": "service8",
    "service9": "service9",
    "service10": "service10",
    "service11": "service11",
    "service12": "service12",
    "service13": "service13",
    "service14": "service14"
  }
  return (
  <div className="Services">
    <h1 className="Services">Services </h1>
    <div className="ServicesWrapper">
      {Object.keys(servicesElts).map(function(key){
          return (
            <div key={servicesElts[key]} className="ServicesItem">
              {servicesElts[key]}
            </div>
          )
  
      })}
    </div>
  </div>

  );
}
export default Services;