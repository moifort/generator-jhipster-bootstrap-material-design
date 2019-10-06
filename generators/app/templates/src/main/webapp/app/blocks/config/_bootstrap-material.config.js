(function() {
    'use strict';

    angular
        .module('<%=angularAppName%>')
        .config(bootstrapMaterialDesignConfig);

    bootstrapMaterialDesignConfig.$inject = [];

    function bootstrapMaterialDesignConfig() {
        $.material.init();
    }
})();
