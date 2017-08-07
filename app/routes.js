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
    //app.post('/login', );
    
    
    //===================================================================================
    // SIGNUP
    //===================================================================================
    
    app.get('/signup', function(req, res){
        
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage')});
    });
    
    
    //process the signup form
    
    
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
      
        if (req.isAuthenticated())
            return next();
        
        res.redirect('/');
    };




