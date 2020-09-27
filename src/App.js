import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Personaje from './components/personaje'
import {Modal, ModalBody, ModalHeader, ModalFooter,Button} from 'reactstrap';

class App extends Component {
  
  state = {
    personajes: [],
    modalDetalle: false,
    personajeSelect : {
      id:'',
      name:'',
      status:'',
      species:'',
      type:'',
      gender:'',
      origin:'',
      location:'',
      image:'',
      episode:'',
      url:'',
      created:''  
      },
      nombre:''  
  }

  handleNombreChange(e) {
    this.setState({nombre: e.target.value});
}

  seleccionarPersonaje(personajeId){
    fetch("https://rickandmortyapi.com/api/character/"+personajeId)
    .then(res => res.json())
    .then((data) => {
      this.setState({personajeSelect: data})
      this.setState({modalDetalle:true})
    })
    .catch(console.log)

  }

  cerrarModal(){
    this.setState({modalDetalle:false})
  }

  selectFiltro(){
    fetch("https://rickandmortyapi.com/api/character/?name="+this.state.nombre)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.setState({ personajes: data.results })
    })
    .catch(console.log)
  }
  
  componentDidMount(){
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then((data) => {
      this.setState({ personajes: data.results })
    })
    .catch(console.log)
  }
  render(){ 
    return (
      <div>
        <div className="cabecera">
          <center><h1>Rick and Morty</h1></center>
        </div>
            <div className="col-md-6 col-sm-10 form-inline">
            <input type="text" className="form-control mb-2" name="nombre" value={this.state.nombre}
              onChange={(e) => this.handleNombreChange(e)} placeholder="Nombre"/>
           
            <button className="btn btn-primary form-control mb-2" onClick={()=>this.selectFiltro()}>Buscar</button>
            </div>
         <br/>
          <div className="container-fluid row" >
          {this.state.personajes.map((personaje) => ( 
             <div className="col-md-6 col-sm-12" > 
            <div className="card mb-3  RedondeoIzquierdo Redondeo" style={{border: "none"}} key={personaje.id}>
              <div className="row no-gutters">
                <div className="col-md-4 ">
                  <img src={personaje.image} alt="" className="card-img img-fluid RedondeoIzquierdo"/>
                </div>
                <div className="col-md-8 Redondeo" style={{backgroundColor:"lightgray"}}>
                  <div className="card-body">
                  <button  onClick={()=>this.seleccionarPersonaje(personaje.id)} className="btn btn-outline-secondary card-title">Nombre: {personaje.name}</button>
                  <p className="card-text lead"><strong>Estado:</strong><br/>{personaje.status}</p> 
                  <p className="card-text lead"><strong>Especie:</strong><br/>{personaje.species}</p> 
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
          </div>

        <Modal isOpen={this.state.modalDetalle}>
        <ModalHeader className="d-flex justify-content-between align-items-center">
          
        Personaje
        <button type="button" className="close" style={{float:"right"}} onClick={()=>this.cerrarModal()} data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </ModalHeader>
        <ModalBody>
        <Personaje personaje={this.state.personajeSelect} />        
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
      </div>
    );
  }
}

export default App;
