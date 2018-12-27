
/*
#     CloudBoost - Core Engine that powers Bakend as a Service
#     (c) 2014 HackerBay, Inc. 
#     CloudBoost may be freely distributed under the Apache 2 License
*/


module.exports = {
	Schema: 'Schema',
	Role: 'Role',
	User: 'User',
	Device: 'Device',
	Settings: 'Settings',
	adminRole: 'Admin',
	guestRole: 'Guest',
	tableRestrictedList: ["Role", "User", "Device", "Settings"],
	listToModifyColumns: ["Role", "User", "Device", "Settings"],
	listRemoveSubItemColumns: ["ACL", "expires", "updatedAt", "createdAt", "_version", "_isModified"],
	tableToChangeAppCache: ["Role", "Settings"]
};