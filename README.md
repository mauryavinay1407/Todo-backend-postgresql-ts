# Todo app using postgreSQL and typescript

This is a todo app which include all types of crud operations, REST api's while following mvc pattern.

## Technologies Used

* **Node.js**: Backend JavaScript runtime environment.
* **Express.js**: Web application framework for Node.js.
 * **TypeScript**: Utilizes TypeScript for type-checking and enhanced developer experience.
 * **PostgreSQL**: SQL database for storing

## Installation
* Clone the repository:

```bash
git clone https://github.com/mauryavinay1407/Todo-backend-postgresql-ts.git
```
* Install server dependencies:
```bash
cd Todo-backend-postgresql-ts
npm install
```
* Set up PostgreSQL database:
```bash
DATABASE_URL=postgresql://username:password@host/your-database
```
* Build the appilcation:
```bash
npm run build
```
* Run the server:
```bash
node dist/index.js
```

# Docker Setup

## Dockerfile

   A Dockerfile is provided to build a Docker image for the application.

* To build the Docker image:

```bash
docker build -t todo-app .
```
* To run the docker container:
```bash
docker run -d -p 3000:3000 todo-app
```

## Docker Compose

A Docker Compose file (docker-compose.yml) is provided to orchestrate the Todo app along with a PostgreSQL database.

* To start the application and database containers:
```bash
docker-compose up -d
```
The application should now be accessible at http://localhost:3000.

