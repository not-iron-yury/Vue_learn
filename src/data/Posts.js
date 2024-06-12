export function fetchPosts(limit = 10, page = 1) {
  const queryParams = `?_limit=${limit}&_page=${page}`
  const response = fetch('https://jsonplaceholder.typicode.com/posts' + queryParams).then((data) =>
    data.json()
  )
  return response
}
