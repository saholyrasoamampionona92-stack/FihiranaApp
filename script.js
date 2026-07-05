// ==========================================
//1. BASE DE DONNEES DES CHANTS (FIHIRANA)
// ==========================================
const fihirana = [
    {
        laharana: 1,
        lohateny: "arahabaina aholo ianareo",
        sokajy: "Arahaba",
        tonony: ` arahabaina aholo ianareo
        tonga etoana velon'aina soa amantsara
        tsy solafaka andala tafiditra ny varavarana

        ny teny ambaranay ia hoe mirary soa hatrany
        ho velon'aina tsy ho lany mamy
        hahita ny tsara sy ny soa eto, `
    },
    {
        laharana: 2,
        lohateny: "Andriamanitra Rainay oh",
        sokajy : "Vavaka",
        tonony: `Andriamanitra Rainay oh
        mbola misaotra sy midera ny anaranao izahay noho 'ty fitiavanao
        tsy navelanao ho lavopahoriana izahay na very anaty aizina
        raha tsy nisy masoandro ny fiainanay teo foana ianareo

        koa dia mankasitraka ny amin'ny fitiavanao anay
        aza avelanao ho very any anaty lavaka izahay
        fa tolory ny saina avy aminao`
    },
    {
        laharana: 3,
        lohateny: "isaoranay ny Anaranao",
        sokajy: "misaotra",
        tonony: `isaoranay ny Anaranao noho ny soa lehibe izay natolotrao anay
        na dia mpanota aza izahay dia tsy navelanao
        tonga ny fanahinao nanazava ny fiainanay
        nanolotra anay indray izay lalana tokony izoranay
        
        misaotra misaotra
        mankasitraka e
        deraina Ianao
        Ianao irery no lehibe sy masina`
    },
    {
        laharana: 4,
        lohateny: "lay ora tao getsemane",
        sokajy: "fitiavana",
        tonony: `lay ora tao getsemane nijaly ny Tompo.
        Lay famonjena lehibe no niaretany
        Moa enao efa nandinika ny hevitr'izany ka hoe 
        t@zany ho velona enao
        
        Ireo dinitrin'ny rà nalatsany
        t@ tany rà ny hazo fijalin'izay netiny nakany/
        2fois
        Ho aiza enao tsy anenina ho aiza enao tsy hiverina
        omeny anao ny heriny
        
        Raha nandalo aho ka nahita anao teo
        amin'ny rànao ka hoy aho hoe t@ zan ho velona/
        vehivavy!
        Nataoko t@ lalina toy ny zavamaniry ka 
        indro tonga lehibe ho tsara tarehy! Lehilahy`
    },
    {
        laharana: 5,
        lohateny: "Fikiro mafy",
        sokajy: "fitiavana",
        tonony: `Na manonja ny fiainanao na feno fanahiana
        Aza kivy na ketraka ianao
        Na mavesatra ihany koa ny hazo fijaliana
        Ilay Jesosintsika tsy mba mandao
        Na dia betsaka olana sy mafy ka torovana
        Tsy tantin'ny fo ho aiza moa
        Mankanesa aty hoy Jesosy Kristy
        Fa Izaho hanome fitsaharana
        
        <ref>Ref:
        Atanjaho ny finoana fa na inon-kidona
        Ilay Jesosy tsy hamela anao irery e!
        Aza mba toa Petera f'izy anie ka nianjera
        Tao anaty onjan-drano mahery e!
        izy mantsy tsy ampy finoana
        ka nisalasala raha sendra olana
        ka ny hafatra apetrako aminao anio Jesoa no itafio
        Mivavaha amin'I Jesosy ianao
        F'Izy ihany no afaka hamonjy anao
        Ka fikiro mafy ny tanany matokia
        tiaNY ianao maminy</ref>
        
        Miambena ianao fa ny devoly dia masiaka
        Te hitady izay harapany e!
        Ka mamitaka anao omeny anao avokoa
        Ireo rehetra tadiavin'ny fonao e!
        Dia taritiny ianao ka lalan-diso migodàna
        No velariny handehananao
        Angataho ny fanahy hampahery anao
        Hanazava izay mba hizoranao

        <ref>Ref:
        Atanjaho ny finoanao..................</ref>
        
        Mifikira amin'i Jesoa ianao namako ô!(feo 1)
        Miorena tsara fikiro Jesoa(feo 2 & 3)
        Amin'i Jesoa no apetraho
        Ny fanantenanao namako ô!
        Miorena tsara Jeso no fikiro(feo 4)
        Mafy amin'i Jesosy Kristy
        Ny fanantenanao namako ô!`
    },
    {
        laharana: 6,
        lohateny: "salamo 25",
        sokajy: "fiderana",
        tonony: `Aminao, Jehovah ô, no anandratako ny fanahiko
        Andriamanitra ô! Andriamanitra ô! 
        Hianao no itokiako, aoka tsy ho menatra aho
        Hianao no itokiako, aoka tsy ho menatra aho,
        Aoka tsy hifalian'ny fahavaloko aho ouu 
        
        Eny, tsy hisy ho menatra izay rehetra miandry Anao
        Fa izay mivadika foana re no ho menatra (2 fois) Lehilahy
        
        Ampahafantaro ny làlanao aho, Jehovah ô!
        Ampianaro ny sitrakao aho
        Ampahafantaro ny làlanao, Jehovah ô!! 
        Ampianaro ny sitrakao aho ouu`
    },

    {
        laharana: 7,
        lohateny: "salamo 145",
        sokajy: "fiderana",
        tonony: `Hanandratra Anao aho, hanandratra Anao aho
        Ry Andriamanitro Mpanjaka ôôôôô!!
        Sy hankalaza ny anaraNAO ouu, ny anaraNAO mandrakizay doria
        Hankalaza Anao, isan'andro aho, sy hidera ny anaraNAO, 
        Sy hidera ny anaraNAO, mandrakizay doria doria
        
        Lehibe Jehovah, ka tokony ho deraina indrindra deraina indrindra
        Ary tsy takatry ny saina, ny fahalebiazany,
        ny taranaka rehetra samy hidera ny asanao
        Samy hidera ny asanao, amin'izay mandimby azy
        sy hanambara ny asanao lehibe.`
    }
];
// ================================================
// 2. FONCTION POUR AFFICHER LES CHANTS
// ================================================
const conteneur = document.getElementById('conteneurHira');

