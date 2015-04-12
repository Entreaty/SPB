angular
    .module('StarterApp', ['ngMaterial', 'ngAnimate', 'vAccordion'])
    .config(function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    })
    .controller('AppCtrl', function ($scope, $mdSidenav, $window) {
        $scope.panes = [
            {
                header: 'Pane 1',
                content: 'Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.'
            },
            {
                header: 'Pane 2',
                content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.',
                subpanes: [
                    {
                        header: 'Subpane 1',
                        content: 'Lorem ipsum dolor sit amet enim.'
                    }
                ]
            },
            {
                header: 'Pane 3',
                content: 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.',

                subpanes: [
                    {
                        header: 'Subpane 1',
                        content: 'Lorem ipsum dolor sit amet enim.'
                    },
                    {
                        header: 'Subpane 2',
                        content: 'Curabitur et ligula. Ut molestie a, ultricies porta urna. Quisque lorem tortor fringilla sed, vestibulum id.'
                    }
                ]
            }
        ];

        $scope.flag = false;

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
            if ($scope.flag === false){$scope.flag = true;
            }else{
                $scope.flag = false;
            }
        };

        $scope.expandCallback = function (index) {
            console.log('expand:', index);
        };

        $scope.collapseCallback = function (index) {
            console.log('collapse:', index);
        };

        angular.element($window).bind('resize', function() {
            if (innerWidth > 640){
                $mdSidenav('left').close();
            }else{
                 if( $scope.flag ){
                $mdSidenav('left').open();
                 }
            }
        })
    });


