function agregarProducto(){
    const URL = "https://ecommerce23522grupo3.pythonanywhere.com/"

    document.getElementById('formulario').addEventListener('submit', function (event) {
                event.preventDefault(); // Evitamos que se envie el form 

                var formData = new FormData();
                formData.append('codigo', document.getElementById('codigo').value);
                formData.append('titulo', document.getElementById('titulo').value);
                formData.append('descripcion', document.getElementById('descripcion').value);
                formData.append('cantidad', document.getElementById('cantidad').value);
                formData.append('precio', document.getElementById('precio').value);
                formData.append('imagen', document.getElementById('imagenProducto').files[0]);
                formData.append('proveedor', document.getElementById('proveedorProducto').value);
                
                // Realizamos la solicitud POST al servidor. El método POST se usa para enviar y crear nuevos datos en el servidor.
                fetch(URL + 'productos', {
                    method: 'POST',
                    body: formData // Aquí enviamos formData. Dado que formData puede contener archivos, no se utiliza JSON.
                })

                    //Después de realizar la solicitud POST, se utiliza el método then() para manejar la respuesta del servidor.
                    .then(function (response) {
                        if (response.ok) { 
                            //Si la respuesta es exitosa, convierte los datos de la respuesta a formato JSON.
                            return response.json(); 
                        } else {
                            // Si hubo un error, lanzar explícitamente una excepción
                            // para ser "catcheada" más adelante
                            throw new Error('Error al agregar el producto.');
                        }
                    })

                    //Respuesta OK, muestra una alerta informando que el producto se agregó correctamente y limpia los campos del formulario para que puedan ser utilizados para un nuevo producto.
                    .then(function (data) {
                        alert('Producto agregado correctamente.');
                    })

                    // En caso de error, mostramos una alerta con un mensaje de error.
                    .catch(function (error) {
                        alert('Error al agregar el producto.');
                    })

                    // Limpiar el formulario en ambos casos (éxito o error)
                    .finally(function () {
                        document.getElementById('codigo').value = "";
                        document.getElementById('titulo').value = "";
                        document.getElementById('descripcion').value = "";
                        document.getElementById('cantidad').value = "";
                        document.getElementById('precio').value = "";
                        document.getElementById('imagenProducto').value = "";
                        document.getElementById('proveedorProducto').value = "";
                    });
            })
}

function listarProductos(){
    const URL = "https://ecommerce23522grupo3.pythonanywhere.com/"

    // Realizamos la solicitud GET al servidor para obtener todos los productos.
    fetch(URL + 'productos')
    .then(function (response) {
        if (response.ok) {
            //Si la respuesta es exitosa (response.ok), convierte el cuerpo de la respuesta de formato JSON a un objeto JavaScript y pasa estos datos a la siguiente promesa then.
            return response.json(); 
    } else {
            // Si hubo un error, lanzar explícitamente una excepción para ser "catcheada" más adelante
            throw new Error('Error al obtener los productos.');
        }
    })

    //Esta función maneja los datos convertidos del JSON.
    .then(function (data) {
        let tablaProductos = document.getElementById('tablaProductos'); //Selecciona el elemento del DOM donde se mostrarán los productos.

        // Iteramos sobre cada producto y agregamos filas a la tabla
        for (let producto of data) {
            let fila = document.createElement('tr'); //Crea una nueva fila de tabla (<tr>) para cada producto.
            fila.innerHTML = '<td>' + producto.codigo + '</td>' +
                '<td>' + producto.titulo + '</td>' +
                '<td>' + producto.descripcion + '</td>' +
                '<td align="right">' + producto.cantidad + '</td>' +
                '<td align="right">' + producto.precio + '</td>' +
                // Mostrar miniatura de la imagen
                // '<td><img src=./static/imagenes/' + producto.imagen_url +
                // ' alt="Imagen del producto" style="width: 100px;"></td>' +
                //  '<td align="right">' + producto.proveedor + '</td>' 
                
                //Al subir al servidor, deberá utilizarse la siguiente ruta. USUARIO debe ser reemplazado por el nombre de usuario de Pythonanywhere
                '<td><img src=https://www.pythonanywhere.com/user/ecommerce23522gr/files/home/ecommerce23522gr/mysite/static/imagenes/' + producto.imagen_url +' alt="Imagen del producto" style="width: 100px;"></td>' + '<td align="right">' + producto.proveedor + '</td>';
                + '<td><button class="eliminar">Eliminar</button></td>';
            //Una vez que se crea la fila con el contenido del producto, se agrega a la tabla utilizando el método appendChild del elemento tablaProductos.
            tablaProductos.appendChild(fila);
        }
    })

    //Captura y maneja errores, mostrando una alerta en caso de error al obtener los productos.
    .catch(function (error) {
        // Código para manejar errores
        alert('Error al obtener los productos.');
    });
}

