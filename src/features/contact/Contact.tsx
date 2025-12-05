import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Container,
} from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ContactForm, ContactStatus } from '@/shared/types';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<ContactStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      return;
    }

    const hasEmailJS = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && 
                       SERVICE_ID !== '' && TEMPLATE_ID !== '' && PUBLIC_KEY !== '';

    if (!hasEmailJS) {
      const subject = encodeURIComponent(`Contact from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      window.open(`mailto:hi@mneupane.com?subject=${subject}&body=${body}`, '_blank');
      setStatus('ok');
      setTimeout(() => {
        setForm({ name: '', email: '', message: '' });
        setStatus('idle');
      }, 2000);
      return;
    }

    setStatus('loading');

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: 'hi@mneupane.com',
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus('ok');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      } else {
        throw new Error('EmailJS returned non-OK status');
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4, minHeight: '100vh', overflowY: 'auto' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <Card
          elevation={10}
          sx={{
            p: { xs: 2, sm: 3 },
            background: 'rgba(24,38,44,0.85)',
            borderRadius: 6,
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: 'primary.main', mb: 2, textAlign: 'center' }}
            >
              Get in Touch
            </Typography>

            {status === 'ok' && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Message sent successfully. I'll get back to you soon!
              </Alert>
            )}
            {status === 'error' && (
              <Alert severity="error" sx={{ mb: 2 }}>
                Failed to send. Please try again or use the email button below.
              </Alert>
            )}
            {status === 'loading' && (
              <Alert severity="info" sx={{ mb: 2 }}>
                Sending...
              </Alert>
            )}

            <form onSubmit={handleSubmit} aria-label="contact form">
              <TextField
                name="name"
                label="Name"
                required
                fullWidth
                margin="normal"
                value={form.name}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              <TextField
                name="email"
                label="Email"
                required
                type="email"
                fullWidth
                margin="normal"
                value={form.email}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              <TextField
                name="message"
                label="Message"
                required
                multiline
                minRows={4}
                fullWidth
                margin="normal"
                value={form.message}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              <input
                type="text"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  alignItems: 'stretch',
                  mt: 3,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={status === 'loading'}
                  sx={{ fontWeight: 600, flex: { xs: 1, sm: 'none' } }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send'}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="mailto:hi@mneupane.com"
                  sx={{ flex: { xs: 1, sm: 'none' } }}
                >
                  Email directly
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};
