const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    //DB cals, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async two resolved");
    
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    }, 1000)
})

PromiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error = false
            if(!error){
                resolve({username: "hitesh", password: "123"})
            } else {
                reject('ERROR something went wrong')
            }

        },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
    
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(() => {
    console.log("the promise is either resolved or rejected");
    
})

// console.log(userName);

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javascripit", password: "123"})
        } else{
            reject('ERROR: JS went wrong')
        }
      
    },1000)
})

async function consumePromiseFive(){
   try {
    const response =   await promiseFive
    console.log(response);
    
   } catch (error) {
     console.log(error);
     
   }
    
  }

  consumePromiseFive()