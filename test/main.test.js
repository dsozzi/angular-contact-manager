/**
 * Created by davidesozzi on 15/11/15.
 */

describe('Contact List Manager', function() {
    beforeEach(module('contactApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('Fully testing the Contact Manager app --- ', function() {
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('contactListController', { $scope: $scope });
        });



        it('test the "New contact" functionality ', function() {
            $scope.newContact();
            expect($scope.inEdit && $scope.isNewContact).toBeTruthy();
        });



        it('reset the app status', function() {
            $scope.cancelEdit();
            expect( $scope.inEdit && $scope.isNewContact && $scope.currentContactIdx).toBeFalsy();
        });



        it('test the "Save New Contact" functionality', function() {
            var contactLength = $scope.contacts.length;

            $scope.inEdit = {
                name : 'Davide',
                tel: '123-456-789',
                email: 'test@test.com'
            };

            $scope.saveNewContact();

            expect($scope.contacts.length).toBe(contactLength + 1);
        });


        it('test the form return', function() {
            $scope.inEdit = {
                name : 'Davide',
                tel: '123-456-789-',
                email: 'test@test.com'
            };

            var form = $scope.getContactFormFields();

            expect(form).toEqual({
                name : 'Davide',
                tel: '123-456-789-',
                email: 'test@test.com'
            });
        });


        it('update the first contact', function() {
            $scope.currentContactIdx = 0;
            var contact = $scope.contacts[0];

            $scope.inEdit = {
                name : 'Davide',
                tel: '123-456-789',
                email: 'test@test.com'
            };

            $scope.updateContent()

            expect(contact.name).toEqual('Davide');
        });

    });
});

