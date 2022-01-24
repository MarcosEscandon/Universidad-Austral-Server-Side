Hola,
Una vez desplegado el proyecto en tu local, acceder con las urls:
    http://localhost:3000
    http://localhost:3000/bicicletas

El acceso a la api:
http://localhost:3000/api/bicicletas
    -> sin body
http://localhost:3000/api/bicicletas/create
y
http://localhost:3000/api/bicicletas/update
    ->    {
            "id": numero,
            "color": string,
            "modelo": string,
            "ubicacion": [
                double,
                double
            ]
        }

http://localhost:3000/api/bicicletas/delete 
    -> {"id":numero}
