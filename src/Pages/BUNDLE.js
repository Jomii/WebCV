const BUNDLE = {
  fi: {
    // Home and Header
    tab_about: "Minusta",
    tab_studies: "Opiskelut",
    tab_contact: "Yhteystiedot",
    about: "Olen Miika, tietojenkäsittelytieteiden opiskelija Tampereen Yliopistolla. Päädyin opiskelemaan tietojenkäsittelytieteitä, koska olen aina halunnut tehdä jotain luovaa ja haastavaa. Sellaista, jossa pääsisin myös samalla toteuttamaan itseäni.\n\n Nuorempana olin jo kiinnostunut siitä, mitä kaikkea tietokoneella pystyy tekemään ja yläasteella tein tietokonetunnilla ensimmäisen pelini Blenderillä (Peli, jonka tein oli Labyrintti, jossa kuula ohjataan sokkelossa maaliin). Oli siis luonnollista lopulta päätyä opiskelemaan tietokoneisiin ja ohjelmointiin liittyvää alaa, ja motivaatiota onkin opiskeluun riittänyt muutaman välivuoden jälkeen.\n\n Tällä hetkellä suurin osa ajastani menee opiskeluun, ja omien projektieni työstämiseen. Tavoitteenani on oppia paljon ohjelmistoalalla ja koen alan erittäin omakseni, ja minulla onkin paljon mielenkiinnon kohteita alalla. Olen kiinnostunut mm. tekoälystä, mobiili- ja webkehittämisestä, pelien kehittämisestä ja käyttöliittymien suunnittelusta ja toteuttamisesta. ",
    welcome: "Hei siellä! Tervetuloa verkkosivuilleni!",
    pLangs: "Ohjelmointikieliä, joilla olen työskennellyt:",
    // Porfolio
    title_AR_App: "AR Sovellus",
    title_Data_Structures: "Tietorakenteet WIP",
    title_Form: 'Tilauslomake',
    description_Pong: "Tässä on oikeastaan ensimmäinen täysin oma-aloitteinen peliprojektini. Olen aiemmin erilaisilla ohjelmointikursseilla tehnyt useita pelejä mm. ristinolla, matopeli ja uno. Olen kuitenkin em. peleissä hyödyntänyt tehtävän mukana tullutta valmista koodia. Tämä on kuitenkin täysin alusta loppuun itse tekemäni peli. Valitsin yksinkertaisen ja klassisen Pongin, jotta pääsisin jyvälle pelien peruselementeistä, kuten näytölle piirtämisestä ja pelin päivittämisestä.\n\n ",
    description_Exceler: "Olen pitänyt Excelissä kirjaa omista tuloista ja menoistani, kirjaamalla kaikki tilitapahtumat verkkopankista käsin Exceliin. Excelin manuaalinen täyttäminen oli kuitenkin työlästä ja päätin helpottaa kirjanpitoa kirjoittamalla ohjelman joka kirjaisi tiedot automaattisesti taulukkoon. Ohjelma on kirjoitettu Python -kielellä, hyödyntäen openpyxl kirjastoa, jolla voi lukea ja kirjoittaa Excel tiedostoihin.\n\n Tässä projektissa suurimmat kompastuskivet olivat tietojen käsittely verkkopankista ladattavasta tekstitiedostosta, sekä taulukon muotoilu openpyxl:n avulla. Tekstitiedostosta saatavasta datasta piti saada tiedot eristettyä joka ei onnistunut merkkijonon .split() funktiolla suoraan koska tiedostossa oli käytetty useammassa eri kohdassa '\\t' merkkiä. Päädyin ratkaisemaan tämän ongelman yksinkertaisesti poistamalla split funktion tuottamasta listasta tyhjät osat.\n\n Kaikenkaikkiaan tämä oli varsin helppo projekti ja sain sen nopeasti valmiiksi. Opin projektin aikana implementoimaan valmista kirjastoa omaan käyttötarkoitukseeni pythonissa.",
    description_AR: "Lisätään myöhemmin",
    description_Data: "Lisätään myöhemmin",
    description_Portfolio: "Internet-sivu, jolla nyt olet on Reactilla toteuttamani projekti. Alunperin projekti alkoi osana käyttöliittymien ohjelmoinnin kurssia, mutta sittemmin jatkoin sivun työstämistä omalla ajalla. Sivu on rakennettu käyttäen Material-UI:n komponentteja. Tässä projektissa vahvistin kurssilla opittua asiaa Reactista ja Javascriptistä.\n\n Haasteellisinta tässä projektissa oli saada portfolion tiedot näkyviin modaalinäkymään, lähinnä tietorakenteen suhteen. Tässä on vieläkin vähän korjattavaa. Sivuston muuntaminen mobiiliystävälliseksi tuotti myös päänvaivaa. Kurssityön osana ei ollut mobile-first suunnittelu, joten ajan säästämiseksi tein sivun alunperin näkymään järkevästi vain tietokoneen ruudulta.\n\n  Muutin sivua mobiiliystävällisemmäksi opeteltuani ensin, miten laitteiden koosta saatavaa tietoa voidaan hyödyntää javascriptissä. Sen jälkeen tein muutokset komponentteihini, jotta tätä tietoa voidaan hyödyntää ja muuttaa komponenttien kokoa laitteen näytön koon mukaan.",
    description_RComponents: "Tässä on muutama React komponentti, jotka tein osana käyttöliittymien ohjelmointikurssin kurssityötä. Komponentit ovat siis analoginen kello, sekä piirtotyökalu. Molemmat komponentit toteutin itse hyödyntäen Reactissa olevia lifecycle metodeja.\n\n Haasteellisinta oli saada javascriptin canvas toimimaan halutulla tavalla. Piirtotyökalun canvaksen kanssa oli ongelmia saada se toimimaan sivustosta riippumatta olevana komponenttina. Canvas ei ottanut hiiren x ja y koordinaatteja oikeasta kohdasta vaan hiiren sijainnista eteenpäin alas ja oikealle.\n\n Sain tämän ongelman ratkaistua kun löysin nopeasti vastaavanlaisen tilanteen, jota joku muu oli internetissä kysynyt ja ratkaisu löytyi samaisesta ketjusta. Ongelma ratkesi kun vaihdoin canvaksen metodin offsetLeft():n metodiin getBoundingClientRect().",
    description_SOB: "Olio-ohjelmoinnin kurssilla tekemäni harjoitustyö, jossa tarkoitus oli tehdä viestialue. Viestialue toimii komentokehotteessa annettavilla syötteillä. Komennoilla voi lisätä ketjuja, viestejä ja vastauksia viesteihin.\n\n Hankalinta tässä projektissa oli hahmotella miten toiminnot saadaan jaettua eri luokkiin. Aloitin tekemällä luokkien kuvauksista ja toiminnoista kaaviota, jotta saisin hahmoteltua koko ohjelman toimintaa ja eri luokkien välisiä yhteyksiä. Hahmotteluvaiheen ansiosta sain selville miten ohjelman eri osat toimivat keskenään ja sain ne sitten toteutettua.",
    // Studies
    progress: "Edistyminen",
    ects: "OP",
    compCourses: "Suoritetut kurssit:",
    // Contact
    contact : "Ota minuun yhteyttä:",
  },
  en: {
    // Home and Header
    tab_about: "About me",
    tab_studies: "Studies",
    tab_contact: "Contact",
    about: "I'm a computer science student at the University of Tampere. This is my personal website I built as a project for a course using react. I'd like to learn a wide variety of development topics, eg. front and back end. Mobile development is also something " +
    "I'd like to get my hands on. ",
    welcome: "Hey there! Welcome to my website!",
    pLangs: "Programming languages I've worked with:",
    // Porfolio
    title_AR_App: "AR App",
    title_Data_Structures: "Data Structures WIP",
    title_Form: 'Order form',
    description_Pong: "Description is not available in English yet.",
    description_Exceler: "Description is not available in English yet.",
    description_AR: "Description is not available in English yet.",
    description_Data: "Description is not available in English yet.",
    description_Form: "Description is not available in English yet.",
    description_Portfolio: "Description is not available in English yet.",
    description_RComponents: "Description is not available in English yet.",
    description_SOB: "Description is not available in English yet.",
    // Studies
    progress: "Progress",
    ects: "ECTS",
    compCourses: "Completed courses:",
    // Contact
    contact : "Contact me at:",
  },
}

export default BUNDLE;