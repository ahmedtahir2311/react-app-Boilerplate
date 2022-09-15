export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "28px",
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 56,
        },
        containedPrimary: {
          color: theme.palette.text.contrast,
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        },
        containedSecondary: {
          color: theme.palette.text.contrast,
          background: theme.palette.primary.gradient,
        },
        outlined: {
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.primary.main}`,
        },
        text: {
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    },
  };
}

// ?  this can be used to make Dark variant of button

// export function DarkButton(theme) {
//     return {
//       MuiButton: {
//         styleOverrides: {
//           root: {
//             textTransform: "none",
//             boxShadow: "none",
//             fontFamily: theme.palette.font.main,

//             "&:hover": {
//               boxShadow: "none",
//             },
//           },
//         },
//         variants: [
//           {
//             props: { variant: "mediumMain" },
//             style: {
//               width: "auto",
//               height: "43px",
//               padding: "12px 33px ",
//               textTransform: "none",
//               backgroundColor: theme.palette.primary.main,
//               color: theme.palette.primary.contrastText,
//               fontSize: "16px",
//             },
//           },
//           {
//             props: { variant: "mediumMain", color: "secondary" },
//             style: {
//               backgroundColor: theme.palette.secondary.main,
//               fontSize: "14px",
//             },
//           },
//           {
//             props: { variant: "add", color: "primary" },
//             style: {
//               backgroundColor: theme.palette.common.white,
//               color: theme.palette.primary.main,
//               boxShadow: "0px 3px 6px rgba(0,0,0,8%)",
//               fontSize: "16px",
//               fontWeight: "500",
//               width: "85px",
//               height: "33px",
//               "&:hover": {
//                 backgroundColor: theme.palette.common.white,
//                 color: theme.palette.primary.main,
//                 boxShadow: "0px 3px 6px rgba(0,0,0,8%)",
//               },
//             },
//           },
//         ],
//       },
//     };
//   }
