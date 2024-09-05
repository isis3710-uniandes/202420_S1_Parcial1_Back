const express = require("express");
const router = express.Router();

const robots = [
  {
      "id": 1,
      "nombre": "Pedrito",
      "modelo": "PR-001",
      "empresaFabricante": "Robotico Corp",
      "añoFabricacion": 2023,
      "capacidadProcesamiento": "2.5 GHz",
      "humor": "Como un perrito pequeño, siempre buscando atención y moviendo su 'cola' robótica",
      "imagen": "https://github.com/isis3710-uniandes/202410_S1_Parcial1_Back/blob/master/images/robot1.png"
  },
  {
      "id": 2,
      "nombre": "IronChef",
      "modelo": "IC-3000",
      "empresaFabricante": "RoboCocina Inc.",
      "añoFabricacion": 2021,
      "capacidadProcesamiento": "3.2 GHz",
      "humor": "Fanático de la cocina, siempre bromeando con chistes de comida y recomendando recetas",
      "imagen": "https://github.com/isis3710-uniandes/202410_S1_Parcial1_Back/blob/master/images/robot2.png"
  },
  {
      "id": 3,
      "nombre": "Chispita",
      "modelo": "LT-007",
      "empresaFabricante": "SparkBots Ltd.",
      "añoFabricacion": 2020,
      "capacidadProcesamiento": "1.8 GHz",
      "humor": "Alegre y juguetón, con comportamiento como un gatito curioso",
      "imagen": "https://github.com/isis3710-uniandes/202410_S1_Parcial1_Back/blob/master/images/robot3.png"
  },
  {
      "id": 4,
      "nombre": "SeñorCalculín",
      "modelo": "MC-808",
      "empresaFabricante": "Mathematrix Solutions",
      "añoFabricacion": 2022,
      "capacidadProcesamiento": "4.0 GHz",
      "humor": "Serio pero sarcástico, con chistes de matemáticas",
      "imagen": "https://github.com/isis3710-uniandes/202410_S1_Parcial1_Back/blob/master/images/robot4.png"
  },
  {
      "id": 5,
      "nombre": "DoctoraBot",
      "modelo": "HL-9000",
      "empresaFabricante": "MediTech Industries",
      "añoFabricacion": 2024,
      "capacidadProcesamiento": "3.8 GHz",
      "humor": "Doctora estricta con humor seco, siempre recordando que te laves las manos",
      "imagen": "https://github.com/isis3710-uniandes/202410_S1_Parcial1_Back/blob/master/images/robot5.png"
  },
  {
      "id": 6,
      "nombre": "ZumbaTron",
      "modelo": "ZT-2025",
      "empresaFabricante": "DanceTech Co.",
      "añoFabricacion": 2025,
      "capacidadProcesamiento": "2.9 GHz",
      "humor": "Energético amante del baile, siempre motivando a moverse",
      "imagen": "https://github.com/isis3710-uniandes/202410_S1_Parcial1_Back/blob/master/images/robot6.png"
  }
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

/* Get all robots */
router.get("/robots", function (req, res, next) {
  res.send(
    robots.map((r) => {
      return { id, nombre, modelo, empresaFabricante } = r;
    })
  );
});

/* Get one robot */
router.get("/robots/:robotId", function (req, res, next) {
  const robot = robots.find((r) => {
    return r.id == req.params.robotId;
  });
  if (!robot) {
    return res.status(404).send({
      status: "error",
      message: "The robot with the given id was not found.",
    });
  }
  res.send(robot);
});

module.exports = router;
