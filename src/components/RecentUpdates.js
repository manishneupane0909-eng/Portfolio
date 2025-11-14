import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemText, Link as MuiLink, Chip, Box, CircularProgress } from '@mui/material';
import useGithub from './hooks/useGithub';

export default function RecentUpdates() {
  const { topRepos, error: ghError } = useGithub('manishneupane0909-eng');
  const [updates, setUpdates] = useState([]);
  const [updateError, setUpdateError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/updates.json')
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load updates.json (status: ${res.status})`);
        return res.json();
      })
      .then(data => {
        setUpdates(data);
        setLoading(false);
      })
      .catch(err => {
        setUpdateError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress size={20} color="primary" />
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Recent updates</Typography>
      <List dense>
        {updates.map(u => (
          <ListItem key={u.date} disableGutters>
            <ListItemText
              primary={
                u.link ? (
                  <MuiLink href={u.link} target="_blank" rel="noopener noreferrer">
                    {u.title}
                  </MuiLink>
                ) : (
                  u.title
                )
              }
              secondary={`${u.date} • ${u.type.toUpperCase()}`}
            />
            <Chip label={u.type} size="small" color="primary" />
          </ListItem>
        ))}

        {updateError && (
          <Typography variant="caption" color="error">
            Failed to load updates: {updateError}. Showing GitHub activity only.
          </Typography>
        )}

        {ghError && !topRepos.length && (
          <Typography variant="caption" color="text.secondary">
            GitHub API limit reached — check back later.
          </Typography>
        )}

        {topRepos.map(r => (
          <ListItem key={r.id} disableGutters>
            <ListItemText
              primary={
                <MuiLink href={r.html_url} target="_blank" rel="noopener noreferrer">
                  {r.name}
                </MuiLink>
              }
              secondary={`${r.stargazers_count} stars • Updated ${new Date(r.pushed_at).toLocaleDateString()} • ${r.description || ''}`}
            />
            <Chip label="code" size="small" color="primary" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}