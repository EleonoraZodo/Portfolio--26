import { Container, Stack, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="overline" color="primary">Work Projects</Typography>
      <Typography variant="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
        Selected work
      </Typography>
      <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 720, mb: 6 }}>
        Each project at a glance: the user need it addresses, what I did, and what it achieved for the user experience.
        Open a case study for the full process.
      </Typography>
      <Stack spacing={5}>
        {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </Stack>
    </Container>
  );
}
