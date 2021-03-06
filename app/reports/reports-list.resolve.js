getReportsList.$inject = ['reportservice','$q', '$http', '$stateParams', 'spinnerService'];

function getReportsList(reportservice, $q, $http, $stateParams, spinnerService) {
    // return reportservice.getReportsList();
     var def = $q.defer();
         spinnerService.show();
            //$http.get("reports/list")
             $http.get("https://rtdashboardp.rno.apple.com:9012/reports/list?callback=angular.callbacks._0")
                .success(function(data) {
                    def.resolve(data);
                    spinnerService.hide();
                })
                .error(function() {
                    def.reject("Failed to get data");
                });
            return def.promise;
}

module.exports = getReportsList;
