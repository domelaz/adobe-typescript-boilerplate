"use strict";

/**
 * Shortcut to platform
 *
 * @var {boolean}
 */
const WINDOWS = process.platform === 'win32';

/**
 * Spread changes with rsync on remote machines using rsync
 *
 * Export env var before `grunt watch`:
 * export GRUNT_HOSTS="192.168.0.152[,192.168.0.153[:8011]]"
 *   ip   -- IP address, mandatory
 *   port -- optional, default is 8011
 *
 * @param {Object} grunt
 */
module.exports = function(grunt) {
  // No need to sync...
  let exec = "echo 'No GRUNT_HOSTS exported'";
  // ... or harvest remotes
  if (process.env.GRUNT_HOSTS) {
    const devHosts = process.env.GRUNT_HOSTS.split(',');
    const commands = devHosts.map(host => {
      const params = host.split(':');
      const devHostIp = params[0];
      const devHostPort = params[1] || 8011;
      const command = [
        // @fixme replace `echo` with cygwin path
        WINDOWS ? "echo" : "/usr/bin/rsync",
        "-avz",
        "--exclude *.swp",
        `--port ${devHostPort}`,
        "<%= build %>/<%= jsxBuild %>/",
        `${devHostIp}::<%= pkg.name %>`
      ];
      return command.join(" ");
    });
    exec = commands.join(";");
  }

  // grunt.verbose.writeln(exec.yellow);

  return {
    sync: {
      command: exec,
    }
  };
};
