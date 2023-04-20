import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
	const [nombre, setNombre] = useState('');
	const [propietario, setPropietario] = useState('');
	const [email, setEmail] = useState('');
	const [fecha, setFecha] = useState('');
	const [sintomas, setSintomas] = useState('');

	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
	}, [paciente]);

	const generarId = () => {
		const random = Math.random().toString(36).slice(2);
		const fecha = Date.now().toString(36);
		return random + fecha;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validacion
		if ([nombre, propietario, email, fecha, sintomas].includes('')) {
			setError(true);
			return;
		} else {
			setError(false);

			const objectoPaciente = {
				nombre,
				propietario,
				email,
				fecha,
				sintomas,
			};

			if (paciente.id) {
				// Editando el registro
				objectoPaciente.id = paciente.id;

				const pacientesActualizados = pacientes.map((pacienteState) =>
					pacienteState.id === paciente.id
						? objectoPaciente
						: pacienteState
				);

				setPacientes(pacientesActualizados);
				setPaciente({});
			} else {
				// Nuevo registro
				objectoPaciente.id = generarId();
				setPacientes([...pacientes, objectoPaciente]);
			}

			// Reiniciar el form
			setNombre('');
			setPropietario('');
			setEmail('');
			setFecha('');
			setSintomas('');
		}
	};

	return (
		<div className="md:w-1/2 lg:w-2/5 mb-7">
			<h2 className="font-black text-3xl text-center">
				Seguimiento Pacientes
			</h2>

			<p className="text-lg mt-5 text-center">
				Añade Pacientes y {''}
				<span className="text-green-500 font-bold">Administralos</span>
			</p>

			<form
				onSubmit={handleSubmit}
				className="mt-5 bg-gray-800 shadow-md shadow-black rounded-lg py-10 px-5"
				netlify
			>
				{error && (
					<Error>
						<p className="font-bold text-center uppercase">
							Todos los campos son obligatorios
						</p>
					</Error>
				)}
				<div className="mb-5">
					<label
						htmlFor="mascota"
						className="block font-bold uppercase"
					>
						Nombre Mascota
					</label>
					<input
						id="mascota"
						type="text"
						placeholder="Nombre de la Mascota"
						className="py-1 px-2 rounded-md mt-2 outline-none text-black w-full placeholder-gray-800"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="propietario"
						className="block font-bold uppercase"
					>
						Nombre Propietario
					</label>
					<input
						id="propietario"
						type="text"
						placeholder="Nombre del Propietario"
						className="py-1 px-2 rounded-md mt-2 outline-none text-black w-full placeholder-gray-800"
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block font-bold uppercase"
					>
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Email Contacto Propietario"
						className="py-1 px-2 rounded-md mt-2 outline-none text-black w-full placeholder-gray-800"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="alta" className="block font-bold uppercase">
						Alta
					</label>
					<input
						id="alta"
						type="date"
						className="py-1 px-2 rounded-md mt-2 outline-none text-black w-full placeholder-gray-800"
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="sintomas"
						className="block font-bold uppercase"
					>
						Síntomas
					</label>
					<textarea
						id="sintomas"
						className="py-1 px-2 rounded-md mt-2 outline-none text-black w-full placeholder-gray-800"
						placeholder="Describe los Síntomas"
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					/>
				</div>

				<input
					type="submit"
					className="text-white w-full p-3 rounded-sm cursor-pointer font-semibold bg-green-600 uppercase hover:bg-white hover:text-green-600 transition-all hover:-translate-y-1"
					value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
				/>
			</form>
		</div>
	);
};
export default Formulario;
