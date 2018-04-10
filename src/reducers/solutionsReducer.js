import merge from 'lodash/merge';

export default (oldState = {}, action) => {

    Object.freeze(oldState);

    let newState = Object.assign({}, oldState);

    switch (action.type) {

        default:
            return oldState;


    }

};