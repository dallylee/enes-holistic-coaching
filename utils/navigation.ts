export const getLocationWithHash = () => {
  if (typeof window === 'undefined') return '/';
  return `${window.location.pathname}${window.location.hash}`;
};

export const getBaseRoot = () => {
  if (typeof window === 'undefined') return '/';
  const segments = window.location.pathname.split('/').filter(Boolean);
  if (segments[segments.length - 1] === 'client-login') {
    segments.pop();
  }
  if (segments.length === 0) {
    return '/';
  }
  return `/${segments.join('/')}/`;
};

