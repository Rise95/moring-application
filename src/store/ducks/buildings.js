// TYPES
export const Types = {
    SET_BUILDINGS_DATA: '@buildings/SET_BUILDINGS_DATA',
    SET_BUILDINGS_TOTAL: '@buildings/SET_BUILDINGS_TOTAL',
    SET_BUILDINGS_PAGE: '@buildings/SET_BUILDINGS_PAGE',
    SET_BUILDINGS_TOTAL_PAGES: '@buildings/SET_BUILDINGS_TOTAL_PAGES',
}

// REDUCERS
const INITIAL_STATE = {
    buildingsData: [],
    buildingsPage: 1,
    buildingsTotal: 0,
    buildingsTotalPages: 1 
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.SET_BUILDINGS_DATA:
            return { ...state, buildingsData: JSON.parse(JSON.stringify(action.payload)) } 
        case Types.SET_BUILDINGS_PAGE:
            return { ...state, buildingsPage: action.payload } 
        case Types.SET_BUILDINGS_TOTAL:
            return { ...state, buildingsTotal: action.payload } 
        case Types.SET_BUILDINGS_TOTAL_PAGES:
            return { ...state, buildingsTotalPages: action.payload } 
        default:
            return state;
    }
};
  