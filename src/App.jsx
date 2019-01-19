import React, { Component } from 'react';
import logo from './nfc.png';
import './App.css';
import PatientInformationBox from './PatientInformationBox';

class App extends Component {

  constructor(props) {
    super(props);

    this.scanPatient = this.scanPatient.bind(this);
    this.cleanPatient = this.cleanPatient.bind(this);    
  }

  scanPatient() {
    this.setState({ patientId: "49014922J" });
  }

  cleanPatient() {
    this.setState({ patientId: undefined });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state || !this.state.patientId
            ?
            <div>
              <img src={logo}
                onClick={this.scanPatient}
                className="App-scan"
                alt="Scan patient" />
              <p>
                Scan patient device...
              </p>
              <label
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                SUPPORT
              </label>
            </div>
            : <div>
              <PatientInformationBox patientId={this.state.patientId}>
              </PatientInformationBox>

              <button onClick={this.cleanPatient}>Scan another patient</button>
            </div>}
        </header>
      </div>
    );
  }
}

export default App;
