import "./PatientInformationBox.css";
import React from "react";
import loading from '../img/loading.gif'
import aplus from '../img/aplus.png';
function template() {
  return (
    <div>
      {this.state.patient ?
        <div className="patient-information-box">
          <img src={aplus} width="100%" alt="blood type"/>
          <h1>{this.state.patient.idType}: {this.state.patientId}</h1>
          <h2>{this.state.patient.name}</h2>
          <h3>{this.state.patient.gender} - {this.state.patient.age} {this.state.patient.ageUnit} old ({this.state.patient.birthDate})</h3>
          <hr />
          <table style={{ width: '100%', border: 0 }}>
            <tbody>
              <tr><td><h4>Weight</h4>{this.state.patient.weight}</td><td><h4>Height</h4>{this.state.patient.height}</td></tr>
            </tbody>
          </table><hr/>
          <table style={{ width: '100%', border: 0 }}>
            <tbody>
              <tr><td><h4>Arterial pressure</h4></td><td>{this.state.patient.arterialPressure.systolic} systolic</td><td>{this.state.patient.arterialPressure.diastolic} diastolic</td></tr>
            </tbody>
          </table>
          <table style={{ width: '100%', border: 0 }}>
            <tbody>
              <tr><td><h4>Arterial pressure</h4></td><td>{this.state.patient.arterialPressure.systolic} systolic</td><td>{this.state.patient.arterialPressure.diastolic} diastolic</td></tr>
            </tbody>
          </table>
          <div></div>
        </div>
        : <div>
          Patient {this.state.patientId}
          <br />
          <img src={loading}
            alt="Loading" />
          <br />
          Fetching patient data
        </div>}
    </div>
  );
};

export default template;
