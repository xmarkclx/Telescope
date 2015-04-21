Package.describe({
  name: "telescope:invites",
  summary: "Telescope invites package",
  version: "0.1.0",
  git: "https://github.com/TelescopeJS/telescope-invites.git"
});

Npm.depends({
  // NPM package dependencies
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  // --------------------------- 1. Meteor packages dependencies ---------------------------

  // automatic (let the package specify where it's needed)

  api.use([
    'tap:i18n@1.4.1',
    'iron:router@1.0.5',
    'telescope:settings@0.1.0',
    'telescope:lib@0.3.0',
    'telescope:users@0.1.0',
    'telescope:i18n@0.1.0',
    'aldeed:simple-schema@1.3.2',
    'aldeed:autoform@5.1.2'
  ]);

  // client

  api.use([
    'jquery',
    'underscore',
    'templating',
    'telescope:messages@0.1.0'
  ], ['client']);

  // server

  api.use([
    //
  ], ['server']);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.add_files([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  api.add_files([
    'lib/invites.js'
  ], ['client', 'server']);

  // client

  api.add_files([
    'lib/client/templates/user_invites.html',
    'lib/client/templates/user_invites.js'
  ], ['client']);

  // server

  api.add_files([
    'lib/server/invites.js',
    'lib/server/publications.js'
  ], ['server']);

  // i18n languages (must come last)

  api.add_files([
    'i18n/de.i18n.json',
    'i18n/en.i18n.json',
    'i18n/es.i18n.json',
    'i18n/fr.i18n.json',
    'i18n/it.i18n.json',
    'i18n/zh-CN.i18n.json'
  ], ['client', 'server']);

  // -------------------------------- 3. Variables to export --------------------------------

  api.export([
    //
  ]);

});
