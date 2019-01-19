import "./PatientInformationBox.css";
import React from "react";
import loading from '../loading.gif'
function template() {
  return (
    <div>
      {this.state.patient ?
        <div className="patient-information-box">
          <h1>Patient Id: {this.state.patientId}</h1>
          <h2>{this.state.patient.name}</h2>
          <h3>{this.state.patient.gender} - {this.state.patient.age} years old</h3>
        </div>
        : <div>
          Patient {this.state.patientId}
          <br/>
            <img src={loading}
                 alt="Loading"/>
                 <br/>
            Fetching patient data
        </div>}
    </div>
  );
};

export default template;
