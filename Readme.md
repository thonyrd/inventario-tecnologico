
# Sistema de Inventario Tecnológico

Evaluación N.º 2
Lenguaje de Programación Web II
Instituto Profesional Virginio Gómez - Sede Chillán

---

## Descripción del Proyecto

Sistema web para la administración de equipamiento tecnológico institucional.

La aplicación permite:

- Registrar equipos tecnológicos.
- Consultar equipos almacenados.
- Filtrar equipos por nombre, tipo y estado.
- Editar información de equipos.
- Eliminar equipos.
- Mantener persistencia en base de datos MySQL mediante TypeORM.

La solución utiliza una arquitectura cliente-servidor basada en Vue.js, NestJS y MySQL. El frontend consume una API REST desarrollada con NestJS que se conecta a una base de datos relacional mediante TypeORM.

---

## Nombre del estudiante: Anthony Rebolledo

---

## Tecnologías utilizadas

### Frontend

- Vue 3
- Vite
- Vue Router
- JavaScript
- Fetch Api

### Backend

- NestJS
- TypeORM
- Class Validator
- Class Transformer

### Base de datos

- MySQL

### Control de versiones

- Git
- GitHub

---

## Requisitos de instalación

Software requerido:

- Node.js LTS
- npm
- MySQL Server
- Git

Ide usado: Visual Studio Code

Verificar instalación:

```bash
node -v
npm -v
mysql --version
git --version

Configuración de Base de Datos

Crear la base de datos:

CREATE DATABASE inventario_tecnologico
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;


Verificar:

SHOW DATABASES;

Variables de entorno
Archivo .env.example
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=CAMBIAR
DB_NAME=inventario_tecnologico
PORT=3000


El archivo .env real no debe publicarse en GitHub.

Instalación Backend

Ubicarse en la carpeta backend:

cd backend


Instalar dependencias:

npm install


Ejecutar:

npm run start:dev


Backend disponible en:

http://localhost:3000

Instalación Frontend

Ubicarse en la carpeta frontend:

cd frontend


Instalar dependencias:

npm install


Ejecutar:

npm run dev


Frontend disponible en:

http://localhost:5173

Endpoints de la API
Listar equipos
GET /equipos

Obtener equipo por ID
GET /equipos/:id

Registrar equipo
POST /equipos

Actualizar equipo
PATCH /equipos/:id

Eliminar equipo
DELETE /equipos/:id


Basado en la implementación CRUD exigida por la evaluación y el proyecto completo de NestJS + MySQL.

Ejemplo POST
{
  "codigoInventario": "EQ001",
  "nombre": "Notebook Lenovo ThinkPad",
  "tipo": "Notebook",
  "marca": "Lenovo",
  "modelo": "ThinkPad E14",
  "ubicacion": "Laboratorio 1",
  "estado": "Disponible",
  "fechaAdquisicion": "2026-01-10",
  "observaciones": "Equipo para estudiantes"
}

Estructura del Proyecto
inventario-Sistema/
│
├── frontend/
│   ├── src/
│   │   ├── router/
│   │   ├── services/
│   │   ├── views/
│   │   ├── App.vue
│   │   └── main.ts
│   │
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── equipos/
    │   │   ├── dto/
    │   │   ├── entities/
    │   │   ├── equipos.controller.ts
    │   │   ├── equipos.service.ts
    │   │   └── equipos.module.ts
    │   │
    │   ├── app.module.ts
    │   └── main.ts
    │
    ├── .env.example
    └── package.json


La estructura sigue la organización modular de Vue Router y NestJS propuesta en las actividades.

Arquitectura
Vue.js
↓
Fetch API
↓
HTTP / JSON
↓
NestJS Controller
↓
NestJS Service
↓
TypeORM Repository
↓
MySQL
↓
Respuesta JSON
↓
Vue actualiza la interfaz

Pruebas Realizadas
Backend

✅ Conexión MySQL exitosa

✅ Creación automática de tabla equipos

✅ GET /equipos

✅ GET /equipos/:id

✅ POST /equipos

✅ PATCH /equipos/:id

✅ DELETE /equipos/:id

✅ Persistencia de datos después del reinicio del backend

Frontend

✅ Consumo API mediante fetch()

✅ Listado dinámico de equipos

✅ Búsqueda por nombre

✅ Búsqueda por código inventario

✅ Filtro por tipo

✅ Filtro por estado

✅ Navegación mediante Vue Router

✅ Registro de nuevos equipos

✅ Edición de equipos

✅ Eliminación de equipos

Declaración de Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizó Microsoft Copilot como herramienta de apoyo para:

Generación de ejemplos de código.
Resolución de errores.
Explicación de conceptos técnicos.
Generacion de estilo css y paginas vue
Apoyo en documentación, les pase los word de las clases y le pedi explicitamente donde estaba cada cosa.

Todo el código fue revisado, adaptado, probado e integrado por el estudiante antes de su entrega final.


Errores registrados:

Resumen de errores del proyecto
#	Problema	Causa	Resolución
1	Backend no se subía a GitHub / backend tenía un repositorio Git interno (backend/.git)	Eliminar .git interno y volver a agregar los archivos al repositorio principal.
2	GitHub mostraba backend con error 404	Git registró backend como submódulo roto	git rm --cached backend y volver a agregar los archivos reales.
3	TypeORM no iniciaba	Campo observaciones usaba type:'text' junto con length	Eliminar length y dejar sólo type:'text'.
4	Failed to resolve import ../services/equiposService	No existía equiposService.js	Renombrar el archivo de servicios CRUD.



✅ Backend no subía a GitHub debido al repositorio Git interno (backend/.git), porque impedía almacenar correctamente todo el backend en el repositorio principal.

