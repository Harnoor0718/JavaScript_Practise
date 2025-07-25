async function fetchMockData(url) {
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => resolve({ data: `Hello from ${url}` }), 1000);
    });
    return response.data;
  } catch {
    return "Error";
  }
}