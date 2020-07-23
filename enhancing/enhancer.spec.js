const {repair, success, fail} = require('./enhancer.js');
// test away!
 describe('repair', ()=>{
    let durabilityStat =50
    let enhancementStat = 15
    let item1 = {
        name: "", 
        durability: durabilityStat, 
        enhancement: enhancementStat
    }

    it('should return item with 100 durability', ()=> {
         const repaired = repair(item1)
         expect(repaired.durability).toBe(100)
    })
 })
describe('success', ()=>{
    let durabilityStat =50
    let enhancementStat = 15
    let item2 = {
        name: "", 
        durability: durabilityStat, 
        enhancement: enhancementStat
    }
    it('should increase item enh by 1', ()=> {  
        const itemStart = success(item2)
        expect(itemStart.enhancement).toBe( itemStart.enhancement )
})
})
describe('fail', ()=>{
    let durabilityStat =50
    let item3 = { 
        name: "", 
        durability: durabilityStat, 
        enhancement: 10
    }
    it('should drop item durability by 5 if enhancement is less than 15', ()=>{
        // let item ={ name:'', durability:null, enhancement:null}
         const   itemStart = fail(item3)
         console.log(item3)
         expect(itemStart.durability).toBe(durabilityStat - 5)
    })

})