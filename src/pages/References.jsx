import { Avatar, Box, Button, Card, CardActions, CardContent, Container, Grid2 as Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { references } from '../data/content';

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('');

function Author({ a }) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="flex-start">
      <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40, fontSize: '0.95rem' }}>{initials(a.name)}</Avatar>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography sx={{ fontWeight: 600 }}>{a.name}</Typography>
          {a.linkedin && (
            <Tooltip title={`${a.name} on LinkedIn`}>
              <IconButton size="small" href={a.linkedin} target="_blank" rel="noopener" aria-label={`${a.name} on LinkedIn`} sx={{ color: '#0a66c2' }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>{a.role}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>{a.org}</Typography>
      </Box>
    </Stack>
  );
}

export default function References() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>Reference letters</Typography>
      <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 720, mb: 6 }}>
        What people I have worked with say about me. Parts referring to the specific position each letter was written for are blurred.
      </Typography>
      <Grid container spacing={3}>
        {references.map((r) => (
          <Grid key={r.pdf} size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow .25s, transform .25s', '&:hover': { boxShadow: 6, transform: 'translateY(-3px)' } }}>
              <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Box>
                  <Typography variant="overline" color="primary" sx={{ lineHeight: 1.5, display: 'block' }}>{r.date}</Typography>
                  <Typography variant="body2" color="text.secondary">{r.context}</Typography>
                </Box>
                <Box sx={{ position: 'relative', pl: 4 }}>
                  <FormatQuoteIcon color="primary" sx={{ position: 'absolute', left: 0, top: -2, opacity: 0.5 }} />
                  <Typography sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>“…{r.quote}…”</Typography>
                </Box>
                <Stack spacing={2} sx={{ mt: 'auto', pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                  {r.authors.map((a) => <Author key={a.name} a={a} />)}
                </Stack>
              </CardContent>
              <CardActions sx={{ px: 3, pb: 3, pt: 0, gap: 1 }}>
                <Button href={r.pdf} target="_blank" rel="noopener" variant="contained" size="small" endIcon={<OpenInNewIcon />}>
                  Read letter
                </Button>
                <Button href={r.pdf} download size="small" startIcon={<DownloadIcon />}>PDF</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
