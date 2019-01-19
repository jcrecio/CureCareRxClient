const apiSettings = require('../configuration/settings').settings.patientsApi;
const axios = require('axios');

module.exports.getPatient = function(patientId){
    return axios.get(`http://${apiSettings.url}:${apiSettings.port}/patients/${patientId}`)
        .then(response => {
            return response;
        })
        .catch(err => {
            console.error(err);
        });
}