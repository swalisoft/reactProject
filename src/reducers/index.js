const reducer = (state, action) =>{
  switch(action.type){
    case 'SET_FAVORITE':
      for(let e of state.myList){
        if(e.id == action.payload.id){
          return state
        }  
      }

      return{
        ...state,
        myList: [...state.myList, action.payload],
      }
    case 'DELETE_FAVORITE':
      return{
        ...state,
        myList: state.myList.filter(item=> item.id !== action.payload)
      }
    case 'LOGIN_REQUEST':
      return{
        ...state,
        user:action.payload,
      }
    case 'LOGOUT_REQUEST':
      return{
        ...state,
        user:action.payload,
      }
    case 'ADD_USER':
      return{
        ...state,
        user:action.payload,
      }
    case 'PLAYER_VIDEO':
      return{
        ...state,
        playing: state.trends.find(item => item.id === parseInt(action.payload)) || state.originals.find(item => item.id === parseInt(action.payload)) || {}
      }
    case 'FIND_VIDEO':
      return{
        ...state,
        result: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;