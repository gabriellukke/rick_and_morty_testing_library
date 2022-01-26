async function fetchAPI(url) {
  const responseAPI = await fetch(url);
  const data = await responseAPI.json();

  return data;
}

const fetchAPISimulate = (url) => new Promise((resolve) => {
  setTimeout(async () => {
    const response = await fetchAPI(url);
    resolve(response)
  }, 1500)
})

export default fetchAPISimulate;
