// type Product = {
//     name : string;
//     quntaty: number;
//     price:number;
//     color:string;
//  }
// const product:Product = {
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var user = { name: "dhaval", age: 22 };
var mylocation = { city: "surat", country: "india" };
var createuserprofile = function (user, mylocation) {
    //@ts-ignore
    //return `My name is ${user.name } and ${mylocation.city}`
    return __assign(__assign({}, user), mylocation);
};
console.log(createuserprofile(user, mylocation));
