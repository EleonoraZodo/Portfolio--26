import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Grid2 as Grid, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProjectCard from '../components/ProjectCard';
import { profile, cv, projects } from '../data/content';

// How many projects to preview on the landing page (first entries = most recent).
const RECENT_COUNT = 3;

// Mirrors the old Wix landing page: photo + "Ciao! I'm Nora" + three circular CTAs.
const circles = [
  { label: 'My Story', to: '/story', color: 'secondary.main' },
  { label: 'Projects', to: '/projects', color: 'primary.main' },
  { label: 'CV', href: cv.pdf, color: 'grey.500', download: cv.pdfName },
];

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 } }}>
      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component="img"
            src={profile.landingPhoto}
            alt={`${profile.name} next to a collaborative robot arm`}
            sx={{
              width: '100%',
              maxWidth: 400,
              aspectRatio: '1 / 1',
              objectFit: 'cover',
              borderRadius: 8,
              boxShadow: '0 24px 48px rgba(15,40,80,0.18)',
              display: 'block',
              mx: 'auto',
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' } }}>{profile.greeting}</Typography>
          <Typography variant="h3" component="p" sx={{ mt: 1 }}>
            I'm {profile.nickname},
          </Typography>
          <Typography variant="h5" component="p" color="text.secondary" sx={{ mt: 1, fontWeight: 400 }}>
            {profile.tagline}
          </Typography>

          <Stack direction="row" spacing={{ xs: 2, sm: 3 }} sx={{ mt: 6 }}>
            {circles.map((c) => (
              <Button
                key={c.label}
                {...(c.to ? { component: RouterLink, to: c.to } : { href: c.href, download: c.download })}
                sx={{
                  width: { xs: 92, sm: 116 },
                  height: { xs: 92, sm: 116 },
                  borderRadius: '50%',
                  border: '3px solid',
                  borderColor: c.color,
                  color: 'text.primary',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  transition: 'all .2s',
                  '&:hover': { bgcolor: c.color, color: '#fff' },
                }}
              >
                {c.label}
              </Button>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Recent projects preview */}
      <Box component="section" sx={{ mt: { xs: 10, md: 14 } }}>
        <Stack direction="row" alignItems="flex-end" justifyContent="space-between" spacing={2} sx={{ mb: 4 }}>
          <Box>
            <Typography variant="overline" color="primary">Recent projects</Typography>
            <Typography variant="h3" component="h2">Latest work</Typography>
          </Box>
          <Button component={RouterLink} to="/projects" endIcon={<ArrowForwardIcon />} sx={{ flexShrink: 0 }}>
            All projects
          </Button>
        </Stack>
        <Grid container spacing={3}>
          {projects.slice(0, RECENT_COUNT).map((p) => (
            <Grid key={p.slug} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjectCard project={p} variant="compact" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
