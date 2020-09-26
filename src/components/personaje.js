import React from 'react';

const Personaje = ({ personaje }) => {
  return ( 
    <div>
      <div className="container-fluid" >
          <div class="card" style={{width: "18rem;"}}>
          <img src={personaje.image} alt="" className="card-img img-fluid RedondeoIzquierdo Redondeo card-img-top"/>
          <div class="card-body" style={{backgroundColor:"lightgray"}}>
            <h5 class="card-title"> {personaje.name} </h5>
            <hr/>
            <div className="row">
                <p className="col-md-6"><strong>Ubicacion:</strong>  {personaje.location.name}</p>
                <p className="col-md-6"><strong>Origen:</strong> {personaje.origin.name}</p>
                
              </div>  
              <div className="row">
              <p className="col-md-6"><strong>Especie:</strong> {personaje.species}</p>
              <p className="col-md-6"><strong>Sexo:</strong> {personaje.gender}</p>
              </div> 
              <div className="row">
              <p className="col-md-6"><strong>Tipo:</strong> {personaje.type}</p>
                <p className="col-md-6"><strong>Fecha de creacion:</strong> {personaje.created}</p>
              </div> 
          </div>
        </div>
      </div>
    </div>
  )
};

export default Personaje

