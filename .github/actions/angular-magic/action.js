const core = require("@actions/core");
const github = require("@actions/github");
const run = require("github-pages-deploy-action").default;

const execute = (command) => {
  return new Promise((resolve, reject) => {
    const exec = require("child_process").exec;
    exec(command, (err, stdout, stderr) => {
      if (err) {
        return reject(err);
      }
      process.stdout.write(stdout);
      resolve();
    });
  })
}
console.log('starting process');
const buildConfig = core.getInput("build_configuration");
const baseHref = core.getInput("base_href");
const githubAccessToken = core.getInput("github_access_token");
const deployFolder = core.getInput("deploy_folder");
execute("npm install")
  .then(() => {
    return execute("node_modules/.bin/ng lint");
  })
  .then(() => {
    return execute(`node_modules/.bin/ng build --configuration=${buildConfig} --base-href=${baseHref}`);
  })
  .then(() => {
    return run({
      accessToken: githubAccessToken,
      branch: "gh-pages",
      folder: deployFolder,
    });
  })
  .then(() => {
    console.log('process ended');
  })
  .catch(err => {
    console.log(err);
    core.setFailed(err);
  });

