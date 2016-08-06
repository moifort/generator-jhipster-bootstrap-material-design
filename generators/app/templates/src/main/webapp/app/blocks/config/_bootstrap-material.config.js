(function() {
    'use strict';

    angular
        .module('<%=angularAppName%>')
        .config(bootstrapMaterialDesignConfig);

    compileServiceConfig.$inject = [];

    function bootstrapMaterialDesignConfig() {
        $.material.init();

    }
})();
