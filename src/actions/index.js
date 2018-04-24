// Action creator are functions that return actions; libraryId is an action creator

import {ACTIONS} from './actionTypes';

export const selectLibrary = libraryId => {
  return {
    type: ACTIONS.SELECT_LIBRARY,
    payload: libraryId,
  };
};

export const ACTION_TYPES = ACTIONS;
