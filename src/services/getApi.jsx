async function getApi() {
  let res = await fetch(`/api/products`);
  let data = await res.json();
  return data;
}
export default getApi;
