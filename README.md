# Ejecución

Para ejecutar este back debe clonar el repositorio, ingresar a la carpeta del proyecto e instalar dependencias con el comando `npm install`. Luego, ejecute el comando `npm start`. Esto iniciará un servidor web que escucha peticiones en el puerto 3001.

Si hace una petición de tipo GET a la ruta por defecto (http://localhost:3001) deberá recibir un _status code 200_ con el siguiente mensaje:

```JSON
{
    "status": "The backend is running"
}
```

# Endpoints

Este backend proporciona tres endpoints:

## POST /login

Este endpoint recibe en el cuerpo de la petición un objeto con dos atributos: _login_ y _password_. Si las credenciales proporcionadas son correctas retornará un _status code 200_ con el siguiente mensaje:

```JSON
{
    "status": "authenticated"
}
```

Si las credenciales son incorrectas retornará un _status code 401_ con el siguiente mensaje:

```JSON
{
    "status": "error"
}
```

Para efectos de prueba use las siguientes credenciales para una autenticación correcta:

```JSON
{
    "login": "admin",
    "password": "pass"
}
```

## GET /cafes

Este endpoint retorna un listado de cafés. Este es un ejemplo de la respuesta:

```JSON
[
    {
        "id": 1,
        "nombre": "Café Especial para tí",
        "tipo": "Blend",
        "region": "Angelópolis, Antioquia"
    },
    {
        "id": 2,
        "nombre": "Café Especial Navegante",
        "tipo": "Café de Origen",
        "region": "Guatapé, Antioquia"
    }
]
```

## GET /cafes/1

Este endpoint retorna el café con el id 1. Este es un ejemplo de la respuesta:

```JSON
{
    "id": 1,
    "nombre": "Café Especial para tí",
    "tipo": "Blend",
    "region": "Angelópolis, Antioquia",
    "notas": "Panela, Durazno, Caramelo",
    "fecha_cultivo": "2023-01-18",
    "altura": 1920,
    "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-para-ti-cafe-colombiano_720x.png?raw=true"
}
```

Si el café con el id proporcionado no existe retornará un _status code 404_ con la siguiente respuesta:

```JSON
{
    "status": "error",
    "message": "The coffe with the given id was not found."
}
```