# Thousand Labs

Site officiel : **https://thousandlabs.github.io/**

Page d'accueil de Thousand Labs. Dès l'arrivée, le visiteur choisit entre « Nos applications » (ScoreUp mis en avant) et « Nos services ».

Nos applis (prix affichés sur chaque carte, essai gratuit de 48 h) :

- [ScoreUp](https://thousandlabs.github.io/ScoreUp/) : révisions (QCM, examens chronométrés, exercices corrigés) ; offre Examens 2 000 F pour 1 mois, à vie 5 000 F
- [Budget Flow](https://thousandlabs.github.io/Budget-Flow/) : finances personnelles et petits projets
- [Nexus Track](https://thousandlabs.github.io/Nexus-Track/) : suivi des ventes et répartition des gains
- [Power Log](https://thousandlabs.github.io/Power-Log/) : consommation d'électricité Woyofal / Senelec
- [Tone Dial](https://github.com/ThousandLabs/Tone-Dial) : lecteur de musique Android hors ligne et sans publicité (1 000 F)

Et nos services de configuration de téléphone ([section Nos services](https://thousandlabs.github.io/#services)) :

- Sunny English : immersion en anglais (3 000 FCFA), brochure `Sunny-English.pdf`
- Pack Nika : YouTube sans pub, Duolingo sans limite et blocage des pubs sur Android (5 000 FCFA), brochure `Pack-Nika.pdf`
- Pack Lite : YouTube sans pub, Duolingo sans limite et blocage des pubs sur iPhone (5 000 FCFA), brochure `Pack-Lite.pdf`
- Offre combinée : un pack téléphone + Sunny English pour 7 000 FCFA au lieu de 8 000

Les brochures des services se génèrent depuis `brochures/` : contenu dans `services.js`, puis `node build.js` (Playwright et police Inter).

`thousand-labs-qr.png` : QR code qui mène à la page d'accueil.

[thousandlabs.github.io/qr](https://thousandlabs.github.io/qr/) : page qui affiche ce QR code en grand, à ouvrir sur les tableaux interactifs des classes pour que les élèves le scannent.
