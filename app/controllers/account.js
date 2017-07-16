var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/login', function (req, res, next) {
  // Article.find(function (err, articles) {
  //   if (err) return next(err);
    res.render('login', {
      title: 'Generator-Express MVC',
      // articles: articles
    // });
  });
});

// routing to the registration page
router.get('/signup', function (req, res, next) {
    res.render('signup', {
      title: 'Generator-Express MVC',
  });
});

// rework this code to be be landing page once you login
router.get('/dashboard', function (req, res, next) {
    res.render('dashboard', {
      title: 'Generator-Express MVC',
  });
});
