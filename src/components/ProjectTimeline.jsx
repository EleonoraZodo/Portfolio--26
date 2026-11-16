import { Box, ButtonBase, Typography } from '@mui/material';

/**
 * Overview timeline of a project's phases.
 * Horizontal on desktop, vertical on mobile. Clicking a phase scrolls to its section;
 * `active` highlights the phase currently being read.
 */
export default function ProjectTimeline({ steps, active, onSelect }) {
  return (
    <Box
      component="ol"
      aria-label="Project timeline"
      sx={{
        listStyle: 'none',
        m: 0,
        p: 0,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: `repeat(${steps.length}, 1fr)` },
        gap: { xs: 0, md: 2 },
      }}
    >
      {steps.map((s, i) => {
        const isActive = i === active;
        const isDone = active != null && i < active;
        const last = i === steps.length - 1;
        return (
          <Box component="li" key={s.title} sx={{ position: 'relative' }}>
            {/* connector line */}
            {!last && (
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  bgcolor: isDone || isActive ? 'primary.main' : 'divider',
                  transition: 'background-color .3s',
                  // desktop: horizontal line from this dot to the next
                  top: { xs: 44, md: 21 },
                  left: { xs: 21, md: 'calc(50% + 26px)' },
                  width: { xs: 2, md: 'calc(100% - 52px + 16px)' },
                  height: { xs: 'calc(100% - 44px)', md: 2 },
                }}
              />
            )}
            <ButtonBase
              onClick={() => onSelect(i)}
              aria-current={isActive ? 'step' : undefined}
              sx={{
                width: '100%',
                borderRadius: 3,
                p: 1,
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                alignItems: { xs: 'flex-start', md: 'center' },
                textAlign: { xs: 'left', md: 'center' },
                gap: { xs: 2, md: 1.5 },
                pb: { xs: 3, md: 1 },
                '&:hover .tl-dot': { transform: 'scale(1.1)', borderColor: 'primary.main' },
                '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.main' },
              }}
            >
              <Box
                className="tl-dot"
                sx={{
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 700,
                  border: '2px solid',
                  borderColor: isActive || isDone ? 'primary.main' : 'divider',
                  bgcolor: isActive ? 'primary.main' : 'background.paper',
                  color: isActive ? '#fff' : isDone ? 'primary.main' : 'text.secondary',
                  transition: 'all .25s',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 600, color: isActive ? 'primary.main' : 'text.primary' }}>{s.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{s.short}</Typography>
              </Box>
            </ButtonBase>
          </Box>
        );
      })}
    </Box>
  );
}
