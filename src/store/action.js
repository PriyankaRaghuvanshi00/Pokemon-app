export const FetchPokemonStarts = "FetchPokemonStart";
export const FetchPokemonFail = "FetchPokemonFail";
export const FetchPokemonSucces = "FETCHPKEMONSUCCESS";


export const fetchPokemonBegin = () => ({
   type: FetchPokemonStarts
})

export const FetchPokemonFailure = (error) => ({
   type: FetchPokemonFail,
   error: { error },
})
export const FetchPokemonSuccess = (payload,next) =>{ 
   return({
   type: FetchPokemonSucces,
   payload: { payload },
   next:{next}
})}