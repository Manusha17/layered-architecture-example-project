export default async function fetchData(path) {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const response = fetch(BASE_URL + path).then((res) => {
    if (res.ok) return res.json();
    return Promise.reject(res);
  });
  return response;
}
