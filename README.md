# fine-calculator
App to calculate fine, wheter a team has given back the taken item on time or not.

DESCRIPCION: Aplicación realizada con las tecnologías de MEAN STACK {
### `MONGODB: https://docs.mongodb.com/`
### `EXPRESS JS: https://expressjs.com/`
### `ANGULAR: https://angular.io/docs`
### `NODE JS: https://nodejs.org/en/docs/`
}
<br>
que cuenta con una arquitectura MVC para poder separar los modelos de las vistas a través de controladores. 
Esta aplicación representa mi solución a la siguiente problemática:
	
	• Calcular Multas de equipos prestados en base a la fecha inicio del préstamo, fecha finalización préstamo y fecha de entrega del equipo, 
 	  si el equipo no ha sido devuelto a mantener el estado de Prestado y si no presentará fecha de entrega. 
	  En el caso que el equipo no ha sido entregado dentro del filtro de multas se calculará la multa hasta la fecha actual ( Today()). 
	  En el controlador se calculará $5 por cada día de no cumplir la entrega pactada


APP EN HEROKU: https://fine-calculator.herokuapp.com/calculator
<br>

GITHUB: https://github.com/possomartin/fine-calculator
<br>

### `CONTACTO: `
<br>
	• martin.posso@udla.edu.ec (institucional)
<br>
	• martinposso33@gmail.com (personal)
<br>
	• LINKEDIN: https://www.linkedin.com/in/martin-posso/
<br>

### `DOCUMENTACION:`
<br>
	• MONGODB: https://docs.mongodb.com/
<br>
	• EXPRESS JS: https://expressjs.com/
<br>
	• ANGULAR: https://angular.io/docs
<br>
	• NODE JS: https://nodejs.org/en/docs/

### `RECURSOS UTILES DE APRENDIZAJE:`
<br>
	• Video #1: https://www.youtube.com/watch?v=V-CeWkz1MNQ&ab_channel=Devstackr
<br>
	• Video #2: https://www.youtube.com/watch?v=cFyz3OplB08&ab_channel=MaheshKariya
<br>
	• GITHUB #1: https://github.com/bradtraversy/meanauthapp
<br>
	• GITHUB #2: https://github.com/Devstackr/task-manager-mean-stack/blob/master/frontend/src/app/app-routing.module.ts
<br>

### `USO LOCAL`

Para correr localmente la aplicacion cambiar las siguientes variables:
<br>
  • UrlDomain: 'http://localhost:3000' (BackEnd - Index.js)
<br>
  • URL_ROOT: ''http://localhost:3000' (Angular - web-request.service)
<br>
 hacer uso de los siguientes comandos:
<br>
  • En la carpeta de 'frontend': ng serve 
<br>
  • En la carpeta de 'api': nodemon index.js
