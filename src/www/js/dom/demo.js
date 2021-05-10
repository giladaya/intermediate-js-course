// let name
// let email
//
// document.querySelector('[name="name"]').addEventListener('change', (e) => {
//   name = e.target.value
// })

const ONE_MB_IN_BYTES = 1048576

document.querySelector('input')
  .addEventListener('change', (e) => {
    const files = e.target.files
    ;[...files].forEach(file => {
      const image = document.createElement('img')
      image.src = URL.createObjectURL(file)
      console.log('image.src', image.src)
      document.body.appendChild(image)
    })
  })
