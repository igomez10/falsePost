var request = require('request');

var headers = {
  'Origin': 'https://wwunilandeseduco.weebly.com',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36',
  'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryPDxYQ5D0P1Ro5fLz',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Cache-Control': 'max-age=0',
  'Referer': 'https://wwunilandeseduco.weebly.com/',
  'Connection': 'keep-alive',
  'Cookie': 'is_mobile=0; language=es; _sp_ses.bbff=*; _snow_ses.d98f=*; __qca=P0-392904038-1518595837771; _sp_id.bbff=8d98c45e-f895-4d0d-b51c-3144b49d569d.1518595838.1.1518596052.1518595838.67718245-79d2-4281-9280-ad18950c00e7; _snow_id.d98f=24b4b3b5-512e-4d1c-b571-ecb672eea3d8.1518595838.1.1518596052.1518595838.5027456a-6148-4353-944b-d396311bfe32'
};



var lastNames = [
  "Rodriguez",
  "Gomez",
  "Gonzalez",
  "Martinez",
  "Garcia",
  "Lopez",
  "Hernandez",
  "Sanchez",
  "Ramirez",
  "Perez",
  "Dias",
  "Muñoz",
  "Rojas",
  "Moreno",
  "Jimenez",
]

var firstNames = [
  "laura ",
  "Andres",
  "Angie",
  "Juan",
  "Diana",
  "david",
  "daniela",
  "Diego",
  "Maria",
  "Alejandro",
  "Valentina",
  "camilo",
  "paola ",
  "carlos",
  "karen ",
  "SERGIO",
  "Alejandra",
  "sebastian",
  "luisa",
  "daniel",
  "camila",
  "Julian",
  "Gabriela",
  "Cristian",
  "ADRIANA",
  "Jose",
  "Tatiana  ",
  "ivan",
  "Valeria",
  "brayan",
  "Andrea ",
  "juan david",
  "paula",
  "Juan Felipe",
  "natalia ",
  "Santiago",
  "angelica",
  "Nicolas ",
  "Erika",
  "Duvan ",
  "Maria Alejandra",
  "johan",
  "karina",
  "Esteban",
  "Sofia",
  "Jhon",
  "Ingrid",
  "jonathan",
  "cindy",
  "luis",
  "Lizeth",
  "Ricardo",
  "katherine",
  "william",
  "nataly",
  "Edward",
  "Maria Fernanda",
  "Danilo",
  "Julieth",
  "Javier",
  "Jessica ",
  "pedro",
  "carolina",
  "Bryan",
  "Ana Maria",
  "Mateo",
  "Ana",
  "Miguel",
  "Alisson",
  "Brayan Rendon",
  "Allison",
  "Harold",
  "Jeimy",
  "fabian",
  "Sonia",
  "Michaell",
  "Mariana",
  "Oscar ",
  "Dayanna",
  "walter",
  "Yennifer",
  "GILBERT",
  "veronica",
  "Keneth",
  "leidy",
  "joseph ",
  "Lady",
  "Brandon",
  "Gina",
  "Michael ",
  "yeimi",
  "juan diego",
  "Lina ",
  "Jair",
  "yuliza",
  "terrance",
  "vanesa ",
  "juan sebastian",
  "nidia",
  "Eddy ",
  "Yenni",
  "KEVIN",
  "Juliana",
  "edwin",
  "Lisseth Martinez",
  "sebastian romero ",
  "Evelyn",
  "Victor preciado",
  "Ayleen.",
  "richard",
  "Maria Jose ",
  "Jairo",
  "astrid",
  "alexander",
  "lucia",
  "Manuel",
  "vanessa",
  "edgar",
  "Mafe",
  "MIYER",
  "Carolina Marin",
  "Juan Camilo",
  "carolina herrera",
  "yerson",
  "Jennifer",
  "Juan Felipe Ortiz L",
  "isabella",
  "Jhonathan",
  "ximena ",
  "jordano",
  "Catalina ",
  "Royer Steven Mahecha",
  "Mabel",
  "andrey",
  "sandra",
  "cristian ramirez",
  "stefania",
  "Killyams Medina",
  "Edna Rocha Rubiano ",
  "Jesus Alberto",
  "Daniella",
  "Yesid",
  "Antonia",
  "alexis",
  "Dayana",
  "Nimue",
  "yamile",
  "Simon Rincon",
  "dania",
  "YAIR FONSECA",
  "Miss Cervantes",
  "Juan Esteban",
  "mileva carolina",
  "Andres Bernal",
  "yenifer",
  "Guillermo",
  "Jesica Virguez",
  "Carlos Alberto",
  "Leiry",
  "ronal",
  "Angelica Maria ",
  "Lorena",
  "paola bejarano",
  "Carlos88",
  "Yerlis ",
  "jose luis",
  "Janeth",
  "Wilmer A. Herrera C.",
  "Valery",
  "albert charry",
  "Andrea Mojica",
  "Maicol",
  "lorena pulido ",
  "cristian santiago ",
  "Nana",
  "Facundo",
  "maria juliana laguad",
  "Fernando",
  "Yulieth",
  "Ferney",
  "WINDY ACOSTA",
  "Jhohan",
  "Yadira",
  "diego andres ",
  "Marisol",
  "camilo rodriguez.",
  "WENDY",
  "brahyam",
  "Madelein",
  "lisandro",
  "Figui",
  "Jeronimo Carrascal",
  "Alaina",
  "Luis Miguel Alvarado",
  "Ani",
  "Roger",
  "Lorena",
  "Cristhian",
  "Sandra Milena",
  "Holman"
]

