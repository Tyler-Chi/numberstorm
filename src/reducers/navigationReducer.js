export default (oldState = "", action) => {

    Object.freeze(oldState);

    switch (action.type){

        case 'NAVIGATION':

            return action.payload;

        default:
            return oldState;
    }
};