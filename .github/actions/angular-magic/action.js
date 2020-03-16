const core = require("@actions/core");
const { execute, isFalsyVal } = require('./helpers');
const run = require("github-pages-deploy-action").default;

const buildConfig = core.getInput("build_configuration");
const baseHref = core.getInput("base_href");
const githubAccessToken = core.getInput("github_access_token");
const deployFolder = core.getInput("deploy_folder");
const runLint = core.getInput("run_lint");
const main = async () => {
  try {
    await execute("npm install")
    if (!isFalsyVal(runLint)) {
      await execute("node_modules/.bin/ng lint")
    }
    await execute(`node_modules/.bin/ng build --configuration=${buildConfig} --base-href=${baseHref}`)
    await run({
      accessToken: githubAccessToken,
      branch: "gh-pages",
      folder: deployFolder,
    })
    console.log('project deployed');
  }
  catch (e) {
    console.log(e);
    core.setFailed(e);
  }
}

main()
