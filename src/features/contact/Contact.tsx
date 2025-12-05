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
import { ContactForm, ContactStatus } from '@/shared/types';

const FORMSPREE_ID = 'your_form_id';

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<ContactStatus>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('loading');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('ok');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
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
                Thanks! I'll reply by email.
              </Alert>
            )}
            {status === 'error' && (
              <Alert severity="error" sx={{ mb: 2 }}>
                Sorry, something went wrong. Try again or email me directly.
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  sx={{ fontWeight: 600, flex: { xs: 1, sm: 'none' } }}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="mailto:manishneupane0909@gmail.com"
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

