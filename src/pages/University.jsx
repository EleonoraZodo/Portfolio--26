import { Link as RouterLink } from 'react-router-dom';
import {
  Box, Button, Chip, Container, Grid2 as Grid, Paper, Stack, Typography,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { masterHci, uniProjects } from '../data/content';

function Meta({ label, children }) {
  return (
    <Box>
      <Typography variant="overline" color="primary" sx={{ lineHeight: 1.6 }}>{label}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>{children}</Typography>
    </Box>
  );
}

function UniProject({ p }) {
  return (
    <Paper component="article" sx={{ p: { xs: 3, md: 5 }, border: '1px solid rgba(0,0,0,0.08)' }}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary', mb: 1.5 }}>
        <SchoolOutlinedIcon fontSize="small" />
        <Typography variant="body2">{p.university} · {p.course}</Typography>
      </Stack>
      <Typography variant="h4" component="h2">{p.title}</Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>{p.subtitle}</Typography>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 3 }}>
        {p.tags.map((t) => <Chip key={t} label={t} size="small" variant="outlined" />)}
      </Stack>
      <Typography sx={{ mb: 3, maxWidth: 760, lineHeight: 1.7 }}>{p.brief}</Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 4 }}><Meta label="My role">{p.role}</Meta></Grid>
        <Grid size={{ xs: 12, md: 4 }}><Meta label="Method">{p.method}</Meta></Grid>
        <Grid size={{ xs: 12, md: 4 }}><Meta label="Output">{p.output}</Meta></Grid>
      </Grid>

      <Typography variant="overline" color="primary" sx={{ display: 'block', mb: 1.5 }}>How we worked</Typography>
      <Box
        component="ol"
        sx={{
          listStyle: 'none', m: 0, p: 0, display: 'grid', gap: 2,
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
        }}
      >
        {p.steps.map((s, i) => (
          <Box component="li" key={s.title} sx={{ p: 2, borderRadius: 3, bgcolor: 'rgba(42,140,130,0.06)' }}>
            <Typography variant="caption" color="primary" sx={{ fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>{s.title}</Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.5 }}>{s.text}</Typography>
          </Box>
        ))}
      </Box>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}><Meta label="Result">{p.result}</Meta></Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="overline" color="primary" sx={{ lineHeight: 1.6 }}>My learnings</Typography>
          <Box component="ul" sx={{ m: 0, pl: 2.25, '& li': { color: 'text.secondary', typography: 'body2', lineHeight: 1.6, mb: 0.5 } }}>
            {p.learnings.map((l) => <li key={l}>{l}</li>)}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

const ROWS = [
  ['Where', (p) => p.university.split(' — ')[0]],
  ['Course', (p) => p.course],
  ['My role', (p) => p.role],
  ['Method', (p) => p.method],
  ['Output', (p) => p.output],
  ['Focus', (p) => p.tags.join(' · ')],
];

function Comparison() {
  return (
    <TableContainer component={Paper} sx={{ border: '1px solid rgba(0,0,0,0.08)', mb: 8 }}>
      <Table sx={{ minWidth: 720, '& td, & th': { verticalAlign: 'top', py: 2 } }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 120 }} />
            {uniProjects.map((p) => (
              <TableCell key={p.title} sx={{ fontWeight: 700, fontSize: '1rem' }}>{p.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {ROWS.map(([label, get]) => (
            <TableRow key={label}>
              <TableCell component="th" scope="row">
                <Typography variant="overline" color="primary" sx={{ lineHeight: 1.4 }}>{label}</Typography>
              </TableCell>
              {uniProjects.map((p) => (
                <TableCell key={p.title}>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>{get(p)}</Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function University() {
  const { diversity } = masterHci;
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Button component={RouterLink} to="/projects" startIcon={<ArrowBackIcon />} sx={{ mb: 3, ml: -1 }}>
        Work projects
      </Button>
      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>{masterHci.title}</Typography>
      <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 720, mb: 5 }}>
        {masterHci.intro}
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: { xs: 3, md: 4 }, mb: 8, borderRadius: 4, borderLeft: '4px solid', borderColor: 'primary.main', bgcolor: 'rgba(42,140,130,0.07)' }}
      >
        <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 1.5, color: 'primary.main' }}>
          <PublicOutlinedIcon />
          <Typography variant="h5" component="h2" sx={{ color: 'text.primary' }}>{diversity.title}</Typography>
        </Stack>
        <Typography sx={{ lineHeight: 1.75, mb: 2.5 }}>{diversity.text}</Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 1.5 }}>
          {diversity.places.map((c) => (
            <Chip key={c} icon={<PlaceOutlinedIcon />} label={c} color="primary" variant="outlined" sx={{ bgcolor: '#fff' }} />
          ))}
        </Stack>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {diversity.dimensions.map((d) => (
            <Chip key={d} icon={<GroupsOutlinedIcon />} label={d} color="primary" />
          ))}
        </Stack>
      </Paper>

      <Typography variant="h4" component="h2" sx={{ mb: 3 }}>At a glance</Typography>
      <Comparison />

      <Typography variant="h4" component="h2" sx={{ mb: 3 }}>The projects</Typography>
      <Stack spacing={5}>
        {uniProjects.map((p) => <UniProject key={p.title} p={p} />)}
      </Stack>
    </Container>
  );
}
