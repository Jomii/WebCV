var data = [
    /* Links are not implemented. */
    { id: 1, sName: "TIEA2.1", name: "Olio-ohjelmoinnin Perusteet", ects: 10, grade: 4, link: "link" },
    { id: 2, sName: "TIEP1", name: "Lausekielinen ohjelmointi I", ects: 5, grade: 5, link: "link" },
    { id: 3, sName: "TIEY4", name: "Tietotekniikkataidot", ects: 3, grade: "HYV", link: "link" },
    { id: 4, sName: "LUOYY003", name: "Orientoivat opinnot, alkuorientaatio", ects: 1, grade: "HYV", link: "link" },
    { id: 5, sName: "TIEP2", name: "Johdatus vuorovaikutteiseen teknologiaan", ects: 5, grade: 3, link: "link" },
    { id: 6, sName: "MTTMY1", name: "Matematiikan peruskäsitteitä", ects: 5, grade: 3, link: "link" },
    { id: 7, sName: "TIEY2", name: "Johdatus tietojenkäsittelytieteisiin", ects: 3, grade: 5, link: "link" },
    { id: 8, sName: "TIEP3", name: "Tietokantojen perusteet", ects: 5, grade: 5, link: "link" },
    { id: 9, sName: "ITIY3", name: "Verkkojulkaisemisen perusteet", ects: 5, grade: 2, link: "link" },
    { id: 10, sName: "LUOYY003", name: "Orientoivat opinnot, tiedonhankintataidot I", ects: 1, grade: "HYV", link: "link" },
    { id: 11, sName: "TIEP5", name: "Lausekielinen ohjelmointi II", ects: 5, grade: 5, link: "link" },
    { id: 12, sName: "TIEP4", name: "Tietojärjestelmän suunnittelun perusteet", ects: 5, grade: 4, link: "link" },
    { id: 13, sName: "PSYP3", name: "Persoonallisuuspsykologia I", ects: 5, grade: 4, link: "link" },
    { id: 14, sName: "TIEA1", name: "Käyttöliittymien perusteet", ects: 5, grade: 5, link: "link" },
    { id: 15, sName: "KKENYHT", name: "Introduction to academic english", ects: 4, grade: 5, link: "link" },
    { id: 16, sName: "MTTTP1", name: "Tilastotieteen johdantokurssi", ects: 5, grade: 2, link: "link" },
    { id: 17, sName: "TIEVA31", name: "Principles of programming graphical user interfaces", ects: 10, grade: 3, link: "link" },
    { id: 18, sName: "KATJOP11", name: "Yrityksen johtamisen perusteet", ects: 5, grade: 3, link: "link" },
    { id: 19, sName: "TIETA19", name: "Practical programming in python", ects: 5, grade: 2, link: "link" },
    { id: 20, sName: "TIETA6", name: "Tietorakenteet", ects: 0, grade: "in progress", link: "link" },
    { id: 21, sName: "MTTMP2", name: "Johdatus matemaattiseen päättelyyn", ects: 0, grade: "in progress", link: "link" },
    { id: 22, sName: "KKSUPRO", name: "Asiantuntijan puheviestintä ja vuorovaikutus", ects: 0, grade: "in progress", link: "link" },
];

let courses = [];
let id = 0;
/* Creates objects with an id attached to them. */
function createData(sName, name, ects, grade, link) {
    id += 1;
    return { id, sName, name, ects, grade, link };
}

export function getCourses() {
    data.map(n => {
        courses.push(createData(n.sName, n.name, n.ects, n.grade, n.link));
    })
    return courses;
}

export default {
    getCourses,
}