var express = require("express");
var router = express.Router();

const cafes = [
  {
    id: 1,
    nombre: "Café Especial para tí",
    tipo: "Blend",
    region: "Angelópolis, Antioquia",
    sabor: "Panela, Durazno, Caramelo",
    altura: 1920,
    imagen:
      "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-para-ti-cafe-colombiano_720x.png?raw=true",
  },
  {
    id: 2,
    nombre: "Café Especial Navegante",
    tipo: "Café de Origen",
    region: "Guatapé, Antioquia",
    sabor: "Cítrico, Naranja, Cacao",
    altura: 1800,
    imagen:
      "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-navegante-cafe-colombiano-1_720x.png?raw=true",
  },
  {
    id: 3,
    nombre: "Café Especial El Poeta",
    tipo: "Blend",
    region: "Gómez Plata, Antioquia",
    sabor: "Notas Dulces, Vino y Frutos Rojos",
    altura: 1800,
    imagen:
      "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-poeta-cafe-colombiano_720x.png?raw=true",
  },
  {
    id: 4,
    nombre: "Café Especial Valentina",
    tipo: "Café de Origen",
    region: "Fredonia, Antioquia",
    sabor: "Chocolate, Cáscara de limón, Nuez",
    altura: 1700,
    imagen:
      "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-valentina-cafe-colombiano_1_720x.png?raw=true",
  },
  {
    id: 5,
    nombre: "Café Especial Sombrero Vueltiao",
    tipo: "Café de Origen",
    region: "Amagá, Antioquia",
    sabor: "Chocolate, Frutos secos, Frutos rojos, Caña de azúcar",
    altura: 1450,
    imagen:
      "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especal-sombrero-vueltiao-2-cafe-colombiano-f_720x.png?raw=true",
  },
  {
    id: 6,
    nombre: "Café Especial La Guacamaya",
    tipo: "Café de Origen",
    region: "Amagá, Antioquia",
    sabor: "Chocolate, Frutos Secos, Frutos Rojos y Caña de Azúcar",
    altura: 1450,
    imagen:
      "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-guacamayo2-cafe-colombiano-f_720x.png?raw=true",
  },
];

/* Login */
router.post("/login", function (req, res, next) {
  console.log(req.body);
  if (req.body.login === "admin" && req.body.password === "pass") {
    res.send({ status: "authenticated" });
  } else {
    res.status(401).send({ status: "error" });
  }
});

/* Get all cafes */
router.get("/cafes", function (req, res, next) {
  const filtered = cafes.map((c) => {
    return { id: c.id, nombre: c.nombre };
  });
  res.send(filtered);
});

/* Get one cafe */
router.get("/cafes/:cafeId", function (req, res, next) {
  const filtered = cafes.filter((c) => {
    return c.id == req.params.cafeId;
  });
  res.send(filtered);
});

module.exports = router;
