

export default function LoginForm({onLogin}){

    function submitHandler(e) {
        e.preventDefault();
        const newUser = {
            username: e.target.username.value,
            password: e.target.password.value,
        };
        onLogin(newUser);
    }

    return (
        <> 
            <h1>Please Login</h1>
            <form onSubmit={submitHandler}>
                <input placeholder="username" name="username" />
                <input type='password' placeholder="password" name="password" />
                <button>Login</button>
            </form>
        </>
    )
}