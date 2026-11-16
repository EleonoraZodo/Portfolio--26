import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Collapse,
  Grid2 as Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const hoverSx = {
  transition: 'box-shadow .25s, transform .25s, border-color .25s',
  '&:hover, &:focus-within': { boxShadow: 8, transform: 'translateY(-4px)', borderColor: 'primary.main' },
  '&:hover .pc-media img, &:focus-within .pc-media img': { transform: 'scale(1.06)' },
  '&:hover .pc-overlay, &:focus-within .pc-overlay': { opacity: 1 },
  '&:hover .pc-arrow, &:focus-within .pc-arrow': { transform: 'translateX(4px)' },
};

function Media({ project, height, minHeight }) {
  return (
    <Box className="pc-media" sx={{ position: 'relative', overflow: 'hidden', height, minHeight, bgcolor: 'grey.100' }}>
      <Box
        component="img"
        src={project.cover}
        alt=""
        sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .5s ease' }}
      />
      <Box
        className="pc-overlay"
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'flex-end',
          p: 2.5,
          opacity: 0,
          transition: 'opacity .25s',
          background: 'linear-gradient(to top, rgba(20,60,56,.85), rgba(20,60,56,0) 60%)',
          color: '#fff',
        }}
      >
        <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.75 }}>
          View case study <ArrowForwardIcon fontSize="small" />
        </Typography>
      </Box>
    </Box>
  );
}

function OverviewColumn({ icon, label, children }) {
  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.25, color: 'primary.main' }}>
        {icon}
        <Typography variant="overline" sx={{ lineHeight: 1.5 }}>{label}</Typography>
      </Stack>
      {children}
    </Box>
  );
}

function Bullets({ items }) {
  return (
    <Box component="ul" sx={{ m: 0, pl: 2.25, '& li': { mb: 0.75, color: 'text.secondary', typography: 'body2', lineHeight: 1.6 } }}>
      {items.map((t) => <li key={t}>{t}</li>)}
    </Box>
  );
}

/** Compact preview used on the homepage. The whole card is one link. */
function CompactCard({ project }) {
  return (
    <Card sx={{ height: '100%', ...hoverSx }}>
      <CardActionArea component={RouterLink} to={`/projects/${project.slug}`} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Media project={project} height={200} />
        <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="overline" color="primary" sx={{ lineHeight: 1.4 }}>{project.organisation.split(' — ')[0]}</Typography>
          <Typography variant="h5" component="h3">{project.title}</Typography>
          <Typography variant="body2" color="text.secondary"
            sx={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {project.summary}
          </Typography>
          <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
            {project.tags.slice(0, 3).map((t) => <Chip key={t} label={t} size="small" variant="outlined" />)}
          </Stack>
          <Typography color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 600, mt: 'auto', pt: 2 }}>
            Read case study <ArrowForwardIcon className="pc-arrow" fontSize="small" sx={{ transition: 'transform .2s' }} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

/** Full card used on the Work Projects page: header link + UX overview + expandable process. */
function FullCard({ project }) {
  const [open, setOpen] = useState(false);
  const to = `/projects/${project.slug}`;

  return (
    <Card sx={hoverSx}>
      <CardActionArea component={RouterLink} to={to} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'stretch' }}>
        <Box sx={{ width: { xs: '100%', md: '42%' }, flexShrink: 0 }}>
          <Media project={project} height={{ xs: 220, md: '100%' }} minHeight={{ md: 300 }} />
        </Box>
        <CardContent sx={{ p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Typography variant="overline" color="primary" sx={{ lineHeight: 1.5 }}>{project.organisation}</Typography>
          <Typography variant="h4" component="h2">{project.title}</Typography>
          <Typography variant="subtitle1" color="text.secondary">{project.subtitle}</Typography>
          {project.publication && (
            <Chip label={`Published · ${project.publication.label}`} color="primary" size="small" sx={{ alignSelf: 'flex-start' }} />
          )}
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
            {project.tags.map((t) => <Chip key={t} label={t} size="small" variant="outlined" />)}
          </Stack>
        </CardContent>
      </CardActionArea>

      {/* UX overview */}
      <Box sx={{ px: { xs: 3, md: 5 }, py: 4, borderTop: '1px solid', borderColor: 'divider', bgcolor: 'rgba(42,140,130,0.04)' }}>
        <Grid container spacing={{ xs: 3, md: 5 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <OverviewColumn icon={<FlagOutlinedIcon fontSize="small" />} label="The problem">
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{project.problem}</Typography>
            </OverviewColumn>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <OverviewColumn icon={<PersonOutlineIcon fontSize="small" />} label="My role">
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>{project.role}</Typography>
              <Bullets items={project.roleDetail} />
            </OverviewColumn>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <OverviewColumn icon={<AutoAwesomeOutlinedIcon fontSize="small" />} label="Key UX outcomes">
              <Bullets items={project.outcomes} />
            </OverviewColumn>
          </Grid>
        </Grid>
      </Box>

      {/* Expandable process at a glance */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ px: { xs: 3, md: 5 }, py: 3, borderTop: '1px solid', borderColor: 'divider' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
            {project.process.map((s, i) => (
              <Button
                key={s.title}
                component={RouterLink}
                to={`${to}?step=${i}`}
                variant="outlined"
                sx={{ flex: 1, borderRadius: 3, justifyContent: 'flex-start', textAlign: 'left', alignItems: 'flex-start', flexDirection: 'column', py: 1.5, px: 2 }}
              >
                <Typography variant="caption" color="primary" sx={{ fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>{s.title}</Typography>
                <Typography variant="caption" color="text.secondary">{s.short}</Typography>
              </Button>
            ))}
          </Stack>
        </Box>
      </Collapse>

      <CardActions sx={{ px: { xs: 2, md: 4 }, py: 2, borderTop: '1px solid', borderColor: 'divider', justifyContent: 'space-between' }}>
        <Button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          endIcon={<ExpandMoreIcon sx={{ transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'none' }} />}
          color="inherit"
        >
          {open ? 'Hide process' : 'Process at a glance'}
        </Button>
        <Button component={RouterLink} to={to} variant="contained" endIcon={<ArrowForwardIcon />}>
          Read case study
        </Button>
      </CardActions>
    </Card>
  );
}

export default function ProjectCard({ project, variant = 'full' }) {
  return variant === 'compact' ? <CompactCard project={project} /> : <FullCard project={project} />;
}
