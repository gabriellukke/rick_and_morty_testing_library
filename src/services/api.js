async function fetchAPI(url) {
  const responseAPI = await fetch(url);
  console.log(responseAPI)
  const data = await responseAPI.json();
  console.log(data)

  return data;
}

export default fetchAPI;
