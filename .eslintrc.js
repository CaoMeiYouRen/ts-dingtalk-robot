const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0
const __WARN__ = process.env.NODE_ENV === 'production' ? 1 : 0
module.exports = {
    root: true,
    globals: {
    },
    env: {
    },
    extends: [
        'cmyr',
    ],
    plugins: [
    ],
    rules: {
        'no-console': 0,
    },
}
