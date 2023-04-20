import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
	return (
		<div className="md:w-1/2 lg:w-3/5 mb-12">
			{pacientes.length ? (
				<>
					<h2 className="font-black text-3xl text-center">
						Listado de Pacientes
					</h2>
					<p className="text-xl mt-5 text-center">
						Administra tus {''}
						<span className="text-green-500 font-bold ">
							Pacientes y citas
						</span>
					</p>

					{pacientes.map((paciente) => (
						<Paciente
							paciente={paciente}
							key={paciente.id}
							setPaciente={setPaciente}
							eliminarPaciente={eliminarPaciente}
						/>
					))}
				</>
			) : (
				<>
					<h2 className="font-black text-3xl text-center">
						No hay Pacientes
					</h2>
					<p className="text-xl mt-5 text-center">
						Comienza agregando pacientes {''}
						<span className="text-green-500 font-bold ">
							y aparecerán en este lugar
						</span>
					</p>
				</>
			)}
		</div>
	);
};
export default ListadoPacientes;
