// This file will customise in breakpoints

export default function breakpoints(theme) {
  return {
    keys: ["xs", "sm", "md", "lg", "xl"],

    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },

    // up: f g()
    // down: f h()
    // between: f v()
    // only: f only()
    // not: f not()
    unit: "px",
  };
}
