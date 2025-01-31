# API DE GESTIÓN ESCOLAR
## Descripción general
Esta API de Gestión Escolar es una aplicación backend desarrollada con Node.js, Express y MongoDB que proporciona servicios para administrar información académica. El sistema permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre datos de estudiantes y sus cursos asociados.

### Características Principales
- Gestión completa de estudiantes
- Asignación de cursos a estudiantes
- Filtrado de estudiantes por curso
- Validación de datos
- Manejo de errores
- Base de datos MongoDB para almacenamiento

### Tecnologías Utilizadas
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemon (desarrollo)

### Estructura Del Proyecto
```plaintext
├── config/ 
│   └── db.js               # Configuración de conexión a MongoDB
├── models/ 
│   └── estudiantesmodel.js  # Modelo de datos de estudiantes
├── routes/ 
│   └── routes.js            # Rutas de la API
├── app.js                   # Punto de entrada de la aplicación
├── package.json             # Dependencias y scripts
└── vercel.json              # Configuración para Vercel
```

## API Endpoints
### GET api/estudiantes
Obtiene todos los estudiantes

Permite filtrado por curso usando query parameter

Ejemplo: /estudiantes?curso=Matemática

### GET api/estudiantes/:id
Obtiene un estudiante específico por ID

### POST api/estudiantes
Crea un nuevo estudiante. 
Requiere body:
```plaintext
{
  "nombre": "string",
  "apellido": "string", 
  "email": "string",
  "cursos": ["string"]
}
```

### PUT api/estudiantes/:id
Actualiza información de un estudiante existente

### DELETE api/estudiantes/:id
Elimina un estudiante por ID

### Cursos Disponibles
- Matemática
- Historia
- Ciencias
- Arte

## Instalación y Uso
1. Clonar el repositorio
   
   ```plaintext
   git clone https://github.com/martinsarasola/api-gestion-escolar.git
   ```
2. Ejecutar `npm install` para instalar dependencias:

   ```plaintext
   cd api-gestion-escolar
   npm install
   ```
3. Configurar variables de entorno: Crear archivo .env en la raíz del proyecto:
   ```plaintext
   MONGO_URI=url_api
   ```
4. Ejecutar `npm start` para iniciar el servidor
5. La API estará disponible en `http://localhost:3000`

### Cómo Contribuir
 - Crear una nueva rama (git checkout -b feature/nueva-funcionalidad)
 - Commit de cambios (git commit -m 'Agrega nueva funcionalidad')
 - Push a la rama (git push origin feature/nueva-funcionalidad)
 - Crear Pull Request

### Contacto
José Martín Sarasola - martin.sarasola01@hotmail.com 
Link del Proyecto: https://github.com/martinsarasola/api-gestion-escolar
