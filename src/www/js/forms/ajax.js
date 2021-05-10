/**
 * Exercise 1
 * ============================================
 *
 * It's back to our bugtracker. Create a form that sends fields of this shape:
 *
 *     {
 *       title: 'Fix bug',
 *       tasks: ['Investigate problem', 'Resolve issue'],
 *       tag: { name: 'Critical', color: 'red' },
 *       subscribe: '1'
 *     }
 *
 * The HTML file comes mostly filled out so you don't need to spend as much time writing
 * the form. You job is to give each input an appropriate `name` attribute so it will
 * structure the FormData correctly.
 *
 * Next, you need to handle the form submission via AJAX rather than the default behavior.
 * Use axios to submit a FormData object to the server.
 *
 * You should console.log the server response `data` when it comes back.
 */

// your code goes here

/**
 * Exercise 2
 * ============================================
 *
 * The backend team is getting grumpy with your UI, because they expect to always
 * get a field for `subscribe`, but when it's unchecked the form doesn't submit
 * anything.
 *
 * Find a way to set `subscribe` to '0' on form submission when the checkbox
 * is not checked.
 */

// your code will go above in the submit handler

/**
 * Exercise 3 (Challenge Mode)
 * ============================================
 *
 * The backend team is done with supporting multipart/form-data submissions. They want
 * you to only send application/json.
 *
 * Take the FormData object and transform it into a JSON object that you then
 * submit to the server.
 *
 * You can verify you're sending the correct type by opening up DevTools > Network >
 * [click the network request] > [Request headers] > Content-Type.
 * Example: https://i.imgur.com/MjlRryN.jpg
 */

// your code goes here
