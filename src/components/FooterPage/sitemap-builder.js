//React-router-sitemap is a module for building a sitemap.xml, which is used for SEO of websites, so it needs react-router-dom, 
//but when you look into the source code, you can see that this module is using "react-router" instead of "react-router-dom".
// So I use A1 Generator Sitemap to get the sitemap.xml, but I don't how display the xml content in the footer ...
//Here the code that I tried to used:

require('babel-register');
 
const App = require('../../App.js').default;
const Sitemap = require('../..').default;
 
(
    new Sitemap(App)
        .build('http://localhost:3000')
        .save('./sitemap.xml')
);