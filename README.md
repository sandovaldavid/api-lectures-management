
---

# Example API REST - Gestión de Conferencias

Este proyecto es una API RESTful desarrollada en Node.js para gestionar conferencias. Utiliza SQLite como base de datos y Express como framework para manejar las rutas y peticiones.

## **Requisitos previos**

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- **Node.js** (v22.12.0 o superior)
- **NPM** (incluido con Node.js)
- **Docker** (opcional, si usas contenedores)
- **Git** (opcional, para clonar este repositorio)

## **Instalación**

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/sandovaldavid/api-lectures-management.git
   cd api-lectures-management
   ```

2. **Instalar las dependencias:**

   Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```bash
   npm install
   ```


3. **Inicializar la base de datos:**

   Ejecuta el siguiente comando para crear la tabla necesaria y llenar con datos de prueba:

   ```bash
   npm run db
   ```

## **Uso**

1. **Iniciar el servidor:**

   Para iniciar el servidor en modo desarrollo con **nodemon**:

   ```bash
   npm run dev
   ```

   Para iniciar el servidor en modo producción:

   ```bash
   npm start
   ```

2. **Puntos de acceso (endpoints):**

   ### **GET /api/lectures**
   Obtiene todas las conferencias almacenadas.

   **Respuesta exitosa (200):**
   ```json
   {
     "message": "Lectures found",
     "data": [
       {
         "id": 1,
         "title": "Understanding Algorithms",
         "description": "An introduction to algorithmic thinking and problem-solving techniques"
       }
     ]
   }
   ```

   ### **GET /api/lectures/:id**
   Obtiene una conferencia específica por su ID.

   **Respuesta exitosa (200):**
   ```json
   {
     "message": "Lecture found",
     "data": {
       "id": 1,
       "title": "Understanding Algorithms",
       "description": "An introduction to algorithmic thinking and problem-solving techniques"
     }
   }
   ```

   ### **POST /api/lectures**
   Crea una nueva conferencia.

   **Cuerpo de la petición:**
   ```json
   {
     "title": "Nueva Conferencia",
     "description": "Descripción de la nueva conferencia"
   }
   ```

   **Respuesta exitosa (201):**
   ```json
   {
     "message": "Lecture created successfully",
     "lectureId": 1
   }
   ```

   ### **PUT /api/lectures/:id**
   Actualiza una conferencia existente.

   **Cuerpo de la petición:**
   ```json
   {
     "title": "Título Actualizado",
     "description": "Descripción actualizada"
   }
   ```

   **Respuesta exitosa (200):**
   ```json
   {
     "message": "Lecture updated successfully"
   }
   ```

   ### **DELETE /api/lectures/:id**
   Elimina una conferencia existente.

   **Respuesta exitosa (200):**
   ```json
   {
     "message": "Lecture deleted successfully"
   }
   ```

   ### **Códigos de Error**
   - **400**: Datos de petición inválidos o faltantes
   - **404**: Conferencia no encontrada
   - **500**: Error interno del servidor

## **Estructura del proyecto**

```
backend/
├── controllers/        # Controladores de la lógica de negocio
├── models/             # Definición de modelos (SQLite)
├── routes/             # Definición de rutas
├── db.js               # Configuración de la base de datos
├── config.js           # Configuración general del proyecto
├── scripts/            # Scripts útiles (Llenadr db con datos de prueba)
├── index.js            # Punto de entrada del servidor
├── package.json        # Configuración del proyecto
└── README.md           # Documentación del proyecto
```

## **Scripts disponibles**

- **`npm start`**: Inicia el servidor en modo producción.
- **`npm run dev`**: Inicia el servidor en modo desarrollo con nodemon.
- **`npm run db`**: Crea la tabla y datos de prueba

## **Tecnologías utilizadas**

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir APIs.
- **SQLite**: Base de datos ligera para almacenamiento.
- **Nodemon**: Herramienta para el desarrollo que reinicia el servidor automáticamente.
- **dotenv**: Manejo de variables de entorno.

## **Contribuciones**

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu feature:
   ```bash
   git checkout -b feature/nueva-feature
   ```
3. Realiza los cambios necesarios y haz un commit:
   ```bash
   git commit -m "Agrega nueva feature"
   ```
4. Sube tus cambios:
   ```bash
   git push origin feature/nueva-feature
   ```
5. Crea un Pull Request hacia la rama principal del proyecto.

## **Licencia**

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más información.

---
