/*
let usuario = prompt("Ingrese su usuario");
let contraseña = prompt('Ingrese su contraseña');
alert(`Bienvenido ${usuario} a la tienda online Luna&Mora`);
ESTO YO LO TENIA PARA LOS PROMPT PERO DE LA OTRA FORMA ES PARA HACER CON EL FORM
*/

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
/*
let usuario = document.getElementById('emailLogin').value;
let contraseña = document.getElementById('passwordLogin').value; 





onst loginAdmin = () =>{
    let userAdmin = 'useradmin@gmail.com';
    let passAdmin = '123456PPo';

    let userEmail = document.getElementById('emailLogin').value;
    let userPassword = document.getElementById('passwordLogin').value;

    console.log(userAdmin, passAdmin);
    console.log(userEmail, userPassword)

    if(userAdmin == userEmail && passAdmin == userPassword){
        alert('Bienvenido '+ userAdmin);
        window.location.href = '/clase9_listas/pages/formulario.html';
    }
    else{
        alert('User o password incorrectos')
        window.location.href = '/clase9_listas/pages/error.html';
    }

    console.log(userAdmin, passAdmin);
}


ESTO ENVIAJES 
const Login = () => {
  const navegar = useNavigate();
  const [formData, setFormData] = useState({
    usuario: "",
    contrasena: "",
  });
  //   manejador de evento o acciones, los ...spredoperator es para traeme todo lo anterior(formData) el nombre con el valor
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  //   fun para q busque los existentes
  const usuarioExistente = JSON.parse(localStorage.getItem(formData.usuario));

  const handleRegistro = (e) => {
    e.preventDefault();
    if (formData.usuario.length > 0 && formData.contrasena.length > 0) {
      localStorage.setItem(formData.usuario, JSON.stringify(formData));
      navegar("/viajes");
    } else {
      alert("Debes ingresar un usuario y/o contraseña válida");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ?. puede o no estar definido
    if (
      usuarioExistente?.usuario === formData?.usuario &&
      usuarioExistente?.contrasena === formData?.contrasena
    ) {
      navegar("/viajes");
    } else {
      alert(
        "Debes estar registrado para ingresar o has puesto usuario y/o contraseña inválida"
      );
    }
  };


*/

