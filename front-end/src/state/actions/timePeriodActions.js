import * as types from './actionTypes';

export const updateDaysAhead = (daysAhead) => ({
    type: types.UPDATE_DAYS_AHEAD,
    daysAhead
});