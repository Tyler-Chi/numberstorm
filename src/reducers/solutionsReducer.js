import merge from 'lodash/merge';

export default (oldState = [], action) => {

    Object.freeze(oldState);

    switch (action.type) {

        case 'RECEIVE_SOLUTIONS':

            return action.payload;

        default:
            return oldState;


    }

};