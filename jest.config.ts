import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  fakeTimers: { enableGlobally: true },
};
