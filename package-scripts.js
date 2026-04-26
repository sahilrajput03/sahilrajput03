module.exports = {
  scripts: {
    default: 'nps dev',
    dev: {
      // Serve on internal ip address
      default: 'bundle exec jekyll serve --livereload --incremental --host=0.0.0.0',
      // Serve on localhost
      localonly: 'bundle exec jekyll serve --livereload --incremental',
    },
    cl: 'auto-changelog --commit-limit false'
  }
};
