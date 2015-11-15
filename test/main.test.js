/**
 * Created by davidesozzi on 15/11/15.
 */

describe('Contact List Manager', function() {
    beforeEach(module('contactApp'));

    var $controller,
        scope;


    beforeEach(inject(function ($rootScope, $contactController) {
        scope = $rootScope.$new();
        $controller = $contactController('contactListController', {
            $scope: scope
        });
    }));



    describe('$scope.inEdit', function() {
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('contactListController', { $scope: $scope });
        });

        it('test the "New contact" functionality ', function() {
            $scope.newContact();
            expect($scope.inEdit && $scope.isNewContact).toBeTruthy();
        });

        it('resets the app status', function() {
            $scope.cancelEdit();
            expect( $scope.inEdit && $scope.isNewContact && $scope.currentContactIdx).toBeFalsy();
        });

        it('test the save new contact', function() {
            var contactLength = $scope.contacts.length;

            // does it overwrite the function for future reference?
            $scope.getContactFormFields = function(){
                return {
                    name : 'Test1',
                    tel: '123-456-789',
                    email: 'test@test.com'
                }
            }

            $scope.saveNewContact();

            expect($scope.contacts.length).toBe(contactLength + 1);
        });
    });
});

