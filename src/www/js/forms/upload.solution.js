/**
 * Exercise 1
 * ============================================
 *
 * Make sure your server is running: `$ yarn start` or `$ npm start
 *
 * 1. Set up a form that POSTs to /api/uploads.
 * 2. Add a <input type="file"> with a field name of "files" to the form.
 * 3. Try uploading a file! You will get a message with the uploaded file name. You can
 *    copy the filename and load it in the browser: http://localhost:3000/api/uploads/myfilename.jpg
 *    It will be stored in `src/data/uploads`.
 *
 * If you're getting an error while uploading the file and your DB server is giving this
 * error:
 *
 *   err { MulterError: Unexpected field...
 *         name: 'MulterError',
 *         message: 'Unexpected field',
 *         code: 'LIMIT_UNEXPECTED_FILE',
 *         field: 'foo',                     <-- the culprit, it wants a field of `files`
 *         storageErrors: [] }
 *
 * This means the `name` attribute on your input is incorrect. It should be `files` like this:
 *
 *     <input name="files" type="file" />
 */

// should be done entirely in HTML

/**
 * Exercise 2
 * ============================================
 *
 * It's time to make the system more interactive! We'll want to send the file via AJAX, so then we can
 * provide UI updates and not lean on the default website behavior.
 *
 * First, let's figure out how to send a file via AJAX.
 *
 * On the `change` event for the input element, retrieve the file from the target and store it in
 * a global variable, which you'll reference when you submit the form.
 *
 * Then on `submit` of the form, start by preventing the default behavior of form submission. Then, create a
 * FormData object, where you'll insert the file. Use `FormData#append` to stick the file into a new
 * FormData object with a key of `files`, like this:
 *
 *     const data = new FormData()
 *     data.append('files', myFile)
 *
 * Send the FormData via axios to the server.
 */

let globalFile

document.querySelector('#ex2-form').addEventListener('submit', async (e) => {
  e.preventDefault()

  // UI interactivity
  const progressBar = e.target.querySelector('.progress-bar')
  const submitBtn = e.target.querySelector('button[type="submit"]')
  submitBtn.setAttribute('disabled', 'disabled')

  const data = new FormData()
  data.append('files', globalFile)
  const config = {
    onUploadProgress(progressEvent) {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      progressBar.setAttribute('style', `width: ${percentCompleted}%`)
      progressBar.setAttribute('aria-valuenow', percentCompleted)
    },
  }
  const { data: res } = await axios.post('/api/uploads', data, config)
  submitBtn.removeAttribute('disabled')
  e.target.querySelector('input').value = null
  globalFile = null
  const resultNode = document.createElement('a')
  const fileName = res.match(/Files uploaded: (.*)/)[1]
  const url = `/api/uploads/${fileName}`
  resultNode.href = url
  resultNode.innerText = 'File uploaded'
  e.target.appendChild(resultNode)
})

document.querySelector('#ex2-file').addEventListener('change', (e) => {
  globalFile = e.target.files[0]
})

/**
 * Exercise 3 (Extra credit)
 * ============================================
 *
 * Next, let's add some UI interactivity to the code above.
 *
 * 1. On submit, disable the submit button.
 * 2. Update the progress bar on the upload progress so the user doesn't get impatient. See the code snippet below
 *    to configure axios to track progress events, and some simple code to update the Bootstrap progress bar.
 *    More info about progress bars here: https://getbootstrap.com/docs/4.1/components/progress/.
 *
 *    You'll probably need to simulate a slow network, because uploading files to localhost will be instantaneous. You
 *    can do this by going to DevTools > Network > Online (Throttling) and choosing a slower setting. Here's a
 *    demonstration: https://i.imgur.com/qP8fnHU.gif
 *
 * 3. When the upload finishes, enable the submit button, clear the input file element, and clear the global variable
 *    you used to store the file.
 * 4. Create a link to the file you just uploaded. You'll need to parse the response from the server, which has this
 *    format:
 *
 *        "Files uploaded: foo.jpg"
 *
 *    You can then locate the file at http://localhost:3000/api/uploads/foo.jpg
 *
 *    Hint: use regex and capture groups to grab the filename:
 *    https://javascript.info/regexp-groups#parentheses-contents-in-the-match
 *
 *    Hint 2: If you can't figure it out, here's a way to grab the filename:
 *
 *        const fileName = res.match(/Files uploaded: (.*)/)[1]
 *
 * 5. Create an anchor element (`a`), give it the URL you've constructed and some text like "File uploaded" and
 *    append it to the form.
 */

const snippetForExercise3 = () => {
  // you can copy the code below to update the progress bar while the file uploads. It's wrapped in a function
  // right now so this example snippet doesn't actually execute.

  // V--- stuff to copy
  const progressBar = document.querySelector('.progress-bar')

  const config = {
    onUploadProgress(progressEvent) {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      progressBar.setAttribute('style', `width: ${percentCompleted}%`)
      progressBar.setAttribute('aria-valuenow', percentCompleted.toString())
    },
  }

  axios.post('/api/uploads', data, config)
  // /\--- stuff to copy
}

/**
 * Exercise 4 (Beast Mode)
 * ============================================
 *
 * Allow the file input to accept multiple files. When the user chooses some files, show thumbnails for them, filename,
 * and file sizes. Provide a little "x" button for each file, that the user can click to remove it from the list of
 * files to be uploaded.
 *
 * You'll need to maintain a separate array storing the files to be uploaded, and manipulate it as the user removes
 * files or chooses additional files to upload.
 *
 * The standard text for the file input will be misleading, it may say "2 files selected." but actually the user has
 * added or deleted some. Let's drop the default behavior and hide that info. Details here:
 * https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#using_a_label_element_to_trigger_a_hidden_file_input_element
 */