function modificarProducto(){
    //Al subir al servidor, deberá utilizarse la siguiente ruta. USUARIO debe ser reemplazado por el nombre de usuario de Pythonanywhere
        const URL = "https://ecommerce23522grupo3.pythonanywhere.com/"
        

        //Vue.createApp para crear nuestra aplicación Vue.
        const app = Vue.createApp({
            
            //La función data devuelve un objeto que contiene las siguientes propiedades: 
            data() {
                return {
                    codigo: '',
                    titulo: '',
                    descripcion: '',
                    cantidad: '',
                    precio: '',
                    proveedor: '',
                    imagen_url: '',
                    imagenSeleccionada: null,
                    imagenUrlTemp: null,
                    mostrarDatosProducto: false, //mostrarDatosProducto para controlar la visibilidad del formulario de modificación.
                };
            },

            methods: {
                //Se ejecuta cuando se envía el formulario de consulta. En este método, utilizamos fetch para realizar una solicitud GET a la API y obtener los datos del producto correspondiente al código ingresado.
                obtenerProducto() {
                    fetch(URL + 'productos/' + this.codigo)
                    //Realiza una solicitud de red al servidor para obtener los datos del producto. Usa la URL definida anteriormente y añade 'productos/' seguido del código del producto.
                        
                        //Verificamos si la respuesta de la solicitud es exitosa (código de respuesta 200-299). 
                        .then(response =>  {
                            //Si es así, utilizamos response.json() para parsear la respuesta en formato JSON.
                            if (response.ok) {
                                return response.json() //Una vez que la respuesta llega del servidor, se convierte de formato JSON a un objeto JavaScript.
                            } else {
                                //Si la respuesta es un error, lanzamos una excepción para ser "catcheada" más adelante en el catch.
                                throw new Error('Error al obtener los datos del producto.')
                            }
                        })

                        //En este bloque, se asignan los datos obtenidos a las variables correspondientes de la aplicación Vue.
                        .then(data => {
                            this.titulo = data.titulo;
                            this.descripcion = data.descripcion;
                            this.cantidad = data.cantidad;
                            this.precio = data.precio;
                            this.proveedor = data.proveedor;
                            this.imagen_url =  data.imagen_url;
                            this.mostrarDatosProducto = true;
                        })

                        //Si ocurre un error durante la solicitud, se captura y se imprime en la consola.
                        .catch(error => {
                            alert('Código no encontrado.')
                        })
                },

                //Se activa cuando el usuario selecciona una imagen para cargar.
                seleccionarImagen(event) {
                    const file = event.target.files[0];
                    this.imagenSeleccionada = file;
                    this.imagenUrlTemp = URL.createObjectURL(file); // Crea una URL temporal para la vista previa
                },

                //Se usa para enviar los datos modificados del producto al servidor.
                guardarCambios() {
                    const formData = new FormData();
                    formData.append('codigo', this.codigo);
                    formData.append('titulo', this.codigo);
                    formData.append('descripcion', this.descripcion);
                    formData.append('cantidad', this.cantidad);
                    formData.append('proveedor', this.proveedor);
                    formData.append('precio', this.precio);

                    //Si se ha seleccionado una imagen nueva, la añade al formData. 
                    if (this.imagenSeleccionada) {
                        formData.append('imagen', this.imagenSeleccionada, this.imagenSeleccionada.name);
                    }

                    //Utilizamos fetch para realizar una solicitud PUT a la API y guardar los cambios.
                    fetch(URL + 'productos/' + this.codigo, {
                        method: 'PUT',
                        body: formData, //Dado que formData puede contener archivos, no se utiliza JSON.
                    })
                        .then(response => {
                            //Si la respuesta es exitosa, utilizamos response.json() para parsear la respuesta en formato JSON.
                            if (response.ok) {
                                return response.json()
                            } else {
                                //Si la respuesta es un error, lanzamos una excepción.
                                throw new Error('Error al guardar los cambios del producto.')
                            }
                        })

                        //Respuesta OK, muestra una alerta informando que el producto se agregó correctamente y limpia los campos del formulario para que puedan ser utilizados para un nuevo producto.
                        .then(data => {
                            alert('Producto actualizado correctamente.');
                            this.limpiarFormulario();
                        })

                        // En caso de error, mostramos una alerta con un mensaje de error.
                        .catch(error => {
                            console.error('Error:', error);
                            alert('Error al actualizar el producto.');
                        });
                },

                //Restablece todas las variables relacionadas con el formulario a sus valores iniciales, lo que efectivamente "limpia" el formulario.
                limpiarFormulario() {
                    this.codigo = '';
                    this.titulo = '';
                    this.descripcion = '';
                    this.cantidad = '';
                    this.precio = '';
                    this.imagen_url = '';
                    this.imagenSeleccionada = null;
                    this.imagenUrlTemp = null;
                    this.mostrarDatosProducto = false;
                }
            }
        });

        //Cuando se llama a app.mount('#app'), Vue busca en el documento HTML un elemento con el id app. Vue entonces toma el control de este elemento y de todo su contenido. Esto significa que Vue puede reaccionar a los cambios en sus datos y actualizar automáticamente el HTML en este elemento. También maneja eventos, como clicks o entradas de formulario, y actualiza los datos según las interacciones del usuario.

        app.mount('#app');
}

