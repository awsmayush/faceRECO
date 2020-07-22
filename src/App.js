import React, { Component } from 'react';
import './App.css';
import Navigation from './containers/Navigation/Navigation';
import ImageLink from './containers/ImageLink/ImageLink';
import FaceRec from './containers/FaceRec/FaceRec';
import Logo from './containers/Logo/Logo';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '774de783fc334033954b99b247f118b0'
 });


const particlesOpen= {
  particles:{
    number:{
      value:300,
      density:{
        enable: true,
        value_area: 800
        }
    }
  },
  "interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    }
}
}

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageURL:'',
    }
  }
  onInputChange=(event)=>{
    this.setState({input: event.target.value});
  }
  onButtonSubmit=()=>{
   /* this.setState({imageURL: this.state.input});
    app.models.initModel({id: Clarifai.FACE_DETECT_MODEL, version: "774de783fc334033954b99b247f118b"})
      .then(generalModel => {
        return generalModel.predict(this.state.input);
      })
      .then(response => {
         console.log(response.output[0].data.region[0].region_info.boundary );
      })*/
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(

      function(response) {
     
     console.log(response.outputs[0].data.region[0].region_info.boundary_box);
     
      },
     
      function(err) {
     
      // there was an error
     
      }
    );
  }

  render()
  {
          return (
            <div className="App">
              <Particles className='particles'
                params={particlesOpen} />
            <Navigation/>
            <Logo/>
            <ImageLink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRec imageURL={this.state.imageURL}/>
            </div>
          );
}
}

export default App;