var passwords = [
  "elpimentero",
  "elpolicía",
  "elvonte",
  "eldestornildor",
  "elgabinete",
  "nubdo",
  "elapio",
  "haceviento",
  "elcaldero",
  "elhijo",
  "elhornomicroondas",
  "básquetbol",
  "harina",
  "elamigo",
  "mantequil",
  "elpañal",
  "gasolinera",
  "eltío",
  "bolsa",
  "escoba",
  "servilleta",
  "vadora",
  "elcocinero",
  "elpavo",
  "almohada",
  "elcxon",
  "loscalcetines",
  "elaguacate",
  "elsalero",
  "sierraparametales",
  "losguantes",
  "pastelería",
  "sartén",
  "elhuracán",
  "ardil",
  "verde",
  "hacesol",
  "losmuebles",
  "elbaño",
  "trompa",
  "eltrajedebaño",
  "eledificiodeoficinas",
  "negro",
  "lospantalones",
  "trompeta",
  "losapartamentos",
  "elarmario",
  "jabonera",
  "uva",
  "elbolsodemano",
  "eldespertador",
  "elcolibrí",
  "spapas",
  "equitación",
  "nuez",
  "eljugo",
  "losabuelos",
  "rosa",
  "elcinturón",
  "rugby",
  "guitarra",
  "mantequildemaní",
  "jarra",
  "peluquería",
  "jalea",
  "elcuarto",
  "lechuza",
  "elsofá",
  "hija",
  "gasolina",
  "elfregadero",
  "rojo",
  "elsándwich",
  "letra",
  "spntas",
  "lechuga",
  "elyerno",
  "elbisonte",
  "toal",
  "pera",
  "elmosquito",
  "madre",
  "oveja",
  "raya",
  "elágui",
  "elmarido",
  "lima",
  "elescarabajo",
  "elascensor",
  "pijama",
  "arena",
  "eltomate",
  "gorra",
  "eltermómetro",
  "elbolso",
  "neblina",
  "elmaní",
  "eltulipán",
  "elqueso",
  "cómoda",
  "elalga",
  "mesita",
  "elcardenal",
  "vaca",
  "loszapatosdetacónalto",
  "elsombrero",
  "violeta",
  "rata",
  "nebuloso",
  "azul",
  "banca",
  "pintura",
  "elrábano",
  "elcinturón",
  "nube",
  "elespejo",
  "elinundacióndeagua",
  "araña",
  "losfrijoles",
  "eltraje",
  "elcarrito",
  "iguana",
  "elloro",
  "sil",
  "elcuerno",
  "bádminton",
  "suegra",
  "elratón",
  "elcisne",
  "fútbol",
  "elaperitivo",
  "eltostador",
  "cuchara",
  "oferta",
  "natación",
  "sobrina",
  "voleibol",
  "elburro",
  "anaranjado",
  "elpollo",
  "elescurridor",
  "elnovio",
  "eltecho",
  "paloma",
  "vaporera",
  "elgorrión",
  "elcerdo",
  "golf",
  "camarera",
  "ventoso",
  "elcuervo",
  "mostaza",
  "morado",
  "cama",
  "angui",
  "pya",
  "camiseta",
  "lámpara",
  "pingpong",
  "elvamanos",
  "ventana",
  "humedad",
  "remocha",
  "cebra",
  "jockey",
  "elescritorio",
  "lnta",
  "elvestido",
  "libélu",
  "elbasurero",
  "agujeta",
  "mariposa",
  "elformón",
  "elpiano",
  "elcocodrilo",
  "aspiradora",
  "elautobus",
  "elgrillo",
  "elcastillodearena",
  "licuadora",
  "cucaracha",
  "elsillón",
  "lostambores",
  "panadería",
  "losprimos",
  "hormiga",
  "maleta",
  "pantaleta",
  "rosa",
  "elelefante",
  "camisa",
  "repisa",
  "gartija",
  "cajadeherramientas",
  "cuna",
  "elchofer",
  "comida",
  "elsillón",
  "elpto",
  "elabuelo",
  "hoja",
  "abue",
  "nevera",
  "elgusanodeseda",
  "eldurazno",
  "cabra",
  "elcodor",
  "eloso",
  "cena",
  "leche",
  "eltenedor",
  "elosodepeluche",
  "oficinadecorreos",
  "elsuegro",
  "eltallo",
  "esposa",
  "elalce",
  "mesitadenoche",
  "mantis",
  "elpiano",
  "nuera",
  "ducha",
  "elmartillo",
  "estufa",
  "elzorro",
  "tenis",
  "ssábanas",
  "elsobrino",
  "ardillita",
  "elcuartodeservicios",
  "lluvia",
  "sombril",
  "coliflor",
  "mamá",
  "elcaballo",
  "cocina",
  "familia",
  "víbora",
  "elrenacuajo",
  "cajue",
  "elpadre",
  "oril",
  "elpezespada",
  "elequipaje",
  "onda",
  "cobija",
  "elhedo",
  "abeja",
  "eldesayuno",
  "losgrandesalmacenes",
  "banana",
  "mayonesa",
  "elrefrigerador",
  "fútbol",
  "elpapá",
  "secadora",
  "tortuga",
  "calor",
  "orquídea",
  "elhuevo",
  "rueda",
  "cama",
  "elpuerco",
  "elbasurero",
  "piña",
  "pescadería",
  "spalomitasdemaíz",
  "elexcusado",
  "cunamecedora",
  "escalera",
  "elzancudo",
  "tapa",
  "elrecogedor",
  "loszapatos",
  "smedias",
  "elhipopótamo",
  "elalmuerzo",
  "ellimón",
  "spapasfritas",
  "sgafasdelsol",
  "elsuéter",
  "elaeropuerto",
  "mesa",
  "elchampú",
  "corbata",
  "eljabón",
  "elalbaricoque",
  "elmenú",
  "floristería",
  "elgato",
  "elacrán",
  "elcactus",
  "elvaso",
  "elabrigo",
  "pasa",
  "elcongedor",
  "mosca",
  "elsaltamontes",
  "ssandalias",
  "eltornado",
  "elalgodón",
  "elvenado",
  "tía",
  "miel",
  "pantimedia",
  "bañera",
  "marrón",
  "elkéchup",
  "ol",
  "elnovio",
  "elhalcón",
  "toal",
  "elarmadillo",
  "pajarita",
  "elrestaurante",
  "elabretas",
  "elbabero",
  "frío",
  "gaviota",
  "mermeda",
  "elperro",
  "cuñada",
  "cintamétrica",
  "elcalzoncillo",
  "elpostre",
  "elhermano",
  "ensada",
  "jirafa",
  "cremabronceadora",
  "elhorno",
  "béisbol",
  "elpetirrojo",
  "elchupador",
  "elcaimán",
  "confitería",
  "eltigre",
  "elvaptos",
  "pared",
  "sopa",
  "elmono",
  "elazúcar",
  "temperatura",
  "elbiberón",
  "hamburguesa",
  "elsalmón",
  "trucha",
  "bnco",
  "saletas",
  "elequipo",
  "elcolgador",
  "elleón",
  "nieve",
  "violeta",
  "eljarrón",
  "elpájarocarpintero",
  "eldesagüe",
  "elcuñado",
  "rasa",
  "eldulce",
  "elpescado",
  "carnederes",
  "cierre",
  "limpiadora",
  "eledificio",
  "lve",
  "mesa",
  "lma",
  "elcolmillo",
  "elbotiquín",
  "elagua",
  "críquet",
  "blusa",
  "margarita",
  "mesa",
  "hermana",
  "amarillo",
  "eldestapador",
  "elarbusto",
  "elárbol",
  "rana",
  "esponja",
  "papelería",
  "elhotdog",
  "elconejo",
  "eltiburón",
  "falda",
  "elrinoceronte",
  "elmar",
  "elsol",
  "tina",
  "elcamaleón",
  "tería"
]

