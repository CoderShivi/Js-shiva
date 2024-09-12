function task(state){
    return new Promise(function(resolve,reject){
        if(state){
          resolve("success")
        }
        reject('error')
    })
}

task(true).then(function(data){
    console.log(data);
    return task(false)
}).catch(function(err){
    console.log(err);
    return "Caught-Error"
}).then(function(data){
    console.log(data)
    return task(true);
}).catch(function(err){
    console.log(err)
})