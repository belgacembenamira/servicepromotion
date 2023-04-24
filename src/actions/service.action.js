/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 14/04/2023 - 06:10:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
/**
 * @description      : Lister les services depuis le serveur API distant via Axios
 * @returns          : Redux Thunk function
 */
import axios from "axios";
import { contactConstants } from "./constante";

export const listerService = () => {
  return async (dispatch) => {
    dispatch({ type: contactConstants.GET_ALL_SERVICE_REQUESTS });
    try {
      const res = await axios.get("http://127.0.0.1:3000/service/ajouter");
      if (res.status === 200) {
        dispatch({
          type: contactConstants.GET_ALL_SERVICE_SUCCESS,
          payload: { services: res.data },
        });
      }
    } catch (error) {
      dispatch({
        type: contactConstants.GET_ALL_SERVICE_REFUSE,
        payload: { error: error.response },
      });
    }
  };
};
