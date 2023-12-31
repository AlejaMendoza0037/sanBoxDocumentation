import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import express,{Application, Request, Response} from 'express'

/**
 * Clase principal de la API. Define las rutas de la API
 * 
 * @author Alejandra Mendoza
 * @description Clase  manejo de rutas y documentación
 */
class App{

	//Atributos
	public app:Application
	private server:any

	/**
     *
     * 
     * @author Alejandra Mendoza
     */
	constructor(){

		/**
         * Express---> biblioteca para definir API en Node.js
         */
		this.app=express()

		this.app.use(express.json())
		this.app.use(
			'/api-docs',
			swaggerUi.serve,
			swaggerUi.setup(swaggerSpec)
		)

		this.routes()
	}

	private routes():void{
        
		this.app.get(
			'/',
			(req:Request, res:Response)=>{
				res.send('Bienvenidos a la IPS AteneaIPS')
			}
		)

		this.app.post(
			'/paciente',
			(req:Request, res:Response)=>{
				res.send('Bienvenidos a typescript')
			}
		)
	}

	public start():void{

		this.server=this.app.listen(
			3000,
			()=>{console.log('El servidor está escuchando en el puerto 3000')}
		)
	}

	public close():void{
		this.server.close()
	}

}

export default App