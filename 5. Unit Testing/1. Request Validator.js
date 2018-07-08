// let expect = require("chai").expect;
// let jsdom = require('jsdom-global')();
// let $ = require('jquery');
//

// function sum(arr)
// {
//     let sum=0;
//     for(num of arr)
//         sum+=Number(num);
//     return sum;
// }
//
//
// describe("sum tests",function () {
//     it("Should return 6 for [1,2,3]",function () {
//         let array=[1,2,4];
//         let result=sum(array);
//         expect(result).to.be.equal(6);
//     })
// })


function validateRequest(req) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /^([a-zA-Z0-9.]+)$/g;
    let messageRegex = /^[^<>\\&'"]+$/g;



    if(!req.hasOwnProperty('method'))
        return false;
    else
    {
        if(!(req.method==='GET' || req.method==='POST' || req.method==='DELETE' || req.method==="CONNECT"))
        {
            console.log("yes");
        }
        else
            console.log("no");
    }

    //...

}validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
