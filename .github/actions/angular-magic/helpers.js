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

module.exports = {
  execute
}
