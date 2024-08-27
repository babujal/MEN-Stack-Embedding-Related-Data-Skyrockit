// middleware/is-signed-in.js

const isSignedIn = (req, res, next) => {
    //if the user is signed in (we will have a req.session.user defined) go to the next middle ware or move to the routes section 
    if(req.session.user) return next();

    // if not, redirect the user to the sign in page 
    res.redirect('/auth/sign-in');

}


module.exports = isSignedIn;
