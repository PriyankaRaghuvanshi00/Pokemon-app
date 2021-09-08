import { FetchPokemonStarts, FetchPokemonFail,GetPokemonInfoUrl ,FetchPokemonSucces } from "./action";

const initState = {
   items: [],
   loading: false,
   error: null,
   next:null,
}

const reducer = (state = initState, action) => {
   switch (action.type) {
      case FetchPokemonStarts:
         return {
            ...state,
            loading: true,
            error: null,
         }
      case FetchPokemonFail:
         return {
            ...state,
            items: [],
            loading: false,
            error: action.payload.error,
         }
      case FetchPokemonSucces:
         return {
            ...state,
            items: action.payload.payload,
            loading: false,
            error: null,
            next:action.payload.next,
         }
      default:
         return state;
   }
}

export default reducer;