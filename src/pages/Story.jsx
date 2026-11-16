import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Chip, Container, Grid2 as Grid, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { profile, story } from '../data/content';

export default function Story() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="overline" color="primary">My Story</Typography>
      <Grid container spacing={{ xs: 4, md: 8 }} sx={{ mt: 1 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="img"
            src={profile.photo}
            alt={profile.name}
            sx={{ width: '100%', maxWidth: 320, aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: 4, display: 'block', position: { md: 'sticky' }, top: { md: 104 } }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h2" component="h1" sx={{ mb: 3 }}>
            Designing technology that starts with people.
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 400, mb: 6 }}>
            {story.intro}
          </Typography>

          <Stack spacing={5}>
            {story.chapters.map((c, i) => (
              <Box key={c.title} sx={{ display: 'flex', gap: 3 }}>
                <Typography sx={{ color: 'primary.main', fontWeight: 700, fontSize: '1.25rem', minWidth: 36 }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Box>
                  <Typography variant="h5" component="h2" sx={{ mb: 1 }}>{c.title}</Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>{c.text}</Typography>
                </Box>
              </Box>
            ))}
          </Stack>

          <Typography variant="h5" component="h2" sx={{ mt: 8, mb: 2 }}>Toolbox</Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {story.skills.map((s) => <Chip key={s} label={s} />)}
          </Stack>

          <Button component={RouterLink} to="/projects" variant="contained" size="large" endIcon={<ArrowForwardIcon />} sx={{ mt: 8 }}>
            See my work
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
