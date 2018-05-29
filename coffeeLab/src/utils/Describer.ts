export class Describer{

    static describeClass( typeOfClass:any){
        let a = new typeOfClass();
        let array = Object.getOwnPropertyNames(a);
        console.log(Object.getPrototypeOf(a))
        return array;//you can apply any filter here
    }
}