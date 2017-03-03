if (Meteor.users.find().count() === 0) {
	Accounts.createUser({
		username: "admin",
		email: "admin@admin.com",
		password: "admin",
		profile: {
			name: "Admin"
		}
	});
};
