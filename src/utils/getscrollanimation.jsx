export default function getScrollAnimation() {
    return {
      offscreen: {
        y: 150,
        opacity: 0,
      },
      onscreen: (args = {}) => {
        const { duration = 2 } = args; // Provide a default value for duration
        return {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            duration,
          },
        };
      },
    };
  }
  