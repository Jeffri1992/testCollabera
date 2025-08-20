import reporter from "cucumber-html-reporter";

const options = {
  theme: 'bootstrap',
  jsonFile: 'report/cucumber-report.json',
  output: 'report/cucumber-report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "Test Environment": "STAGING",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  },
  failedSummaryReport: true,
};

reporter.generate(options);
