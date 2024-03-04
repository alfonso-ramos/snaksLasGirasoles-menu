import {snacks} from '../data/menu.js'
    
export let snacksFilter = []
export const filterCategory = (category) => {
    if (category === null ){
        snacksFilter.push(...snacks)
    } else {
        snacksFilter = []
        snacks.forEach(snack => {
            if(snack.categoria === category) {
                snacksFilter.push(snack)
            }
        })
    }
    return snacksFilter
}
filterCategory(null)