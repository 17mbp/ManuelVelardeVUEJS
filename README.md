# Proyecto MVT 
0)cree en phpmyadmin mysql la base de datos
ManuelVelarde

1)iniciar Proyecto vuejs
npm init -y
2)
npm install sequelize mysql2
3)
npm install -g nodemon
npm install --save-dev nodemon


4) crear la tabla paso definicion
npx sequelize-cli model:generate --name Direcciones --attributes nombre:string,email:string,direccion:string,apellidomaterno:string,apellidopaterno:string
npx sequelize-cli db:migrate

5)instalar axios para ajax
npm install axios

6)agregar el enroutador
npm install vue-router@4

INCIAR FRONTEND      puerto default
npm run dev

INICIAR BACKEND
npm run serve