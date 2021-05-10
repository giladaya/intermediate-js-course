let globalFile
let globalFiles = []

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  const data = new FormData()
  globalFiles.forEach(file => data.append('files', file))
  axios.post('/api/uploads', data, { headers: { 'content-type': 'multipart/form-data' } })
})

document.querySelector('input').addEventListener('change', (e) => {
  const details = document.querySelector('#details')
  details.innerHTML = ''

  ;[...e.target.files].forEach((file) => {
    const name = document.createElement('p')
    name.innerText = file.name
    details.appendChild(name)

    const size = document.createElement('p')
    size.innerText = formatFileSize(file.size)
    if (!isSizeValid(file.size)) {
      size.innerText += ' (TOO BIG!)'
      document.querySelector('button[type="submit"]').setAttribute('disabled', 'disabled')
    } else {
      document.querySelector('button[type="submit"]').removeAttribute('disabled')
    }
    details.appendChild(size)

    const image = document.createElement('img')
    image.src = URL.createObjectURL(file)
    details.appendChild(image)

    globalFiles.push(file)
  })
})

const isSizeValid = (bytes) => bytes < 1048576

const formatFileSize = (number) => {
  if (number < 1024) {
    return number + 'bytes'
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + 'KB'
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + 'MB'
  }
}
