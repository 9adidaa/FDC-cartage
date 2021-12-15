// All models enums ( choices label )

module.exports = {
    // ads home page positions
    AD_POSITION_CHOICES: [
        { value: "1", label: "Slider" },
        { value: "2", label: "Deuxième section" }, // After slider
        { value: "3", label: "Dernière section" }, // After top offers
    ],
    CLIENT_PROFILE_GENDER_CHOICES: [
        { value: "m", label: "Homme" }, // man
        { value: "f", label: "Femme" } // female
    ],
    CLIENT_CHILD_DIRECTION_CHOICES: [
        { value: "l", label: "Gauche" }, // right
        { value: "r", label: "Droit" }, // left
        { value: "ro", label: "Racine" } // root
    ],
    CLIENT_PAYMENT_METHOD_CHOICES: [
        { value: "ca", label: "Espèces" }, // cash
        { value: "ch", label: "Chèque" }, // check
        { value: "d", label: "Brouillon" }, // draft
        { value: "t", label: "Transfert" }, // transfert
    ]
}