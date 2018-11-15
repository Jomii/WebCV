const BUNDLE = {
  fi: {
    // Home and Header
    tab_about: "Minusta",
    tab_studies: "Opiskelut",
    tab_contact: "Yhteystiedot",
    about: "Olen tietojenkäsittelytieteiden opiskelija Tampereen Yliopistolla. Tämä on henkilökohtainen nettisivuni, jonka tein reactilla osana kurssityötä. Olen kiinnostunut useista ohjelmistokehityksen aiheista, kuten front ja back end. Mobiilikehityksestä " +
    "haluaisin myös päästä jyvälle.",
    pLangs: "Ohjelmointikieliä, joilla olen työskennellyt:",
    // Porfolio
    title_AR_App: "AR Sovellus",
    title_Data_Structures: "Tietorakenteet",
    title_Form: 'Tilauslomake',
    description_Pong: "Tässä on oikeastaan ensimmäinen täysin oma-aloitteinen peliprojektini. Olen aiemmin erilaisilla ohjelmointikursseilla tehnyt useita pelejä mm. ristinolla, matopeli ja uno. Olen kuitenkin em. peleissä hyödyntänyt tehtävän mukana tullutta valmista koodia. Tämä on kuitenkin täysin alusta loppuun itse tekemäni peli. Valitsin yksinkertaisen ja klassisen Pongin, jotta pääsisin jyvälle pelien peruselementeistä, kuten näytölle piirtämisestä ja pelin päivittämisestä.\n\n Haasteellisinta tässä projektissa oli keksiä, että miten toiminnot jaoteltaisiin oliopohjaisesti eri luokkiin. Tiesin, että pelissä esim. logiikka, mailat ja pallo tulisi olla omissa luokissaan, mutta en tiennyt mitä näiden luokkien tulisi konkreettisesti tehdä.\n\n Lähdin ratkaisemaan tätä ongelmaa siten, että tein pelin ensin toimivaksi käytännössä yhdessä luokassa (käyttäjän syötteet eristettynä toiseen luokkaan). Tämän jälkeen pohdin miten olisi järkevää jaotella osat eri luokkiin ja toteutin pelin uudelleen Object Oriented Programming -ohjelmointimenetelmän mukaisesti. Tein pelin aluksi ilman OOP menetelmää, jotta voisin jatkossa helpommin ymmärtää mitä toimintoja kannattaa jakaa eri luokkiin.\n\n Opin tässä projektissa paremmin suunnittelemaan ohjelman rakennetta olio ohjelmoinnin periaatteiden mukaisesti.",
    description_Exceler: "Olen pitänyt Excelissä kirjaa omista tuloista ja menoistani, kirjaamalla kaikki tilitapahtumat verkkopankista käsin Exceliin. Excelin manuaalinen täyttäminen oli kuitenkin työlästä ja päätin helpottaa kirjanpitoa kirjoittamalla ohjelman joka kirjaisi tiedot automaattisesti taulukkoon. Ohjelma on kirjoitettu Python -kielellä, hyödyntäen openpyxl kirjastoa, jolla voi lukea ja kirjoittaa Excel tiedostoihin.\n\n Tässä projektissa suurimmat kompastuskivet olivat tietojen käsittely verkkopankista ladattavasta tekstitiedostosta, sekä taulukon muotoilu openpyxl:n avulla. Tekstitiedostosta saatavasta datasta piti saada tiedot eristettyä joka ei onnistunut merkkijonon .split() funktiolla suoraan koska tiedostossa oli käytetty useammassa eri kohdassa '\\t' merkkiä. Päädyin ratkaisemaan tämän ongelman yksinkertaisesti poistamalla split funktion tuottamasta listasta tyhjät osat.\n\n Kaikenkaikkiaan tämä oli varsin helppo projekti ja sain sen nopeasti valmiiksi. Opin projektin aikana implementoimaan valmista kirjastoa omaan käyttötarkoitukseeni pythonissa.",
    description_AR: "Tehtävänä oli ideoida käytännöllinen sovellus kampukselle, joka hyödyntää lisättyä todellisuutta (AR).",
    description_Data: "Tässä on tekemiäni algoritmeja, joita olen tietorakenteet kurssilla tehnyt.",
    description_Form: "",
    description_Portfolio: "Internet-sivu, jolla nyt olet on Reactilla toteuttamani projekti. Alunperin projekti alkoi osana käyttöliittymien ohjelmoinnin kurssia, mutta sittemmin jatkoin sivun työstämistä omalla ajalla. Sivu on rakennettu käyttäen Material-UI:n komponentteja. Tässä projektissa vahvistin kurssilla opittua asiaa Reactista ja Javascriptistä.\n\n Haasteellisinta tässä projektissa oli saada portfolion tiedot näkyviin modaalinäkymään, lähinnä tietorakenteen suhteen. Tässä on vieläkin vähän korjattavaa. Sivuston muuntaminen mobiiliystävälliseksi tuotti myös päänvaivaa. Kurssityön osana ei ollut mobile-first suunnittelu, joten ajan säästämiseksi tein sivun alunperin näkymään järkevästi vain tietokoneen ruudulta.\n\n  Muutin sivua mobiiliystävällisemmäksi opeteltuani ensin, miten laitteiden koosta saatavaa tietoa voidaan hyödyntää javascriptissä. Sen jälkeen tein muutokset komponentteihini, jotta tätä tietoa voidaan hyödyntää ja muuttaa komponenttien kokoa laitteen näytön koon mukaan.",
    description_RComponents: "Tässä on muutama React komponentti, jotka tein osana käyttöliittymien ohjelmointikurssin kurssityötä. Komponentit ovat siis analoginen kello, sekä piirtotyökalu.",
    description_SOB: "",
    // Studies
    progress: "Edistyminen",
    ects: "OP",
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
    pLangs: "Programming languages I've worked with:",
    // Porfolio
    title_AR_App: "AR App",
    title_Data_Structures: "Data Structures",
    title_Form: 'Order form',
    description_Pong: "",
    description_Exceler: "",
    description_AR: "The task was to come up with a useful app for our campus that utilizes Added Reality.",
    description_Data: "This is a showcase of some algorithms I've done on a course about data structures",
    description_Form: "Form design done on a User Interface course.",
    description_Portfolio: "Worked on this website as a part of a course project and also on my free time. The website was made using React and Material-UI.",
    description_RComponents: "",
    description_SOB: "",
    // Studies
    progress: "Progress",
    ects: "ECTS",
    // Contact
    contact : "Contact me at:",
  },
}

export default BUNDLE;