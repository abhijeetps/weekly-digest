const { Application } = require('probot');
const createScheduler = require('probot-scheduler');
const { SCHEDULE_REPOSITORY_EVENT } = require('./src/bin/constants');

const myProbotApp = require('.');

describe.skip('My Probot app', () => {
  let app;
  let github;

  beforeEach(() => {
    app = new Application();
    app.load(myProbotApp);
    github = {
      issues: {
        createLabel: jest.fn().mockReturnValue(Promise.resolve({})),
      },
    };
    app.auth = () => Promise.resolve(github);
    createScheduler(app);
  });

  it(`initCreateWeeklyDigest to have been called when it receives ${SCHEDULE_REPOSITORY_EVENT}`, async () => {
    const initCreateWeeklyDigest = jest.fn();
    await app.receive({
      event: SCHEDULE_REPOSITORY_EVENT,
    });
    expect(initCreateWeeklyDigest).toHaveBeenCalled();
  });
});

// For more information about testing with Jest see:
// https://facebook.github.io/jest/
