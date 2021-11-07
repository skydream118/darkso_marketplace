
export type STATResult = {
  tvolumn:number
  tsale:number
  aprice:number
}

export const get_stat = async (): Promise<STATResult> => {
    // const { data } = await fetch(url)
    // return data    
  var result: STATResult = {tvolumn:100,tsale:50,aprice:300}
	// result.tvolumn = 100
	// result.tsale = 50
	// result.aprice = 300
	return result;
}

