import {
    GET_DETAIL, 
    GET_EDIT,
    SWITCH_SIDE_BAR
  } from "../actions/actions";
  
  const initialState = {
    //*detalles de evento
    detailsEvent:[true],
    //*switch de nav-bar
    sideBarSwitch: false,
    
  };
  
  function rootReducer(state = initialState, action) {
   
    //*__DETALLES_DE_EVENTOS
    if(action.type=== GET_DETAIL){
      return{
        ...state,
        detailsEvent: action.payload
      }
    }
    if (action.type === GET_EDIT){
      return state.detailsEvent.map((eventDetail)=>eventDetail.id === action.id?
      {...eventDetail, editing: !eventDetail.editing}: eventDetail
      )
    }


    //*__SWITCH_NAV_BAR
    if(action.type=== SWITCH_SIDE_BAR){
      return{
        sideBarSwitch: action.payload
      }
    }
  
    return state;
  }
  
  export default rootReducer;
  