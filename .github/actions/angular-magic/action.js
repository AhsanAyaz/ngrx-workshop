const core = require("@actions/core");
const github = require("@actions/github");
const run = require("github-pages-deploy-action").default;

const execute = (command) => {
  const exec = require("child_process").exec;
  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout);
  });
}
console.log('starting process');
const buildConfig = core.getInput("build_configuration");
const baseHref = core.getInput("base_href");
const githubAccessToken = core.getInput("github_access_token");
const deployFolder = core.getInput("deploy_folder");
execute("npm install -g @angular/cli");
execute("npm install")
execute("ng lint")
execute(`ng build --configuration=${buildConfig} --base-href=${baseHref}`)
run({
  accessToken: githubAccessToken,
  branch: "gh-pages",
  folder: deployFolder,
});
console.log('process ended');
