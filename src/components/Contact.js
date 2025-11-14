// src/components/Contact.js (updated with better error handling and Formspree note)
import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'ok' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Replace with your actual Formspree form ID (sign up at formspree.io)
      const RES = await fetch('https://formspree.io/f/your_form_id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!RES.ok) {
        const errorText = await RES.text();
        console.error('Formspree error:', errorText);  // Log for debugging
        setStatus('error');
        return;
      }
      setStatus('ok');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <Card elevation={10} sx={{ p: 2, background: 'rgba(24,38,44,0.85)', borderRadius: 6 }}>
          <CardContent>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>Get in Touch</Typography>
            {status === 'ok' && <Alert severity="success">Thanks! I’ll reply by email.</Alert>}
            {status === 'error' && <Alert severity="error">Sorry, something went wrong. Try again or email me directly.</Alert>}
            <form onSubmit={handleSubmit} aria-label="contact form">
              <TextField name="name" label="Name" required fullWidth margin="normal" value={form.name} onChange={handleChange} />
              <TextField name="email" label="Email" required type="email" fullWidth margin="normal" value={form.email} onChange={handleChange} />
              <TextField name="message" label="Message" required multiline minRows={4} fullWidth margin="normal" value={form.message} onChange={handleChange} />
              {/* Honeypot */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 2 }}>
                <Button type="submit" variant="contained" color="primary" sx={{ fontWeight: 600 }}>Send</Button>
                <Button variant="outlined" color="secondary" href="mailto:manishneupane0909@gmail.com">Email directly</Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}