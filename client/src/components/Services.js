import '../styles/Services.css';
function Services() {
  const servicesElts = {
    "service1": "detail1",
    "service2": "detail2",
    "service3": "detail3",
    "service4": "detail4",
    "service5": "detail5",
    "service6": "detail6",
    "service7": "detail7",
    "service8": "detail8",
    "service9": "detail9",
    "service10": "detail10",
    "service11": "detail11",
    "service12": "detail12",
    "service13": "detail13",
    "service14": "detail14"
  }
  return (
  <div className="Services">
    <h1 className="Services">Services </h1>
    <div className="ServicesWrapper">
      {Object.keys(servicesElts).map(function(key){
          return (
            <div className="ServicesItem">
              {servicesElts[key]}
            </div>
          )
  
      })}
    </div>
  </div>

  );
}
export default Services;