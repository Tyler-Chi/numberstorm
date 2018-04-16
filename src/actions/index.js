import axios from 'axios';

export const navigate = (string) => dispatch => {
    console.log('in the navigate action now');
    dispatch({type: 'NAVIGATION', payload: string});
};

export const fetchSolutions = () => async dispatch => {
    const res = await axios.get('https://mathology.herokuapp.com/api/solutions');
    dispatch({type: 'RECEIVE_SOLUTIONS', payload: res.data});
};