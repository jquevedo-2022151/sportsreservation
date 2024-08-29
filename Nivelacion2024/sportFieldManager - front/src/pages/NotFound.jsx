import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
                <p class="text-9x1 font-semibold text-blue-600">404</p>
                <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
                <p class="mt-6 text-2xl leading-7">¡Lo lamentamos!</p>
                <p class="mt-1 text-base leading-7">El recurso que buscas no está disponible</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <Link 
                    to="/" 
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outlfocus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    </Link>
                    Regresar al inicio
                    <a 
                    href="mailto:jquevedo-2022151@kinal.edu.gt?subjet=Necesito%20ayuda" 
                    className="text-sm font-semibold text-blue-600">Contactar a soporte <span aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
        </main>
    )
}


