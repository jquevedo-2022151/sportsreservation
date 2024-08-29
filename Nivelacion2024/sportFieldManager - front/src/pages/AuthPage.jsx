import { useState } from "react"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"

export const AuthPage = () => {
    const [isLogin, setISLogin] = useState(true)
    
    const handleAuthPageToggle = () => {
        setISLogin((prev) => !prev)
    }

  return (
    <div className="flex min-h-screen items-center justify-center">
        {isLogin ?(
            <Login switchAuthHandler={handleAuthPageToggle}/>
        ) : (
            <Register switchAuthHandler={handleAuthPageToggle}/>
        )}
    </div>
  )
}
