class MyClass {
    constructor() {
        console.log("initializing MyClass");
    }


    add(arg1, arg2) {
        var result;
        result = arg1 + arg2;
        return result;
    }

    callAnotherFunction(arg1, arg2) {
        return this.add(arg1, arg2);
    }

    callTheCallBackFunc(callback){
        callback();
    }

    sayHello(){
        console.log("Hello World!!");
    }

    sayHello1(arg){
        console.log(arg);
    }

    callMockMethod(arg1,arg2){
        this.sayHello();
        this.sayHello1("Hello");
        return this.add(arg1.arg2);
    }

    callStubMethod(arg1,arg2){
        var result= this.add(arg1,arg2);
    
        return result;
    }

}


module.exports = MyClass;