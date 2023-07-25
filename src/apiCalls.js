
const fetchNews = async (category) => {

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=cf985076e735426587210bd1b7650a4a`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch news. Please Try again later.');
  }
  return await response.json();
};

export default fetchNews;