const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
	const { nombre, propietario, email, fecha, sintomas, id } = paciente;

	const handleEliminar = () => {
		const respuesta = confirm('Deseas Eliminar Este Paciente?');

		respuesta && eliminarPaciente(id);
	};

	return (
		<div className="md:ml-10 lg:ml-10 mt-5 bg-gray-800 rounded-lg py-10 px-5 shadow-md shadow-black">
			<p className="text-white font-bold mb-3 uppercase">
				Nombre: {''}
				<span className="font-normal normal-case">{nombre}</span>
			</p>
			<p className="text-white font-bold mb-3 uppercase">
				Propietario: {''}
				<span className="font-normal normal-case">{propietario}</span>
			</p>
			<p className="text-white font-bold mb-3 uppercase">
				Email: {''}
				<span className="font-normal normal-case">{email}</span>
			</p>
			<p className="text-white font-bold mb-3 uppercase">
				Alta: {''}
				<span className="font-normal normal-case">{fecha}</span>
			</p>
			<p className="text-white font-bold mb-3 uppercase">
				Síntomas: {''}
				<span className="font-normal normal-case">{sintomas}</span>
			</p>

			<div className="flex gap-3 mt-10">
				<button
					type="button"
					className="py-2 px-10 bg-green-600 hover:bg-green-700 cursor-pointer uppercase font-semibold rounded-md"
					onClick={() => setPaciente(paciente)}
				>
					Editar
				</button>
				<button
					type="button"
					className="py-2 px-10 bg-red-500 hover:bg-red-700 cursor-pointer uppercase font-semibold rounded-md"
					onClick={handleEliminar}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
};
export default Paciente;
