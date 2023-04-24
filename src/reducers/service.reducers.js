/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 14/04/2023 - 05:45:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
/**
    * @description      : reducer pour la gestion des services, chargement, récupération ou erreur de chargement
    * @modification     : 
**/

import { contactConstants } from "../actions/constante";

const initialServiceState = {
  services: [],
  error: null,
  loading: false
};

export default function serviceReducer(state = initialServiceState, action) {
  switch (action.type) {
    case contactConstants.GET_ALL_SERVICE_REQUESTS:
      return { ...state, loading: true };

    case contactConstants.GET_ALL_SERVICE_SUCCESS:
      return {
        ...state,
        services: action.payload.services,
        loading: false
      };

    case contactConstants.GET_ALL_SERVICE_REFUSE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };

    default:
      return state;
  }
  
}
