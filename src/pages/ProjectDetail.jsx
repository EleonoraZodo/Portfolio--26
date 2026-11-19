import { useEffect, useState } from 'react';
import { Link as RouterLink, Navigate, useParams, useSearchParams } from 'react-router-dom';
import { Box, Button, Chip, Container, Grid2 as Grid, Paper, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ProjectTimeline from '../components/ProjectTimeline';
import { projects } from '../data/content';

const phaseId = (i) => `phase-${i + 1}`;

function scrollToPhase(i) {
  document.getElementById(phaseId(i))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Figure({ src, alt }) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading="lazy"
      sx={{ width: '100%', height: 'auto', display: 'block', borderRadius: 3, border: '1px solid rgba(0,0,0,0.08)', bgcolor: '#fff' }}
    />
  );
}

/** Tracks which phase section is currently in view. */
function useActivePhase(count) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const els = Array.from({ length: count }, (_, i) => document.getElementById(phaseId(i))).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [count]);
  return active;
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const [params] = useSearchParams();
  const p = projects.find((x) => x.slug === slug);
  const active = useActivePhase(p ? p.process.length : 0);

  // Deep link from the project card: /projects/<slug>?step=<i>
  useEffect(() => {
    const step = params.get('step');
    if (step == null) return;
    const t = setTimeout(() => scrollToPhase(Number(step)), 150);
    return () => clearTimeout(t);
  }, [params]);

  if (!p) return <Navigate to="/projects" replace />;

  return (
    <Box>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', color: '#fff', pt: { xs: 5, md: 8 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Button component={RouterLink} to="/projects" startIcon={<ArrowBackIcon />} sx={{ color: 'inherit', mb: 3, ml: -1 }}>
            All projects
          </Button>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>{p.title}</Typography>
          <Typography variant="h5" component="p" sx={{ mt: 1, fontWeight: 400, opacity: 0.9 }}>{p.subtitle}</Typography>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 3, opacity: 0.9 }}>
            <PlaceOutlinedIcon fontSize="small" />
            <Typography>@ {p.organisation}{p.location ? ` · ${p.location}` : ''}</Typography>
          </Stack>
          {p.publication && (
            <Button
              href={p.publication.url}
              target="_blank"
              rel="noopener"
              variant="outlined"
              startIcon={<ArticleOutlinedIcon />}
              sx={{ mt: 3, color: '#fff', borderColor: 'rgba(255,255,255,0.6)', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              Read the paper · {p.publication.label}
            </Button>
          )}
          {p.implementation && (
            <Button
              href={p.implementation.url}
              target="_blank"
              rel="noopener"
              variant="outlined"
              endIcon={<OpenInNewIcon />}
              sx={{ mt: 3, color: '#fff', borderColor: 'rgba(255,255,255,0.6)', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              Implemented by {p.implementation.label}
            </Button>
          )}
        </Container>
      </Box>

      {/* Timeline overview */}
      <Container maxWidth="lg">
        <Paper
          sx={{
            mt: { xs: -3, md: -4 },
            p: { xs: 2.5, md: 4 },
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
            position: 'relative',
          }}
        >
          <Typography variant="overline" color="primary" sx={{ display: 'block', mb: 2 }}>
            Project timeline · {p.process.length} phases
          </Typography>
          <ProjectTimeline steps={p.process} active={active} onSelect={scrollToPhase} />
        </Paper>
      </Container>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Background */}
        <Typography variant="h4" component="h2" sx={{ mb: 3 }}>Background</Typography>
        <Grid container spacing={3}>
          {p.background.map((b) => (
            <Grid key={b.label} size={{ xs: 12, md: 4 }}>
              <Paper sx={{ p: 3, height: '100%', border: '1px solid rgba(0,0,0,0.08)' }}>
                <Typography variant="overline" color="primary">{b.label}</Typography>
                <Typography sx={{ mt: 1 }}>{b.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
          {p.tags.map((t) => <Chip key={t} label={t} variant="outlined" />)}
        </Stack>

        {/* Phases in detail */}
        <Typography variant="h4" component="h2" sx={{ mt: 10, mb: 2 }}>Phases in detail</Typography>
        {p.confidential && (
          <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary' }}>
            <LockOutlinedIcon fontSize="small" />
            <Typography variant="body2">Images are blurred for confidentiality, at the request of my employer.</Typography>
          </Stack>
        )}
        <Stack spacing={{ xs: 8, md: 10 }} sx={{ mt: 4 }}>
          {p.process.map((step, i) => {
            const text = (
              <Box>
                <Typography sx={{ color: 'primary.main', fontWeight: 700, fontSize: '2.5rem', lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Typography variant="h5" component="h3" sx={{ mt: 1.5, mb: 2 }}>{step.title}</Typography>
                {step.paragraphs.map((t, k) => (
                  <Typography key={k} color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.75 }}>{t}</Typography>
                ))}
                {step.link && (
                  <Button href={step.link.url} target="_blank" rel="noopener" variant="outlined" endIcon={<OpenInNewIcon />} sx={{ mt: 1 }}>
                    {step.link.label}
                  </Button>
                )}
              </Box>
            );
            const sectionSx = { scrollMarginTop: { xs: 80, md: 96 } };
            const images = step.images || (step.image ? [step.image] : []);
            // Text-only phase, or wide phase with figure(s) below the text
            if (step.wide || images.length !== 1) {
              return (
                <Box key={step.title} id={phaseId(i)} data-index={i} component="section" sx={sectionSx}>
                  <Box sx={{ maxWidth: 760 }}>{text}</Box>
                  {images.length === 1 && <Box sx={{ mt: 3 }}><Figure src={images[0]} alt={step.title} /></Box>}
                  {images.length > 1 && (
                    <Grid container spacing={2} sx={{ mt: 3 }}>
                      {images.map((src, k) => (
                        <Grid key={src} size={{ xs: 12, md: k === 0 ? 12 : 6 }}>
                          <Figure src={src} alt={`${step.title} ${k + 1}`} />
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </Box>
              );
            }
            const imageFirst = i % 2 === 1;
            return (
              <Box key={step.title} id={phaseId(i)} data-index={i} component="section" sx={sectionSx}>
                <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center" direction={{ xs: 'column-reverse', md: imageFirst ? 'row-reverse' : 'row' }}>
                  <Grid size={{ xs: 12, md: 6 }}>{text}</Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ maxWidth: step.imageMaxWidth || 'none', mx: 'auto' }}>
                      <Figure src={images[0]} alt={step.title} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </Stack>

        {/* Closing lists (each optional) */}
        {[
          ['My learnings', p.learnings, CheckCircleOutlineIcon],
          ['Next steps', p.nextSteps, ArrowForwardIcon],
        ]
          .filter(([, items]) => items?.length)
          .map(([title, items, Icon]) => (
            <Paper key={title} sx={{ mt: 10, p: { xs: 3, md: 5 }, bgcolor: 'rgba(42,140,130,0.07)' }}>
              <Typography variant="h4" component="h2" sx={{ mb: 3 }}>{title}</Typography>
              <Grid container spacing={2}>
                {items.map((l) => (
                  <Grid key={l} size={{ xs: 12, sm: 6 }}>
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                      <Icon color="primary" sx={{ mt: '2px' }} />
                      <Typography>{l}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          ))}
      </Container>
    </Box>
  );
}
