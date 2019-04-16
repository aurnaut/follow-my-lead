import { entriesRef } from '../../firebase';
import { FETCH_DATA } from './types';

export const addEntry = newEntry => async dispatch => {
  entriesRef.push().set(newEntry);
};

export const fetchEntries = () => async dispatch => {
  entriesRef.on('value', snapshot => {
    dispatch({
      type: FETCH_DATA,
      payload: snapshot.val()
    });
  });
};