function eliminarProducto(){
    //Al subir al servidor, deberá utilizarse la siguiente ruta. USUARIO debe ser reemplazado por el nombre de usuario de Pythonanywhere
    const URL = "https://ecommerce23522grupo3.pythonanywhere.com/"
        
        //Vue.createApp para crear nuestra aplicación Vue.
        //Define una propiedad productos en el estado de la aplicación Vue. Inicialmente, es un array vacío que almacenará los datos de los productos obtenidos del servidor.
        const app = Vue.createApp({
            data() {
                return {
                    productos: []
                }
            },
            methods: {
                // El método obtenerProductos se utiliza para obtener los productos del servidor. 
                obtenerProductos() {
                    // Obtenemos el contenido del inventario
                    fetch(URL + 'productos') //Realiza una solicitud GET al servidor y obtener la lista de productos.
                        .then(response => {
                             // Si es exitosa (response.ok), convierte los datos de la respuesta de formato JSON a un objeto JavaScript.
                            if (response.ok) { return response.json();}
                        })

                        //Asigna los datos de los productos obtenidos a la propiedad productos del estado de Vue.
                        .then(data => {
                            // El código Vue itera este elemento para generar la tabla
                            this.productos = data;
                        })

                        //Captura y maneja errores, mostrando una alerta en caso de error al obtener los productos.
                        .catch(error => {
                            console.log('Error:', error);
                            alert('Error al obtener los productos.');
                        });
                },

                //Se utiliza para eliminar un producto.
                eliminarProducto(codigo) {
                    //Se muestra un diálogo de confirmación. Si el usuario confirma, se realiza una solicitud DELETE al servidor a través de fetch(URL + 'productos/${codigo}', {method: 'DELETE' }).
                    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
                        fetch(URL + `productos/${codigo}`, { method: 'DELETE' })
                            .then(response => {
                                if (response.ok) {
                                    // Si es exitosa (response.ok), elimina el producto y da mensaje de ok.
                                    this.productos = this.productos.filter(producto => producto.codigo !== codigo);
                                    alert('Producto eliminado correctamente.');
                                }
                            })

                            // En caso de error, mostramos una alerta con un mensaje de error.
                            .catch(error => {
                                alert(error.message);
                            });
                    }
                }
            },

            //Una vez iniciada la app de Vue, se carga el método mounted()
            mounted() {
                //Se llama al método obtenerProductos para cargar la lista de productos cuando la página se carga por primera vez.
                this.obtenerProductos();
            }
        });

        //Monta la aplicación Vue en el elemento <body> del DOM. Esto activa Vue en la página, haciendo que sea reactivo y maneje el contenido dinámicamente según los datos y las interacciones del usuario.
        app.mount('body');
}