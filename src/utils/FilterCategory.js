import {snacks} from '../data/menu.js'
    

export let snacksFilter = []
export const filterCategory = (category) => {

    if (category === null ){
        snacksFilter.push(...snacks)
        
    } else {
        snacksFilter = []
        const newFilter = snacks.filter(snack => snack.categoria === category)
        snacksFilter.push(...newFilter)

    }
    console.log(snacksFilter)
    return snacksFilter
}