const bcrypt = require('bcrypt')

const password= '123456Guatemala!@1'

bcrypt.hash(password,5,function(err,hash){
    console.log(hash);

    bcrypt.compare(password, hash, function(err,res){
        console.log(res)
        // console.log(err)
    })
})