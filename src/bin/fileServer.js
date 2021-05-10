const path = require('path')

module.exports = (req, res, next) => {
  // matches a request for one of the HTML files for the course, e.g. http://localhost:3000/js/
  if (req.path.startsWith('/js') || req.path.startsWith('/css') || req.path.startsWith('/html')) {
    res.sendFile(path.join(__dirname, '../www', req.path))
    return
  }

  next()
}
