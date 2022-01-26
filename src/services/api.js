async function fetchAPI(url) {
  const responseAPI = await fetch(url);
  const data = await responseAPI.json();

  return data;
}

export default fetchAPI;