function hanehoHira(lisitra) {
    conteneur.innerHTML = ""; // Vide l'ecran

    lisitra.forEach(hira => {
        const hiraBox = document.createElement('div');
        hiraBox.className = "hira-box";
        //1. On convertit d'abord les sauts de ligne par des <br>
        let parolesMiseEnForme = hira.tonony.replace(/\n/g, '<br>');

        //2. On remplace les balises de refrain textuelles par du vrai HTML
        parolesMiseEnForme = parolesMiseEnForme.replace(/<ref>/g, '<span class="refrain">');
        parolesMiseEnForme = parolesMiseEnForme.replace(/<\/ref>/g, '</span>');
        
        hiraBox.innerHTML = ` 
        <h3 class="lohateny">${hira.laharana}. ${hira.lohateny}</h3>
        <p class="sokajy">${hira.sokajy}</p>
        <div class="tonony">${parolesMiseEnForme}</div>
    `;
    conteneur.appendChild(hiraBox);
    });
}

// Afficher tous les chants dès le démarrage de l'application
hanehoHira(fihirana);

// =================================
// 3. BARRE DE RECHERCHE DYNAMIQUE
//==================================
function rechercherChant() {
    const recherche = document.getElementById('barreRecherche').value.toLowerCase();

    const hiraSivana = fihirana.filter(hira => {
        return hira.lohateny.toLowerCase().includes(recherche) ||
               hira.laharana.toString() === recherche ||
               hira.tonony.toLowerCase().includes(recherche); // Cherche aussi DANS les paroles !
    });
               hanehoHira(hiraSivana);
}

// =====================================
// 4. REGLAGE DE LA TAILLE DU TEXTE
// =====================================
let tailleActuelle = 16

function changerTailleTexte(changement) {
    tailleActuelle += changement;
    if (tailleActuelle < 12) tailleActuelle = 12;
    if (tailleActuelle > 28) tailleActuelle = 28;

    const tousLesTextes = document.querySelectorAll('.tonony');
    tousLesTextes.forEach(texte => {
        texte.style.fontSize = tailleActuelle + "px";

    });
}

// ===========================================
// 5. ENREGISTREMENT POUR LE MODE HORS LIGNE
// ===========================================
if ('ServiceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
           .then(reg => console.log('PWA mitsangana tsara'))
           .catch(err => console.log('Misy olana : ', err));
    });
};