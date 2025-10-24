# API Conversor de Números Romanos

Este proyecto es una **API REST** simple construida con **Node.js** y **Express**.  
Proporciona dos endpoints para la conversión bidireccional entre números romanos y números decimales.

La API maneja validaciones de formato, reglas de repetición (ej. `IIII`) y reglas de sustracción (ej. `IL`) para los números romanos.  
Para los números decimales, valida que la entrada sea un entero en el rango de **1 a 3999**.

---

## Instalación y Ejecución

1. **Clonar el repositorio.**

2. **Instalar las dependencias del proyecto:**

```bash
npm install
```

3. **Iniciar el servidor:**

```bash
node app.js
```

El servidor estará corriendo en:  
[http://localhost:8080](http://localhost:8080)

---

## Uso de la API

La API expone dos endpoints principales:

---

### 1. Convertir de Romano a Decimal

Envía una petición **GET** al endpoint `/romano/` seguido del número romano.

- **Endpoint:** `GET /romano/:Rnumber`  
- **Ejemplo:** [http://localhost:8080/romano/MCMXCIV](http://localhost:8080/romano/MCMXCIV)

#### Respuesta Exitosa (200)

```json
{
  "state": true,
  "numero": 1994,
  "message": "Numero Convertido Correctamente"
}
```

#### Respuesta de Error (400)

```json
{
  "state": false,
  "error": "Error: Numero ingresado incorrecto: 'I' solo puede restar a 'V' y 'X'."
}
```

---

### 2. Convertir de Decimal a Romano

Envía una petición **GET** al endpoint `/decimal/` seguido del número decimal.

- **Endpoint:** `GET /decimal/:Dnumber`  
- **Ejemplo:** [http://localhost:8080/decimal/1994](http://localhost:8080/decimal/1994)

#### Respuesta Exitosa (200)

```json
{
  "state": true,
  "numero": "MCMXCIV",
  "message": "Numero convertido Correctamente"
}
```

#### Respuesta de Error (400)

```json
{
  "state": false,
  "error": "Numero ingresado Incorecto, debe ser un numero entre 1 y 3999"
}
```

---

## Pruebas (Tests)

El proyecto utiliza **Jest** para las pruebas unitarias.

Para ejecutar la suite de tests:

```bash
npm test
```

Para generar el reporte de cobertura:

```bash
npm run coverage
```