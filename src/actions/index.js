

export const navigate = (string) => dispatch => {
    console.log('in the navigate action now');
    dispatch({type: 'NAVIGATION', payload: string});
};