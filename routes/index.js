var express = require("express");
var router = express.Router();

const cars = [
  {
      "id": 1,
      "marca": "Renault",
      "linea": "Kangoo",
      "referencia": "VU Express",
      "modelo": 2017,
      "kilometraje": 93272,
      "color": "Blanco",
      "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/kangoo.jpeg?raw=true"
  },
  {
      "id": 2,
      "marca": "Chevrolet",
      "linea": "Spark",
      "referencia": "Life",
      "modelo": 2018,
      "kilometraje": 55926,
      "color": "Plata",
      "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/spark.jpeg?raw=true"
  },
  {
      "id": 3,
      "marca": "Chevrolet",
      "linea": "Sail",
      "referencia": "LT Sedan",
      "modelo": 2016,
      "kilometraje": 94321,
      "color": "Rojo",
      "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/sail.jpeg?raw=true"
  },
  {
      "id": 4,
      "marca": "Renault",
      "linea": "Sandero",
      "referencia": "New Authentique Life",
      "modelo": 2020,
      "kilometraje": 25629,
      "color": "Rojo",
      "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/sandero.jpeg?raw=true"
  },
  {
      "id": 5,
      "marca": "Nissan",
      "linea": "March",
      "referencia": "Active Plus",
      "modelo": 2019,
      "kilometraje": 31298,
      "color": "Plata",
      "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/march.jpeg?raw=true"
  },
  {
      "id": 6,
      "marca": "Chevrolet",
      "linea": "Tracker",
      "referencia": "New LS",
      "modelo": 2018,
      "kilometraje": 37827,
      "color": "Plata",
      "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/tracker.jpeg?raw=true"
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

/* Get all cars */
router.get("/cars", function (req, res, next) {
  res.send(
    cars.map((c) => {
      return { id, marca, linea, modelo } = c;
    })
  );
});

/* Get one car */
router.get("/cars/:carId", function (req, res, next) {
  const car = cars.find((c) => {
    return c.id == req.params.carId;
  });
  if (!car) {
    return res.status(404).send({
      status: "error",
      message: "The car with the given id was not found.",
    });
  }
  res.send(car);
});

module.exports = router;
