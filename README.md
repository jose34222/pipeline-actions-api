# API FizzBuzz

Esta es una API REST construida con NestJS que implementa el juego FizzBuzz y un endpoint de ping-pong.

## 🚀 Características

- Endpoint FizzBuzz que retorna:
  - "FizzBuzz" para números divisibles por 15
  - "Fizz" para números divisibles por 3
  - "Buzz" para números divisibles por 5
  - El número como string para otros casos
- Endpoint Ping que retorna "pong"
- Validación de entrada para números positivos
- Pruebas unitarias, de integración y end-to-end
- Configuración de ESLint y Prettier

## 📋 Prerrequisitos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Juansecod/pipeline-actions-api.git
cd pipeline-actions-api
```

2. Instalar dependencias:
```bash
npm install
```

## 🚀 Uso

### Desarrollo
Para iniciar el servidor en modo desarrollo:
```bash
npm run start:dev
```

### Producción
Para compilar y ejecutar en producción:
```bash
npm run build
npm run start:prod
```

## 📝 Endpoints

### FizzBuzz
```
GET /fizzbuzz/:number
```
Ejemplos:
- `/fizzbuzz/15` → "FizzBuzz"
- `/fizzbuzz/3` → "Fizz"
- `/fizzbuzz/5` → "Buzz"
- `/fizzbuzz/1` → "1"

### Ping
```
GET /ping
```
Respuesta:
```json
{
  "message": "pong"
}
```

## 🧪 Pruebas

### Pruebas Unitarias y Pruebas de Integración
```bash
npm test
```

### Pruebas End-to-End
```bash
npm run test:e2e
```

### Cobertura de Pruebas
```bash
npm run test:cov
```

## 📦 Estructura del Proyecto

```
src/
├── fizzbuzz/
│   ├── fizzbuzz.controller.ts
│   ├── fizzbuzz.service.ts
│   ├── fizzbuzz.module.ts
│   ├── fizzbuzz.service.spec.ts
│   └── fizzbuzz.integration.spec.ts
├── ping/
│   ├── ping.controller.ts
│   └── ping.module.ts
└── app.module.ts
```

## 🛠️ Tecnologías Utilizadas

- [NestJS](https://nestjs.com/) - Framework para construir aplicaciones Node.js eficientes y escalables
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Jest](https://jestjs.io/) - Framework de pruebas
- [ESLint](https://eslint.org/) - Linter para JavaScript/TypeScript
- [Prettier](https://prettier.io/) - Formateador de código

## 👥 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
