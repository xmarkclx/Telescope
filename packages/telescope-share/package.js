Package.describe({
  name: "telescope:share",
  summary: "Telescope share module package",
  version: "0.1.0",
  git: "https://github.com/TelescopeJS/telescope-share.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'jquery',
    'underscore',
    'templating',
    'fourseven:scss@2.1.1'
  ], 'client');

  api.use([
    'telescope:lib@0.3.0'
  ]);

  api.add_files([
    'lib/share.js'
  ], ['client', 'server']);

  api.add_files([
    'lib/client/post_share.html',
    'lib/client/post_share.js',
    'lib/client/post_share.scss'
  ], ['client']);

  // api.export();
});
