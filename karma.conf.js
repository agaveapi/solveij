module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      {pattern: './assets/global/plugins/font-awesome/css/font-awesome.min.css', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-fonticons/style.css', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/simple-line-icons/simple-line-icons.min.css', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/bootstrap/css/bootstrap.css', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/uniform/css/uniform.default.css', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-ui-select/dist/select.min.css', watched: true, included: true, served: true},
      {pattern: './bower_components/datatables/media/css/jquery.dataTables.min.css', watched: true, included: true, served: true},
      {pattern: './bower_components/datatables/media/css/dataTables.bootstrap.css', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-toastr/dist/angular-toastr.css', watched: true, included: true, served: true},
      {pattern: './bower_components/json-formatter/dist/json-formatter.css', watched: true, included: true, served: true},

      {pattern: './assets/global/css/components.css', watched: true, included: true, served: true},
      {pattern: './assets/global/css/plugins.css', watched: true, included: true, served: true},
      {pattern: './assets/layouts/layout/css/layout.css', watched: true, included: true, served: true},
      {pattern: './assets/layouts/layout/css/themes/darkblue.css', watched: true, included: true, served: true},
      {pattern: './assets/layouts/layout/css/custom.css', watched: true, included: true, served: true},

      {pattern: './assets/global/plugins/jquery.min.js', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/bootstrap/js/bootstrap.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/bootstrap-modal/js/bootstrap-modal.js', watched: true, included: true, served: true},
      {pattern: './bower_components/bootstrap-modal/js/bootstrap-modalmanager.js', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/jquery.blockui/index.js', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/jquery.cokie.min.js', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/uniform/jquery.uniform.min.js', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/datatables/media/js/jquery.dataTables.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/datatables/media/js/dataTables.bootstrap.js', watched: true, included: true, served: true},
      {pattern: './bower_components/datatables-buttons/js/dataTables.buttons.js', watched: true, included: true, served: true},
      {pattern: './bower_components/datatables-buttons/js/buttons.colVis.js', watched: true, included: true, served: true},
      {pattern: './bower_components/datatables-buttons/js/buttons.bootstrap.js', watched: true, included: true, served: true},
      {pattern: './bower_components/datatables-responsive/js/dataTables.responsive.js', watched: true, included: true, served: true},
      {pattern: './bower_components/datatables-responsive/js/responsive.bootstrap.js', watched: true, included: true, served: true},
      {pattern: './bower_components/datatables-colreorder/js/dataTables.colReorder.js', watched: true, included: true, served: true},
      {pattern: './bower_components/datatables-fixedcolumns/js/dataTables.fixedColumns.js', watched: true, included: true, served: true},
      {pattern: './bower_components/codemirror/lib/codemirror.js', watched: true, included: true, served: true},
      {pattern: './bower_components/underscore/underscore-min.js', watched: true, included: true, served: true},

      {pattern: './bower_components/angular/angular.js', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/angularjs/angular-sanitize.min.js', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/angularjs/angular-touch.min.js', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/angularjs/angular-cookies.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/ng-file-upload/ng-file-upload.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/checklist-model/checklist-model.js', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/angularjs/plugins/angular-ui-router.min.js', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/angularjs/plugins/ocLazyLoad.min.js', watched: true, included: true, served: true},
      {pattern: './assets/global/plugins/angularjs/plugins/ui-bootstrap-tpls.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-translate/angular-translate.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-sanitize/angular-sanitize.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/oauth-ng/dist/oauth-ng.js', watched: true, included: true, served: true},
      {pattern: './bower_components/ngstorage/ngStorage.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-md5/angular-md5.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-filebrowser/src/js/app.js', watched: true, included: true, served: true},
      {pattern: './bower_components/moment/min/moment-with-locales.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-moment/angular-moment.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-cache/dist/angular-cache.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-utils-pagination/dirPagination.js', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-toastr/dist/angular-toastr.tpls.js', watched: true, included: true, served: true},
      {pattern: './bower_components/json-formatter/dist/json-formatter.js', watched: true, included: true, served: true},

      {pattern: './bower_components/angular-mocks/angular-mocks.js', watched: true, included: true, served: true},
      // {pattern: 'app/tests/controllers/monitors/MonitorsManagerDirectoryController.js', watched: true, included: true, served: true},

      {pattern: './bower_components/angular-sanitize/angular-sanitize.min.js', watched: true, included: true, served: true},
      {pattern: './bower_components/tv4/tv4.js', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-ui-select/dist/select.js', watched: true, included: true, served: true},
      {pattern: './bower_components/objectpath/lib/ObjectPath.js', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-schema-form/dist/schema-form.js', watched: true, included: true, served: true},
      {pattern: './bower_components/angular-schema-form/dist/bootstrap-decorator.js', watched: true, included: true, served: true},

      {pattern: './assets/global/scripts/app.min.js', watched: true, included: true, served: true},
      {pattern: './assets/layouts/layout/scripts/layout.min.js', watched: true, included: true, served: true},
      {pattern: './assets/layouts/global/scripts/quick-sidebar.js', watched: true, included: true, served: true},
      {pattern: './assets/layouts/layout/scripts/demo.min.js', watched: true, included: true, served: true},

      {pattern: './bower_components/agave-angularjs-sdk/Agave/Configuration.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/TestConfiguration.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/APIHelper.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Http/Client/HttpContext.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Http/Client/RequestClient.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Http/Request/HttpRequest.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Http/Response/HttpResponse.js', watched: true, included: true, served: true},

      {pattern: './bower_components/agave-angularjs-sdk/Agave/Controllers/AppsController.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Controllers/FilesController.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Controllers/JobsController.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Controllers/MetaController.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Controllers/MonitorsController.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Controllers/NotificationsController.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Controllers/PostitsController.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Controllers/ProfilesController.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Controllers/SystemsController.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Controllers/TransformsController.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Controllers/StatusIoController.js', watched: true, included: true, served: true},

      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/SystemTypeEnum.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/SystemStatusTypeEnum.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/SystemRoleTypeEnum.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/SystemActionTypeEnum.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/HistoryEvent.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/FileInfo.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/PermissionRequest.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/PermissionStanza.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/FilePermissionRequest.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/FileAction.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/Metadata.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/PostItRequest.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/ProfileRequest.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/Profile.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/SystemAction.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/SystemRoleRequest.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/FileManagementActionTypeEnum.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/FileMkdirAction.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/FileRenameAction.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/FileMoveAction.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/FileCopyAction.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/FilePermission.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/HistoryEvent.js', watched: true, included: true, served: true},
      {pattern: './bower_components/agave-angularjs-sdk/Agave/Models/FileImportRequest.js', watched: true, included: true, served: true},

      {pattern: 'app/js/main.js', watched: true, included: true, served: true},
      {pattern: 'app/js/filters/filters.js', watched: true, included: true, served: true},
      {pattern: 'app/js/filters/spec.js', watched: true, included: true, served: true},
      {pattern: 'app/js/directives/global.js', watched: true, included: true, served: true},
      {pattern: 'app/js/directives/TagsModal.js', watched: true, included: true, served: true},
      {pattern: 'app/js/directives/UserLookup.js', watched: true, included: true, served: true},
      {pattern: 'app/js/directives/QueryBuilder.js', watched: true, included: true, served: true},
      {pattern: 'app/js/controllers/base-directory-controller.js', watched: true, included: true, served: true},
      {pattern: 'app/js/controllers/base-resource-controller.js', watched: true, included: true, served: true},

      {pattern: 'app/js/services/WizardHandler.js', watched: true, included: true, served: true},
      {pattern: 'app/js/services/commons.js', watched: true, included: true, served: true},
      {pattern: 'app/js/services/Tags.js', watched: true, included: true, served: true},
      {pattern: 'app/js/services/Jira.js', watched: true, included: true, served: true},
      {pattern: 'app/js/services/ChangelogParser.js', watched: true, included: true, served: true},
      {pattern: 'app/js/services/ActionsService.js', watched: true, included: true, served: true},
      {pattern: 'app/js/services/PermissionsService.js', watched: true, included: true, served: true},
      {pattern: 'app/js/services/RolesService.js', watched: true, included: true, served: true},
      {pattern: 'app/js/services/MessageService.js', watched: true, included: true, served: true},

      {pattern: 'app/js/controllers/monitors/MonitorsChecksDirectoryController.js', watched: true, included: true, served: true},
      {pattern: 'app/js/controllers/monitors/MonitorsManagerDirectoryController.js', watched: true, included: true, served: true},
      {pattern: 'app/js/controllers/monitors/resource/MonitorsResourceDetailsController.js', watched: true, included: true, served: true},
      {pattern: 'app/js/controllers/monitors/resource/MonitorsResourceAddController.js', watched: true, included: true, served: true},
      {pattern: 'app/js/controllers/monitors/resource/MonitorsResourceEditController.js', watched: true, included: true, served: true},

      {pattern: 'app/js/controllers/systems/SystemDirectoryController.js', watched: true, included: true, served: true},
      {pattern: 'app/js/controllers/systems/resource/SystemsResourceAppsController.js', watched: true, included: true, served: true},
      {pattern: 'app/js/controllers/systems/resource/SystemsResourceDetailsController.js', watched: true, included: true, served: true},


      {pattern: 'app/js/tests/Configuration.js', watched: true, included: true, served: true},
      {pattern: 'app/js/tests/ngMockHttp.js', watched: true, included: true, served: true},
      {pattern: './node_modules/ng-midway-tester/src/ngMidwayTester.js', watched: true, included: true, served: true},


      {pattern: 'app/js/tests/controllers/monitors/MonitorsChecksDirectoryController.js', watched: true, included: true, served: true},
      {pattern: 'app/js/tests/controllers/monitors/MonitorsManagerDirectoryController.js', watched: true, included: true, served: true},
      {pattern: 'app/js/tests/controllers/monitors/resource/MonitorsResourceDetailsController.js', watched: true, included: true, served: true},
      {pattern: 'app/js/tests/controllers/monitors/resource/MonitorsResourceAddController.js', watched: true, included: true, served: true},
      {pattern: 'app/js/tests/controllers/monitors/resource/MonitorsResourceEditController.js', watched: true, included: true, served: true},


      {pattern: 'app/js/tests/controllers/systems/SystemsDirectoryController.js', watched: true, included: true, served: true},
      {pattern: 'app/js/tests/controllers/systems/resource/SystemsResourceAppsController.js', watched: true, included: true, served: true},
      {pattern: 'app/js/tests/controllers/systems/resource/SystemsResourceDetailsController.js', watched: true, included: true, served: true}
    ],

    proxies: {
      '/': 'http://localhost:9000/'
    },

    logLevel: config.LOG_DEBUG,

    // singleRun: true,

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-jasmine-html-reporter'
    ],

    reporters: ['progress', 'html']

  });
};
