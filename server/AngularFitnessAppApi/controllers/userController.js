import userModel from '../models/user';

let userController = {};

userController.registerUser = (req,res) => {
    if(!req.body.name || !req.body.email || !req.body.password){
            res
                .status(400)
                .json({"message" : "All fields required"});
            return;
    }

    userModel.count({email : req.body.email}, function (err, count){
        if(count > 0){
            res
                .status(400)
                .json({"message" : "Email is already registered"});
            return true;
        } else {
            const user = new userModel();
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = (req.body.password);
            user.save(function(error){
                if(error){
                    res
                        .status(400)
                        .json({"message" : error});
                    return false;
                }else{
                    res
                        .status(200)
                        .json({"email" : user.email, "name" : user.name});
                    return false;
                }
            })
        }
    });
   return;
}

userController.login = (req,res) => {
    if(!req.body.email || !req.body.password){
        res
            .status(400)
            .json({"message" : "All fields required"});
        return;
    }

    userModel.count({email : req.body.email}, function (err, count){

        //Check to see if email is registered
        if(count == 0){
            res
                .status(400)
                .json({"message" : "Email is not registered"});
                return true;
        }else{
            userModel.find({email : req.body.email}, function(err,doc){
                
                var currentUser = new userModel();
                currentUser.email = doc[0].email;
                currentUser.name = doc[0].name;
                currentUser.password = doc[0].password;

                console.log('current user', currentUser);
                console.log('req body password', req.body.password);

                if(currentUser.password == req.body.password) {
                    res
                        .status(200)
                        .json({ "email" : currentUser.email, "name" : currentUser.name});
                    return;
                }else{
                    res
                        .status(400)
                        .json({"message" : "Password is invalid"});
                    return;
                }
            });
            return false;
        }
    });
    return;
}

export default userController;