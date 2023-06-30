import {Router, Response, Request} from 'express'
import PacienteController from '../controllers/PacienteControllet'
class PacienteRouter{
	router:Router
	pacienteController:PacienteController

	constructor(){
		this.router=Router() // objeto de express
		this.pacienteController=new PacienteController()
        this.routes()

        
	}
	private routes():void{
		this.router.get(
			'/Pacientes', 
			(req:Request, res:Response)=>{
				this.pacienteController.optenerPacientes(req,res)

			}
		)

		this.router.post(
			'/Crear_paciente',
			(req:Request, res:Response)=>{
				this.pacienteController.crearPaciente(req,res)

			}
			

			
		)
	}





}
export default PacienteRouter

