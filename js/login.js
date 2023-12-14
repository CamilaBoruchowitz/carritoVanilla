const loginAdmin = () => {
    const usuarioLogin = document.getElementById('usuario').value;
    const contraseniaLogin = document.getElementById('contrasenia'). value;

    const usuarioGuardado = localStorage.getItem(usuarioLogin);
    const passGuardada = localStorage.getItem(contraseniaLogin);

    if(usuarioLogin === usuarioGuardado && contraseniaLogin === passGuardada ){
        alert(`Bienvenido ${usuarioLogin} a la tienda online Luna&Mora`);
        window.location.href = './pages/home.html';
    }else{
        alert('Por favor ingrese un usuario y contraseña');
    }
}

const registrarUsuario = () => {
    const usuarioLogin = document.getElementById('usuario').value;
    const contraseniaLogin = document.getElementById('contrasenia'). value;
    localStorage.setItem(usuarioLogin, contraseniaLogin);
}
