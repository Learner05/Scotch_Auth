module.exports = function(app, passport){
    
    //===================================================================================
    // Home Page with Login Links
    //===================================================================================
    
    
    app.get('/', function(req, res){
        res.render('index.ejs');
    });
    
    
    //===================================================================================
    // Login Page
    //===================================================================================
    
    app.get('/login', function(req, res){
        
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage')}); 
    });
    
    
    //process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    
    
    //===================================================================================
    // SIGNUP
    //===================================================================================
    
    app.get('/signup', function(req, res){
        
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage')});
    });
    
    
    //process the signup form
    
    
    app.post('/signup', passport.authenticate('local-signup', {
        
        successRedirect : '/profile',     // Redirect to secure profile section
        failureRedirect : '/signup',      // redirect back to signup page
        failureFlash    : true            // allow flash messages
        
    }));
    
    
    
    
    //===================================================================================
    // Profile Section
    //===================================================================================
    
    app.get('/profile', isLoggedIn, function(req, res){
        
        res.render('profile.ejs', {
            user: req.user
        });    
    });
    
    
    //===================================================================================
    // Logout
    //===================================================================================
    
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    
};

    //===================================================================================
    // Middleware to verify if user logged in
    //===================================================================================

    function isLoggedIn(req, res, next) {
        
        // if user is authenticated then caryon
      
        if (req.isAuthenticated())
            return next();
        
        res.redirect('/');
    };




