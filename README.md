# Ejecución

Para ejecutar este back debe clonar el repositorio, ingresar a la carpeta del proyecto (`cd 202410_Parcial1_Back`), instalar dependencias (`npm install`) e iniciar el servidor de desarrollo (`npm start`). Esto desplegará un servidor web que escucha peticiones en el puerto 3001.

Si hace una petición de tipo GET a la ruta por defecto (http://localhost:3001) deberá recibir un _status code 200_ con el siguiente mensaje:

```JSON
{
    "status": "success",
    "message": "The backend is running"
}
```

# Endpoints

Este backend proporciona tres endpoints:

## POST /login

Este endpoint recibe en el cuerpo de la petición un objeto con dos atributos: _login_ y _password_. Si las credenciales proporcionadas son correctas retornará un _status code 200_ con el siguiente mensaje:

```JSON
{
    "status": "success",
    "message": "The provided credentials are correct. User authenticated."
}
```

Si las credenciales son incorrectas retornará un _status code 401_ con el siguiente mensaje:

```JSON
{
    "status": "error",
    "message": "The provided credentials are incorrect."
}
```

Para efectos de prueba use las siguientes credenciales para una autenticación correcta:

```JSON
{
    "login": "admin",
    "password": "pass"
}
```

## GET /cars

Este endpoint retorna un listado de vehículos. Este es un ejemplo de la respuesta:

```JSON
[
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
    }
]
```

## GET /cars/_{{car_id}}_

Este endpoint retorna el vehículo con el id pasado como parámetro en el _path_. Este es un ejemplo de la respuesta:

```JSON
{
    "id": 1,
    "marca": "Renault",
    "linea": "Kangoo",
    "referencia": "VU Express",
    "modelo": 2017,
    "kilometraje": 93272,
    "color": "Blanco",
    "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/kangoo.jpeg?raw=true"
}
```

Si el vehículo con el id proporcionado no existe retornará un _status code 404_ con la siguiente respuesta:

```JSON
{
    "status": "error",
    "message": "The car with the given id was not found."
}
```
