import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  List,
  ListItemButton,
  ListSubheader,
  Divider,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import { profile, cv } from '../data/content';

const links = [
  { label: 'My Story', to: '/story' },
  { label: 'Work Projects', to: '/projects' },
];

function Logo() {
  return (
    <Box
      component={RouterLink}
      to="/"
      sx={{ display: 'flex', alignItems: 'center', gap: 1.25, color: 'text.primary', textDecoration: 'none' }}
    >
      <Box sx={{ width: 18, height: 18, borderRadius: '50%', bgcolor: 'primary.main' }} />
      <Typography sx={{ fontWeight: 600, fontSize: '1.05rem' }}>{profile.name}</Typography>
    </Box>
  );
}

export default function NavBar() {
  const { pathname } = useLocation();
  const [cvAnchor, setCvAnchor] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isActive = (to) => pathname === to || pathname.startsWith(to + '/');

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ bgcolor: 'rgba(251,250,248,0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Logo />
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            {links.map((l) => (
              <Button
                key={l.to}
                component={RouterLink}
                to={l.to}
                color={isActive(l.to) ? 'primary' : 'inherit'}
                variant={isActive(l.to) ? 'outlined' : 'text'}
              >
                {l.label}
              </Button>
            ))}
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(e) => setCvAnchor(e.currentTarget)}
              aria-controls={cvAnchor ? 'cv-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={cvAnchor ? 'true' : undefined}
            >
              CV
            </Button>
            <Menu
              id="cv-menu"
              anchorEl={cvAnchor}
              open={Boolean(cvAnchor)}
              onClose={() => setCvAnchor(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              slotProps={{ paper: { sx: { mt: 1, minWidth: 220, border: '1px solid rgba(0,0,0,0.08)' } } }}
            >
              <MenuItem component="a" href={cv.pdf} download={cv.pdfName} onClick={() => setCvAnchor(null)}>
                <ListItemIcon><DownloadIcon fontSize="small" /></ListItemIcon>
                <ListItemText primary="Download CV" secondary="PDF" />
              </MenuItem>
              <MenuItem component="a" href={cv.pdf} target="_blank" rel="noopener" onClick={() => setCvAnchor(null)}>
                <ListItemIcon><OpenInNewIcon fontSize="small" /></ListItemIcon>
                <ListItemText primary="Open in browser" />
              </MenuItem>
              <Divider />
              <MenuItem component={RouterLink} to="/references" onClick={() => setCvAnchor(null)}>
                <ListItemIcon><RateReviewOutlinedIcon fontSize="small" /></ListItemIcon>
                <ListItemText primary="Reference letters" />
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile */}
          <IconButton
            sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Box sx={{ width: 260 }} role="presentation" onClick={() => setDrawerOpen(false)}>
              <List>
                {links.map((l) => (
                  <ListItemButton key={l.to} component={RouterLink} to={l.to} selected={isActive(l.to)}>
                    <ListItemText primary={l.label} />
                  </ListItemButton>
                ))}
              </List>
              <Divider />
              <List subheader={<ListSubheader>CV</ListSubheader>}>
                <ListItemButton component="a" href={cv.pdf} download={cv.pdfName}>
                  <ListItemIcon><DownloadIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Download CV (PDF)" />
                </ListItemButton>
                <ListItemButton component="a" href={cv.pdf} target="_blank" rel="noopener">
                  <ListItemIcon><OpenInNewIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Open in browser" />
                </ListItemButton>
                <ListItemButton component={RouterLink} to="/references" selected={isActive('/references')}>
                  <ListItemIcon><RateReviewOutlinedIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Reference letters" />
                </ListItemButton>
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
