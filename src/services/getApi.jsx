async function getApi() {
  let res = await fetch(`https://espresso-echo-mock-api.vercel.app/products`);
  let data = await res.json();
  return data;
}
export default getApi;
