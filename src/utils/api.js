
import axios from 'axios';

export const submitLoanDetails = (details) => {
    return axios.post('/api/submitLoanDetails', details);
};
