/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 06/04/2023 - 23:28:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import servicereducure from './service.reducers'
import { combineReducers } from 'redux'
const routReducer = combineReducers({
    services: servicereducure
})
export default routReducer
