import { Response, Request } from 'express'
import {PrismaClient} from '@prisma/client'

class PacienteController{

	private prismaClient: PrismaClient
	constructor (){
		this.prismaClient= new PrismaClient()

	}
	async optenerPacientes(req:Request, res:Response){
		const Pacientes= await this.prismaClient.paciente.findMany()
		res.json(Pacientes)
	}

	async crearPaciente(req:Request, res:Response){
		try{
			//desestructuracion
			const{ 
				cedula,        
				nombre,         
				apellido,       
				fecha,				
				telefono        
			}=req.body
			//verificamos la validez de los datos
			const fechaNacimiento=new Date(fecha)


			// eslint-disable-next-line no-mixed-spaces-and-tabs
			//que los guarde ne la base de datos--> creamos pasciente
			const paciente= await this.prismaClient.paciente.create(
				{
					data:{
						cedula,        
						nombre,         
						apellido,       
						fechaNacimiento,				
						telefono
					}
            
				}

			)

        
			res.json(paciente)
		}catch(e:any){
			res.status(400)
			res.json({error:e.mesagge})

		}






	}

}
export default PacienteController