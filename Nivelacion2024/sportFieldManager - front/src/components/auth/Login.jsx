import PropTypes from 'prop-types'
import logo from "../../assets/img/EscudoTransparente.png"
import { useState } from 'react'
import toast from 'react-hot-toast'

export const Login = ({switchAuthHandler}) => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!identifier || !password){
            toast.error("Por favor tus credenciales completas (username or email) & password");
        }
        return;
    }

    return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src={logo}
          alt="Kinal"
        />
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight">
          Inicio de sesión
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email or Username
            </label>
            <div className="mt-2">
              <input
                id="identifier"
                name="identifier"
                type="text"
                required
                autoComplete="off"
                value={identifier}
                onChange={(e) => setIdentifier (e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
 
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e => setPassword(e.target.value))}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
 
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <span
          onClick={switchAuthHandler}
          className="block mt-8 text-center text-sm text-blue-600 cursor-pointer hover:underline"
        >
          ¿No tienes una cuenta?... ¡Registrate Acá!
        </span>
      </div>
    </div>
  )
}

Login.propType = {
    switchAuthHandler: PropTypes.func.isRequired,
}

