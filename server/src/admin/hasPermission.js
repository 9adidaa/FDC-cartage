const findCollectionPermission = (collection, admin) => {
        if (admin.role) {
            const adminPermissions = admin.role.permissions;
            return adminPermissions.find(
                (permission) => permission.collection == collection
            );
        }
    }
    // return a function that checks if admin has specific permission (canView, canModiy, ...) in specific collection ( admin, contact, customPage, ... )
module.exports = (collection, permission) => ({ currentAdmin }) => {
    const collectionPermission = findCollectionPermission(collection, currentAdmin);
    return currentAdmin.isSuperuser || (collectionPermission && collectionPermission[permission])
};