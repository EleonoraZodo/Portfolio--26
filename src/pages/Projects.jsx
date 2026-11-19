import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
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

      <Paper
        sx={{
          mt: 8, p: { xs: 3, md: 5 }, bgcolor: 'rgba(42,140,130,0.07)',
          display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: { md: 'center' },
        }}
      >
        <SchoolOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" component="h2">Master in HCI</Typography>
          <Typography color="text.secondary">Projects I contributed to during my master, between Trento and Vienna.</Typography>
        </Box>
        <Button component={RouterLink} to="/university" variant="contained" endIcon={<ArrowForwardIcon />} sx={{ alignSelf: { xs: 'flex-start', md: 'center' } }}>
          See master projects
        </Button>
      </Paper>
    </Container>
  );
}