var selected_first = firstNames[Math.floor(Math.random() * firstNames.length)]
var selected_last = lastNames[Math.floor(Math.random() * lastNames.length)]
var selected_pass = passwords[Math.floor(Math.random() * passwords.length)]

var dataString = "$------WebKitFormBoundaryPDxYQ5D0P1Ro5fLz\r\nContent-Disposition: form-data; name='_u531874669292314258[first]'\r\n\r\\" + selected_first + "\r\n------WebKitFormBoundaryPDxYQ5D0P1Ro5fLz\r\nContent-Disposition: form-data; name='_u531874669292314258[last]'\r\n\r\n" + selected_last + "\r\n------WebKitFormBoundaryPDxYQ5D0P1Ro5fLz\r\nContent-Disposition: form-data; name='_u224716250508442240'\r\n\r\n" + selected_first[0].toLowerCase() + selected_last.toLowerCase() + "@uniandes.edu.co" + "\r\n------WebKitFormBoundaryPDxYQ5D0P1Ro5fLz\r\nContent-Disposition: form-data; name='_u811970027324305534'\r\n\r\n" + selected_pass + '\r\n------WebKitFormBoundaryPDxYQ5D0P1Ro5fLz\r\nContent-Disposition: form-data; name="wsite_subject"\r\n\r\n\r\n------WebKitFormBoundaryPDxYQ5D0P1Ro5fLz\r\nContent-Disposition: form-data; name="form_version"\r\n\r\n2\r\n------WebKitFormBoundaryPDxYQ5D0P1Ro5fLz\r\nContent-Disposition: form-data; name="wsite_approved"\r\n\r\napproved\r\n------WebKitFormBoundaryPDxYQ5D0P1Ro5fLz\r\nContent-Disposition: form-data; name="ucfid"\r\n\r\n617695228408328669\r\n------WebKitFormBoundaryPDxYQ5D0P1Ro5fLz\r\nContent-Disposition: form-data; name="recaptcha_token"\r\n\r\n\r\n------WebKitFormBoundaryPDxYQ5D0P1Ro5fLz\r\nContent-Disposition: form-data; name="opted_in"\r\n\r\n0\r\n------WebKitFormBoundaryPDxYQ5D0P1Ro5fLz--\r\n';

var options = {
  url: 'https://wwunilandeseduco.weebly.com/ajax/apps/formSubmitAjax.php',
  method: 'POST',
  headers: headers,
  body: dataString
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

console.log('\n')
console.log(selected_first, selected_last, selected_first[0].toLowerCase() + selected_last.toLowerCase() + "@uniandes.edu.co", selected_pass)
request(options, callback);
