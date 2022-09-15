export function Badge(theme) {
  return {
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: theme.palette.color.active,
        },
      },
    },
  };
}
