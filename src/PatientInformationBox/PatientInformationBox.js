import React from "react";
import template from "./PatientInformationBox.jsx";
const patientDataService = require('../data/patient.data.service');

class PatientInformationBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patientId: this.props.patientId,
      patient: undefined
    };

    this.getPatient = this.getPatient.bind(this);
    this.getPatient(this.props.patientId);
  }

  getPatient(patientId) {
    return patientDataService.getPatient(patientId)
      .then(patient => this.setState(patient));
  }

  render() {
    return template.call(this);
  }
}

export default PatientInformationBox;
