import { getJestProjects } from '@nx/jest';

export default {
  projects: getJestProjects(),
  fakeTimers: { enableGlobally: true }
};
