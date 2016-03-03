let configs = {
  local: {
    env: 'local',
    hostname: 'localhost',
    port: 3000,
    app: {
      name: 'FCC Timestamp Service | Local',
    },
  },
  test: {
    env: 'test',
    hostname: process.env.HOSTNAME || 'localhost',
    port: 3000,
    app: {
      name: 'FCC Timestamp Service | Test',
    },
  },
  production: {
    env: 'production',
    hostname: process.env.HOSTNAME || 'localhost',
    port: process.env.PORT || 30001,
    app: {
      name: 'FCC Timestamp Service',
    },
  },
};

let config = configs[process.env.NODE_ENV || 'local'];

module.exports = config;
