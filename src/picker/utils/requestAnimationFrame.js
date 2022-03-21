// import rAF from one place so that the bundle size is a bit smaller
const rAF =
    typeof window !== 'undefined'
        ? requestAnimationFrame
        : () => {
              console.warn('not !! requestAnimationFrame');
          };

export { rAF as requestAnimationFrame };
