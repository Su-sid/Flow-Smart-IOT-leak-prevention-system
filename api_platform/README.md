# Flow Smart nodejs server and API

NodeJS server for the flow-smart leak detection system. Server receives and posts data from IoT Sensors

## Features

- Real Time Data Monitoring

## Tech

- [NodeJS/Express] -
- [MongoDB] - Database

## Procedure

- Install all the dependencies.
  ```
  node install
  ```
- Install nodemon globally. Remember to check your package.json

  ```
  npm install nodemon -g
  ```

- Configure your .env file to include the following

  ```bash
  PORT=80

  MongoURI=<mongodb-connection-string>
  ```

- Run development server on localhost
  ```
  npm start
  ```
- Access your webpage at http://localhost:80

## API Documentation

### Create Sensor Data

**Description:**
This endpoint allows you to create a new sensor data entry.

**Endpoint:**
`/liveSensorData`

**Method:**
POST

**Request Body:**

```json
{
  "data": "data-value"
}
```

**Response:**

```json
{
  "name": "sensor-name",
  "data": "data-value",
  "_id": "document's-id",
  "createdAt": "time-stamp",
  "updatedAt": "time-stamp",
  "__v": 0
}
```

**Status Codes:**

- 201: Created - The sensor data entry was created successfully.
- 401: Unauthorized - There was an error creating the sensor data entry.

### Get All Sensor Data

**Description:**
This endpoint retrieves all sensor data entries.

**Endpoint:**
`/getAllData`

**Method:**
GET

**Response Body:**

```json
{
  "_id": "<document-id>",
  "name": "<sensors-name>",
  "time": "<time>",
  "data": "<data from the sensor>",
  "__v": 0
}
```

**Status Codes:**

- 200: OK - The sensor data entries were retrieved successfully.
- 500: Internal Server Error - There was an error retrieving the sensor data entries.
