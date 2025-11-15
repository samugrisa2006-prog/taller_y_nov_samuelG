function login(){

    event.preventDefault();//Evita qye la pagina se recarga 

    //crear variable para usuario
    const usuario='Samuel';
    const clave='2185';

    //Crear variables de los input del html
    const campo_usuario=document.getElementById('username').value;
    const campo_clave=document.getElementById('password').value;

    //validar si el usuario y la clave son iguales
    
    if(usuario==campo_usuario && clave==campo_clave){
        alert("Bienvenido.")

        //direccionar a la pagina inicio

        window.location.href='inicio.html';
    }
    else{
        alert("Usuario o contraseña incorrecta")
    }

}
const listado_productos=[];
function saveProduct(){

    const producto=document.getElementById('nombre').value;
    const cantidad=document.getElementById('cantidad').value;
    const precio=document.getElementById('precio').value;

    if(producto== ''|| isNaN(cantidad) || isNaN(precio)){
        alert("Por favor llene todos los campos. ")
    }
else{
//Crear el objeto
    const productos={
        producto:producto,
        cantidad:cantidad,
        precio:precio
    }
    //Agregar el objeto al listado
    listado_productos.push(productos)

    //alert
    alert('Producto agregado exitosamente✅',`${listado_productos['producto']}`)

    //limpiar formulario
    document.getElementById(`productForm`).reset();

}
mostrarProductos()
}

function mostrarProductos(){

    const tabla=document.getElementById('productTableBody');
    tabla.innerHTML='';

     listado_productos.forEach((pro) => {
        const fila=`<tr>
            <td>${pro.producto}</td>
            <td>${pro.cantidad}</td>
            <td>${pro.precio}</td>
        </tr>`

        tabla.innerHTML+=fila;
     });
}
