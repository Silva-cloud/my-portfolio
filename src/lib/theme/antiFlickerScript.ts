const antiFlickerScript = `
  (function() {
    try {
      const selectedTheme = localStorage.getItem('theme') || 'automatic';
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'aqua breeze';
      const activeTheme = selectedTheme === 'automatic' ? systemTheme : selectedTheme;
      document.documentElement.setAttribute('data-theme', activeTheme);
    } catch (e) {}
  })();
`;

export default antiFlickerScript;
