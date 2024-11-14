import { useState } from "react";
import './Login.css'

export function Login({ onSubmit })  {
    const [username, setUsername] = useState("")
    return (
        <div className="wrapper-login">
            <h1>Velkommen!</h1>
            <form className="form-login"onSubmit={(e) => {
                e.preventDefault()
                onSubmit(username)
            }}
            >
                <input type="text"
                       value={username}
                       placeholder="Tast inn navnet ditt"
                       maxLength={15}
                       onChange={(e) => setUsername(e.target.value)}

                />
                <input type="submit" />
            </form>
        </div>

    )
}