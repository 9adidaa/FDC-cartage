const { ADMIN, ADMIN_ROLE, ADVERTISSMENT, CONTACT, CUSTOM_PAGE, CLIENT, CLIENT_EMAIL_VERIFICATION, CLIENT_PASSWORD_RESET, CLIENT_PAYMENT, CATEGORY, PARTNER, PARTNER_OFFER } = require("../models/configs/collectionsNames");

// translation to french
module.exports = {
    language: 'fr',
    translations: {
        actions: {
            new: "Créer un nouveau",
            show: "Afficher",
            edit: "Modifier",
            delete: "Supprimer",
            bulkDelete: 'Supprimer tout',
            list: 'List',
        },
        buttons: {
            save: "Sauvegarder",
            addNewItem: "Ajouter un nouvel élément",
            filter: "Filtrer",
            applyChanges: "Appliquer les modifications",
            resetFilter: "Réinitialiser",
            confirmRemovalMany: "Confirmer la suppression de {{count}} enregistrement",
            confirmRemovalMany_plural: "Confirmer la suppression de {{count}} enregistrements",
            logout: "Déconnecter",
            login: "Se connecter",
            createFirstRecord: "Créer le premier enregistrement",
        },
        labels: {
            navigation: 'Navigation',
            pages: 'Pages',
            selectedRecords: 'Sélectionné ({{selected}})',
            filters: 'Filtres',
            loginWelcome: 'Back Office',
            [ADMIN]: "Administrateurs",
            [ADMIN_ROLE]: "Rôles de l'administration",
            [ADVERTISSMENT]: "Publicités",
            [CONTACT]: "Contactes",
            [CUSTOM_PAGE]: "Pages personnalisées",
            [CLIENT]: "Clients",
            [CLIENT_EMAIL_VERIFICATION]: "Vérification de l'e-mail",
            [CLIENT_PASSWORD_RESET]: "Réinitialisation du mot de passe",
            [CLIENT_PAYMENT]: "Paiement des clients",
            [CATEGORY]: "Catégories",
            [PARTNER]: "Partenaires",
            [PARTNER_OFFER]: "Offres"
        },
        properties: {
            length: 'Longueur',
            from: 'De',
            to: 'À',
            yes: "Oui",
            no: "Non",
            createdAt: "Date de création",
            updatedAt: "Date de modification",
            password: "Mot de passe",
            fullName: "Nom complet",
            isSuperuser: "Est Superuser",
            role: "Rôle d'administrateur",
            name: "Nom",
            "permissions.collection": "Table",
            "permissions.canView": "Afficher",
            "permissions.canDelete": "Supprimer",
            "permissions.canModify": "Modifier",
            "permissions.canCreate": "Créer",

            position: "Position dans l'accueil",

            title: "Titre",
            adImage: "Image de publicité",
            showAtHome: "Afficher dans l'accueil",
            url: "Lien (URL)",
            duration: "Durée",
            "duration.startDate": "Date de début",
            "duration.endDate": "Date de fin",

            firstName: "Prénom",
            lastName: "Nom",
            companyName: "Nom de la société",
            mobilePhone: "Téléphone",
            isContacted: "Est contactée",

            content: "Contenue",

            "profile.firstName": "Prénom",
            "profile.lastName": "Nom",
            "profile.gender": "Genre",
            "profile.mobilePhone": "Téléphone",
            "profile.facebookAccountLink": "Lien du compte facebook",
            "cinId": "Identifiant de cin",
            "rib": "Relevé d'Identité Bancaire",

            isVerified: "Est vérifié",
            isPaid: "Est payé",
            ancestors: "Les ancêtres",
            verificationKey: "Clé de vérification",
            resetCode: "Code de réinitialisation",

            paymentMethod: "Méthode de paiement",
            amount: "Montant (DT)",
            paidFor: "Payé pour",
            paidDate: "Date de paiement",

            searchKeys: "Clés de recherche",
            webSiteURL: "Lien de site web",
            location: "Emplacement",
            timing: "Horaire d'ouverture",
            discountRate: "Taux de remise (%)",
            categories: "Catégories",
            "location.addresses": "Adresses",
            "location.embedMapIframe": "Carte intégrée",
            uploadLogo: "Logo",
            uploadImages: "Images",

            partner: "Partenaire",
            uploadImage: "Image",
            relatedOffers: "Offres similaires"
        },
        messages: {
            successfullyBulkDeleted: '{{count}} enregistrement supprimés avec succès',
            successfullyBulkDeleted_plural: '{{count}} enregistrements supprimés avec succès',
            successfullyDeleted: "L'enregistrement est supprimé avec succès",
            successfullyUpdated: "L'enregistrement est modifier avec succès",
            successfullyCreated: "L'enregistrement est créé avec succès",
            thereWereValidationErrors: "Il y a des erreurs de validation, vérifiez-les ci-dessous",
            noRecordsSelected: "Aucun enregistrement sélectionné",
            theseRecordsWillBeRemoved: "L'enregistrement suivant sera supprimé",
            theseRecordsWillBeRemoved_plural: "Les enregistrements suivants seront supprimés",
            pickSomeFirstToRemove: "Pour supprimer des enregistrements, vous devez d'abord les sélectionner",
            noRecordsInResource: "Il n'y a aucun enregistrement dans cette liste",
            noRecords: "Aucun enregistrement",
            confirmDelete: "Voulez-vous vraiment supprimer cet article ?",
            welcomeOnBoard_title: "Bienvenu !",
            welcomeOnBoard_subtitle: "Bienvenu sur la page d'administration de Bossnet.",
            loginWelcome: "Bienvenu sur la page d'administration de Bossnet.",
            invalidCredentials: 'Email ou Mot de passe incorrect, veuillez réessayer!',
            errorFetchingRecords: "Une erreur s'est produite lors de la récupération des enregistrements.",
            errorFetchingRecord: "Une erreur s'est produite lors de la récupération d'enregistrement."
        },
        resources: {}
    }
}