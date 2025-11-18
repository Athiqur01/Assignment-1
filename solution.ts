// Problem 1:

type Value= string | number | boolean

const formatValue=(value:Value ): Value=>{
    const typeOfValue= typeof value
    if(typeOfValue==="string"){
        return value.toUpperCase()
    } 
    else if(typeOfValue==="number"){
        return value*10
    }
    else{
        return !value
    }

}

const getLength=(value: string | any[])=>{
    
    if(typeof value==='string'){
        return value.length
    }
    if(Array.isArray(value)){
        return value.length
    }
    return 0
}



class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name=name
        this.age=age
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}


type Item= {
    item: string;
    rating: number
}
const filterByRating=(value: Item[]) =>{
    const highRatedItem=value.filter(singleItem=>singleItem.rating>=4)
    return highRatedItem
}


interface IUser{
    id: number; 
    name: string; 
    email: string; 
    isActive: boolean
}
const filterActiveUsers =function(value:IUser[]):IUser[]{
  const activeUser= value.filter(user=>user.isActive===true)
  return activeUser
}



interface Book{
         title: string;
         author: string;
         publishedYear: number;
         isAvailable: boolean
        }
const printBookDetails=(value: Book)=>{
console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable? "Yes":"No"}`)
}


type ArrayComparison= number[] | string[]
const getUniqueValues=function(value1: ArrayComparison, value2: ArrayComparison) {
    const combinedArray=[...value1, ...value2]
    const arrayWithoutDuplication:ArrayComparison=[]
    for(let i=0; i<combinedArray.length; i++){
         let isDuplicate=false
        for(let j=0; j<arrayWithoutDuplication.length; j++){
            if(combinedArray[i]===arrayWithoutDuplication[j]){
                isDuplicate=true
                break
            }
        }
        if(!isDuplicate){
            arrayWithoutDuplication.push(combinedArray[i])
        }
        
    }
    
    return arrayWithoutDuplication
}




interface IProduct{
    name: string;
    price: number;
    quantity: number;
    discount?:number
}
const calculateTotalPrice= (products:IProduct[])=>{
    const totalPrice=products.reduce((total: number, product:IProduct)=>{
        if(product.discount){
             return total + product.quantity*product.price -(product.price*product.quantity * product.discount)/100
        } else{
           return total + product.quantity*product.price
        }
        
        
        
    },0)
    return totalPrice

}

