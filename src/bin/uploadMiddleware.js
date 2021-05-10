const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './data/uploads')
  },
  filename: function (req, file, callback) {
    const extension = path.extname(file.originalname)
    const originalFileName = path.basename(file.originalname, extension)
    callback(null, originalFileName + '-' + Date.now() + extension)
  },
})
// const upload = multer({ storage: storage }).single('file')
const upload = multer({ storage: storage }).array('files', 5)
const fieldsOnly = multer().none()

module.exports = (req, res, next) => {
  // handle uploads
  if (req.url === '/uploads' && req.method === 'POST') {
    upload(req, res, function (err) {
      if (err) {
        console.log('err', err)
        return res.end('Error uploading file.')
      }
      // if you wanted to send the file itself:
      // res.sendFile(path.join(__dirname, '../data/uploads', req.files[0].filename))

      // in this case we'll just send the filename so the UI can work with it as needed
      res.end(`Files uploaded: ${req.files.map(file => file.filename).join(', ')}`)
    })
    // handle requests for files
  } else if (req.url.startsWith('/uploads/')) {
    res.sendFile(path.join(__dirname, '../data/uploads', path.basename(req.url)))
  } else {
    // pass through multipart/form-data parsing
    fieldsOnly(req, res, function(err) {
      next()
    })
  }
}
