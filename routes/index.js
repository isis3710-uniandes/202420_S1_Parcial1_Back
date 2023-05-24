var express = require("express");
var router = express.Router();

const cafes = [
  {
    id: 1,
    nombre: "Café Especial para tí",
    tipo: "Blend",
    region: "Angelópolis, Antioquia",
    notas: "Panela, Durazno, Caramelo",
    fecha_cultivo: "2023-01-18",
    altura: 1920,
    imagen:
      "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-para-ti-cafe-colombiano_720x.png?raw=true",
  },
  {
    id: 2,
    nombre: "Café Especial Navegante",
    tipo: "Café de Origen",
    region: "Guatapé, Antioquia",
    notas: "Cítrico, Naranja, Cacao",
    fecha_cultivo: "2023-02-10",
    altura: 1800,
    imagen:
      "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-navegante-cafe-colombiano-1_720x.png?raw=true",
  },
  {
    id: 3,
    nombre: "Café Especial El Poeta",
    tipo: "Blend",
    region: "Gómez Plata, Antioquia",
    notas: "Notas Dulces, Vino y Frutos Rojos",
    fecha_cultivo: "2023-03-11",
    altura: 1800,
    imagen:
      "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-poeta-cafe-colombiano_720x.png?raw=true",
  },
  {
    id: 4,
    nombre: "Café Especial Valentina",
    tipo: "Café de Origen",
    region: "Fredonia, Antioquia",
    notas: "Chocolate, Cáscara de limón, Nuez",
    altura: 1700,
    imagen:
      "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-valentina-cafe-colombiano_1_720x.png?raw=true",
  },
  {
    id: 5,
    nombre: "Café Especial Sombrero Vueltiao",
    tipo: "Café de Origen",
    region: "Amagá, Antioquia",
    notas: "Chocolate, Frutos secos, Frutos rojos, Caña de azúcar",
    fecha_cultivo: "2023-04-12",
    altura: 1450,
    imagen:
      "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especal-sombrero-vueltiao-2-cafe-colombiano-f_720x.png?raw=true",
  },
  {
    id: 6,
    nombre: "Café Especial La Guacamaya",
    tipo: "Café de Origen",
    region: "Amagá, Antioquia",
    notas: "Chocolate, Frutos Secos, Frutos Rojos y Caña de Azúcar",
    fecha_cultivo: "2023-05-13",
    altura: 1450,
    imagen:
      "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-guacamayo2-cafe-colombiano-f_720x.png?raw=true",
  },
];

/* Default route */
router.get("/", function (req, res, next) {
  res.send({ status: "success", message: "The backend is running" });
});

/* Login */
router.post("/login", function (req, res, next) {
  if (req.body.login === "admin" && req.body.password === "pass") {
    res.send({
      status: "success",
      message: "The provided credentials are correct. User authenticated.",
    });
  } else {
    res
      .status(401)
      .send({
        status: "error",
        message: "The provided credentials are incorrect.",
      });
  }
});

/* Get all cafes */
router.get("/cafes", function (req, res, next) {
  res.send(
    cafes.map((c) => {
      return { id: c.id, nombre: c.nombre, tipo: c.tipo, region: c.region };
    })
  );
});

/* Get one cafe */
router.get("/cafes/:cafeId", function (req, res, next) {
  const cafe = cafes.find((c) => {
    return c.id == req.params.cafeId;
  });
  if (!cafe) {
    return res.status(404).send({
      status: "error",
      message: "The coffe with the given id was not found.",
    });
  }
  res.send(cafe);
});

module.exports = router;
