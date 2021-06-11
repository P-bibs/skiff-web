module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.experiments = { syncWebAssembly: true };
    // Important: return the modified config
    return config;
  },
  future: {
    webpack5: true,
  },
};
