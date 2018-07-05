// keys.ts -- figure out which keys to use
export const keys =
  process.env.NODE_ENV === 'production' ? require('./prod') : require('./dev');
