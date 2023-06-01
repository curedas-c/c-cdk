const nxPreset = require('@nrwl/jest/preset').default;

module.exports = { ...nxPreset, fakeTimers: { enableGlobally: true } };
