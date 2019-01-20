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

    this.getPatient(this.props.patientId)
      .then(patient => this.setState({ patientId: this.props.patientId, patient: patient.data }));
  }

  getPatient(patientId) {
    return patientDataService.getPatient(patientId);
  }

  render() {
    return template.call(this);
  }
}

export default PatientInformationBox;
