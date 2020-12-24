const baseUrl = "https://boapi.tlibom.com/core";
const loginUrl = "/auth/login";

export const fetchService = async(url = `${baseUrl}${loginUrl}`, options) => {
  const settings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    ...options
  };

  try {
    const fetchResponse = await fetch(url, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }    
};