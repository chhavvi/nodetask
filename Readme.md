#For starting a project plz install all the dependencies 

1.npm install


#created the task using Database Postgres ,Sequelize
here are some of the instructions to create db on postgres
2)
    a) psql postgres --u postgres
    b)CREATE ROLE testuser WITH LOGIN PASSWORD 'test@123';
    c) ALTER ROLE testuser CREATEDB;
    d)CREATE DATABASE localdb1;
    e)GRANT ALL PRIVILEGES ON DATABASE localdb1 TO testuser;


#usually we dont push .env on git but since it has credentials of db and some other things too which you might need so am just pushing that too

 3)npm run start 