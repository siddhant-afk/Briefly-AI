export async function fetchNews(NEWS_URL) {
  const response = await fetch(NEWS_URL);

  if (!response.ok) {
    throw new Error("Falied to fetch news");
  }

  const data = await response.json();

  const results = data.results;

  return results;
}

export function timeAgo(dateString) {
  const now = new Date();
  const postDate = new Date(dateString);
  const diffSeconds = Math.floor((now - postDate) / 1000);

  const intervals = [
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffSeconds / interval.seconds);
    if (count >= 1)
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
  }

  return "just now";
}
