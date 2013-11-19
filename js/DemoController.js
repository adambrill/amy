function DemoCtrl($scope) {
	$scope.PhoneNumbers = [
		"715.892.5888"
	];
	
	$scope.ContactList = [
		{
			"firstName": "Amy",
			"lastName": "Manion",
			"phoneNumber": "715.892.5888",
			"emailAddress": "amymanion10@gmail.com",
			"isEditing": false
		}
	];
	
	$scope.NewContactClick = function () {
	
		console.log ("first");
		if ($scope.ContactList.indexOf($scope.newContact) == -1){
			$scope.ContactList.push ($scope.newContact);
		}
		
		$scope.newContact = null;
	
	};

	$scope.editButton = function (contact) {
		//$scope.newContact = contact;
		/*if (contact.isEditing == true) {
			contact.isEditing = false;
		} else {
			contact.isEditing = true;
		}*/
		
		contact.isEditing = !contact.isEditing;

	};
	

}