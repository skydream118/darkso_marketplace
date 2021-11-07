
// export type STATResult = {
//   tvolumn:number
//   tsale:number
//   aprice:number
// }

export const get_stat = async (): Promise<T> => {
    // const { data } = await fetch(url)
    // return data    
    const result: STATResult
	result.tvolumn = 100
	result.tsale = 50
	result.aprice = 300
	return result;
}

