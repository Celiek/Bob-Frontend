

export default function Register() {
    return(
        <div className="container">
            <h1>Logowanie</h1>
            <form action="post">
                <input type="text" name="login" /> Login
                <input type="text" name="hasło" id="" /> Hasło
            </form>
        </div>
    )
}