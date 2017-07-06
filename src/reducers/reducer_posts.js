import _ from 'lodash';
//NOTE BELOW LOADS ACTIONS and loads FETCH_POST AND FETCH_POSTS NO .js doucment is referenced...
//THIS SYNTAX LOADS THE INDEX.js
import {FETCH_POSTS} from '../actions';
import {FETCH_POST, DELETE_POST} from '../actions';
//import {CREATE_POST} from '../actions';

//HERE NOTE DEFAULT STATE IS TYPED AS AN OBECT IN THE DEFINING function
//MEANING ALL THE INITIAL PAYLOAD OF FETCH_POSTS
export default function (state = {}, action) {

switch(action.type) {

  case FETCH_POST:
      //BELOW IS THE ES5 VERSION TO GIVE A CLEARER VISION OF WHAT THE
      //ES SYNTAX BELOW THIS IS DOING//
          //const post = action.payload.data;
          //const newState = {...state};
          //newState[post.id] = post;
          //return {newState};
      //ES 6 VERSION!!
          return {...state, [action.payload.data.id]:action.payload.data}


case FETCH_POSTS:
    //console.log(action.paload.data) // [post1, post2, ect] But must be converted to an object as {id: postobj}
    return _.mapKeys (action.payload.data, 'id');

    case DELETE_POST:
    //_.omit is a lodash function that reaches for the current post id on an object and deletes it
    //it deletes the current state and returns a new state witout the targeted Post for deletion
           return _.omit(state, action.payload);

    //Syntax for deleting from an array is BELOW
    //return _.reject(state, post => post.id === action.payload)


default:
    return state;
 }

}
