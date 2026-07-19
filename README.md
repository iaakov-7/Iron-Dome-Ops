# Iron-Dome-Ops

## About the project

An internal system for an air defense unit to manage operational events in real time,
The operators can -Open an event -Update event status -View open events -Record actions taken,
The system was built in Java Script with an express server and a connection to mysql.

## Folder structure

```
├── README.md
├── app.js
├── controllers
│   ├── incident_controller.js
│   └── operator_controller.js
├── db
│   ├── database.js
│   └── database.sql
├── .gitignore
├── Dockerfile
├── docker-compose.yaml
├── middlewares
│   ├── error_middlware.js
│   └── validation_middleware.js
├── package-lock.json
├── package.json
├── repositories
│   ├── base_repo.js
│   ├── incidents_repo.js
│   ├── logs_repo.js
│   └── operators_repo.js
├── routes
│   ├── incidents_routes.js
│   └── operators_routes.js
└── services
    ├── incidents_service.js
    ├── logs_service.js
    └── operatoes_service.js
```
