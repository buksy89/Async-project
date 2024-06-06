async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

async function parallelCalls(urls) {
  try {
    const promises = urls.map((url) => fetchData(url));
    const responses = await Promise.all(promises);
    responses.forEach((data, index) => {
      console.log(`Response from ${urls[index]}:`, data);
    });
  } catch (error) {
    console.error("An error occurred during parallel calls:", error);
  }
}

const urls = [
  "https://api.example.com/data1",
  "https://api.example.com/data2",
  "https://api.example.com/data3",
];
parallelCalls(urls);
