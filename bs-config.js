// bs-config.js


module.exports = {
  files: [
    './mainapp/templates/base.html',
    './mainapp/templates/**/*.html',
    './mainapp/templates/mainapp/*.html',
    './mainapp/templates/mainapp/**/*.html',  // Watch HTML files in mainapp/templates/mainapp
    './mainapp/static/mainapp/css-compiler/**/*.css',  // Watch CSS files in mainapp/static/mainapp/css
    './mainapp/static/mainapp/js-compiler/**/*.js',    // Watch JS files in mainapp/static/mainapp/js
    './media/**/*.{jpg,png,jpeg}'  // Watch image files in project-root/media
  ],
  watchOptions: {
    ignoreInitial: true,
  },
  // proxy: 'localhost:8000',  // Proxy Django server
  // port: 3000,               // BrowserSync port


};

