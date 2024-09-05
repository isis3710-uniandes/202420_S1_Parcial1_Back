# Ejecución

Para ejecutar este back debe clonar el repositorio, ingresar a la carpeta del proyecto (`cd 202420_Parcial1_Back`), instalar dependencias (`npm install`) e iniciar el servidor de desarrollo (`npm start`). Esto desplegará un servidor web que escucha peticiones en el puerto 3001.

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

## GET /robots

Este endpoint retorna un listado de robots. Este es un ejemplo de la respuesta:

```JSON
[
   {
      "id": 1,
      "nombre": "Pedrito",
      "modelo": "PR-001",
      "empresaFabricante": "Robotico Corp"
   },
   {
      "id": 2,
      "nombre": "IronChef",
      "modelo": "IC-3000",
      "empresaFabricante": "RoboCocina Inc."
   }
]

```

## GET /robots/_{{robot_id}}_

Este endpoint retorna el robot con el id pasado como parámetro en el _path_. Este es un ejemplo de la respuesta:

```JSON
{
    "id": 1,
    "nombre": "Pedrito",
    "modelo": "PR-001",
    "empresaFabricante": "Robotico Corp",
    "añoFabricacion": 2023,
    "capacidadProcesamiento": "2.5 GHz",
    "humor": "Como un perrito pequeño, siempre buscando atención y moviendo su 'cola' robótica",
    "imagen": "https://github.com/isis3710-uniandes/202410_S1_Parcial1_Back/blob/master/images/robot1.png"
}

```

Si el robot con el id proporcionado no existe retornará un _status code 404_ con la siguiente respuesta:

```JSON
{
    "status": "error",
    "message": "The robot with the given id was not found."
}
```
