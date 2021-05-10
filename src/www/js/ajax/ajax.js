/**
 * All data coming in and going out will be converted to/from JSON.
 *
 * Promises should be resolved with response data from the server.
 *
 * Hints:
 *
 *   - `axios' returns a promise that resolves an object with `data` as a prop
 *
 * Axios docs: https://github.com/axios/axios
 */
export const Ajax = (() => {
  const raw = async (url, method, data) => {
    // Implement this function.
  }

  // HTTP GET (Fetch resource).
  const get = (url) => {
    return raw(url, 'GET')
  }

  // HTTP POST (Create new resource).
  const post = (url, data) => {
    return raw(url, 'POST', data)
  }

  // HTTP PATCH (Update existing resource).
  const patch = (url, data) => {
    return raw(url, 'PATCH', data)
  }

  // HTTP DELETE (Delete existing resource).
  const del = (url) => {
    return raw(url, 'DELETE')
  }

  // Return the public interface.
  return { get, post, patch, del }
})()
