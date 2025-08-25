async function getApi() {
  const baseUrl =
    import.meta.env.MODE === "development"
      ? "/api"
      : "https://espresso-echo-mock-api.vercel.app";

  const res = await fetch(`${baseUrl}/products`);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export default getApi;
