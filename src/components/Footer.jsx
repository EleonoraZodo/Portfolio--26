import { Box, Container, IconButton, Link, Stack, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { profile } from '../data/content';

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', py: 5, mt: 10 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }} justifyContent="space-between">
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Let's connect!</Typography>
            <Link href={`mailto:${profile.email}`} color="text.secondary" underline="hover">
              {profile.email}
            </Link>
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton href={`mailto:${profile.email}`} aria-label="Email">
              <EmailOutlinedIcon />
            </IconButton>
            <IconButton href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <Typography variant="body2" color="text.secondary" sx={{ pl: 1 }}>
              © {new Date().getFullYear()} {profile.name}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
