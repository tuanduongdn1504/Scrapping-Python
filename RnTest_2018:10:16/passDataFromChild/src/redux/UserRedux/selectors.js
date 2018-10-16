import { createSelector } from 'reselect';
import _ from 'lodash';

const getLiveModeCategories = state => state.user.liveModeCategories;

export const liveModeCategorySelector = createSelector([getLiveModeCategories], list => list);

export default {};
