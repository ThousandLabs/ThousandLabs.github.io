/* Contenu des brochures des services Thousand Labs. Modifier ici, puis : node build.js */
const COMBO = 'Offre combinée : Pack Nika ou Pack Lite + Sunny English pour 7 000 F au lieu de 8 000 F.';
module.exports = [
{
  id: 'pack-nika', pdf: 'Pack-Nika.pdf', name: 'Pack Nika', kicker: 'Android',
  accent: '#E0A100', soft: '#FFF4D6', icon: 'play', theme: 'nika',
  tagline: 'Ton téléphone Android, sans publicité.',
  hook: 'Marre des publicités qui coupent tes vidéos, et des abonnements qui s’accumulent ?',
  blocks: [
    { i: 'play', t: 'YouTube sans restriction', items: [
      'Aucune publicité, ni dans les vidéos ni dans les bannières',
      'Lecture en arrière-plan et écran éteint : podcasts, cours et musique continuent quand le téléphone est verrouillé',
      'Téléchargement des vidéos pour les regarder sans consommer ton forfait',
      'SponsorBlock : les passages sponsorisés et les intros sont sautés automatiquement',
      'En résumé : toutes les fonctions habituellement bridées sur YouTube sont débloquées' ] },
    { i: 'book', t: 'Duolingo sans limite', items: [
      'Énergie illimitée : tu n’es plus bloqué après quelques exercices',
      'Aucune publicité entre les leçons',
      'Apprentissage sans limite, à ton rythme' ] },
    { i: 'shield', t: 'Tout le téléphone protégé', items: [
      'DNS privé : publicités bloquées dans le navigateur et dans tes applis de tous les jours',
      'Moteur de recherche plus rapide et plus respectueux de ta vie privée',
      'Aucun fichier douteux : installation guidée, pas à pas, devant toi' ] }
  ],
  why: [
    ['repeat', 'Prestation unique', 'Pas d’abonnement : tu paies une seule fois, rien à refaire chaque mois.'],
    ['sync', 'Remplacement inclus', 'Si une solution cesse de fonctionner, nous en mettons une autre en place.'],
    ['users', 'Fait devant toi', 'Installation en personne à l’ISM, en 20 minutes environ.']
  ],
  price: '5 000 F', priceSub: 'Paiement unique · Android uniquement',
  combo: COMBO
},
{
  id: 'pack-lite', pdf: 'Pack-Lite.pdf', name: 'Pack Lite', kicker: 'iPhone',
  accent: '#2563eb', soft: '#eaf1ff', icon: 'apple',
  tagline: 'Ton iPhone, sans publicité.',
  hook: 'Tu penses qu’on ne peut pas bloquer les publicités sur iPhone ? On a une solution simple, rapide et efficace.',
  blocks: [
    { i: 'play', t: 'YouTube sans publicité', items: [
      'YouTube sans publicité, avec lecture en arrière-plan : tu gardes tes abonnements, tes playlists et ton historique',
      '5 versions installées en même temps : si l’une tombe, tu passes simplement à une autre',
      'Google combat en permanence ces solutions : une version peut cesser de fonctionner à tout moment. Dans ce cas, nous en mettons une autre en place. Il existe de nombreuses applis capables de le faire' ] },
    { i: 'book', t: 'Duolingo, version web', items: [
      'La version web de Duolingo, dans le navigateur : aucune publicité',
      'Le retour du système de cœurs : 5 cœurs à la place de l’énergie',
      'Tes leçons et ta progression restent les mêmes, sur ton compte' ] },
    { i: 'shield', t: 'Pubs bloquées partout', items: [
      'Profil DNS sécurisé installé directement sur ton iPhone',
      'Fini les bannières et les fenêtres publicitaires dans la plupart des applis' ] }
  ],
  why: [
    ['lock', 'Zéro risque', 'Pas de jailbreak, pas d’ordinateur, aucune manipulation qui pourrait bloquer ton iPhone.'],
    ['repeat', 'Prestation unique', 'Pas d’abonnement. Si une version tombe, elle est remplacée.'],
    ['users', 'Fait devant toi', 'Configuration en personne à l’ISM, en 20 minutes environ.']
  ],
  price: '5 000 F', priceSub: 'Paiement unique · iPhone uniquement',
  combo: COMBO
},
{
  id: 'sunny-english', pdf: 'Sunny-English.pdf', name: 'Sunny English', kicker: 'Immersion en anglais',
  accent: '#d97706', soft: '#fff4e0', icon: 'sun',
  tagline: 'Installation en 20 minutes, puis 10 minutes par jour.',
  hook: 'Tu veux progresser en anglais pour tes cours, tes entretiens de stage ou les contenus que tu suis, mais tu ne sais pas par où commencer ?',
  blocks: [
    { i: 'phone', t: 'Ton téléphone, configuré pour l’anglais', items: [
      'Trois applis complémentaires installées et réglées pour toi : une pour la routine et les bases, une pour mémoriser le vocabulaire, une pour habituer ton oreille',
      'Aucun abonnement à payer ensuite',
      'Téléphone (ou téléphone secondaire) passé en anglais, réseaux sociaux et fils d’actualité orientés vers l’anglais' ] },
    { i: 'target', t: 'Une routine adaptée à ton niveau', items: [
      '2 minutes au début pour situer ton niveau : débutant ou intermédiaire',
      'Une routine quotidienne de 10 minutes, ajustée à ce niveau',
      'Un guide clair, avec des règles simples pour tenir et mesurer tes progrès' ] },
    { i: 'school', t: 'Pensé pour les étudiants de l’ISM', items: [
      'Utile pour tes cours d’anglais et tes futurs entretiens de stage',
      'Des conseils pour écouter de l’anglais au quotidien : musique, vidéos, réglages' ] }
  ],
  why: [
    ['clock', 'Rapide', 'Tout est installé en 20 minutes, devant toi.'],
    ['repeat', 'Prestation unique', 'Pas d’abonnement : tu paies une seule fois.'],
    ['spark', 'Honnête', 'Nous fournissons le cadre, ta régularité fait le reste.']
  ],
  price: '3 000 F', priceSub: 'Paiement unique · Android et iPhone',
  combo: 'Offre combinée : Sunny English + Pack Nika ou Pack Lite pour 7 000 F au lieu de 8 000 F.'
}];
