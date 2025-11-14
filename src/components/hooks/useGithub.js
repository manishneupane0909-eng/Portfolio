// src/hooks/useGithub.js (updated with optional PAT support for rate limits)
import { useEffect, useState } from 'react';

export default function useGithub(username) {
  const [topRepos, setTopRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      try {
        const headers = {};
        // Optional: Use GitHub PAT for higher rate limits (set REACT_APP_GITHUB_TOKEN in .env)
        if (process.env.REACT_APP_GITHUB_TOKEN) {
          headers.Authorization = `token ${process.env.REACT_APP_GITHUB_TOKEN}`;
        }
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers });
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`GitHub API error: ${res.status} — ${text}`);
        }
        const repos = await res.json();
        const scored = repos
          .filter(r => !r.fork)
          .map(r => ({
            ...r,
            _score: (r.stargazers_count || 0) * 2 + (Date.now() - new Date(r.pushed_at).getTime() < 1000*60*60*24*60 ? 10 : 0)
          }))
          .sort((a, b) => b._score - a._score)
          .slice(0, 3);
        if (!cancelled) setTopRepos(scored);
      } catch (e) {
        if (!cancelled) setError(e.message);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [username]);

  return { topRepos, error };
}