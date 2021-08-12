export const fetchToApi = async (url) => {
  try {
    const data = await fetch(url)
    return await data.json()
  } catch (error) {
    console.log(error);
  }
}