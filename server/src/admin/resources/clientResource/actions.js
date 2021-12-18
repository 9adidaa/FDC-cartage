const handleEncryptedPasswordErrors = require("../utils/handleEncryptedPasswordErrors");
const handlePasswordEncryption = require("../utils/handlePasswordEncryption");
const handleUniqueEmailError = require("../utils/handleUniqueEmailError");



module.exports = {
    handleBeforeCreateAction: async (req) => {
        if (req.method == "post") {
            handlePasswordEncryption(req.payload);
        }
        return req;
    },
    handleBeforeUpdateAction: async (req) => {
        if (req.method == "post") {
            handlePasswordEncryption(req.payload);
        }
        return req;
    },
    handleAfterSaveAction: async (res) => {
        if (res.record && res.record.errors) {
            const { errors } = res.record;
            handleEncryptedPasswordErrors(errors);
            handleUniqueEmailError(errors);
        }
        return res;
    }
}