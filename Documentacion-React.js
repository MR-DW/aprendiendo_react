// React
// 
// instala un modulo que permite instalar la app de react y su entorno
// npm i -g create-reac-app
// 
//1- Instalar react 
// npx create-react-app nombre-app

//2- Abrir la carpeta de la app en visual

//3- Estructura de archivos
// package.json --> Aquí se encuentran las dependencias/librerias que se instalan
// Node_module --> estos modulos sirven para utilizar y llamar dentro de la app, css, dom, errores, eventos, todas las herramientas de node para poder utilizar/importar.
// Public --> muestra la info a la que va a tener acceso el usuario final.
//          index.html --> Obtiene los componentes renderizados de la carpeta Src --> Index.js y es el encargado de plasmar en el navegador la app. Esto es posible ya que contiene un div con el id root.
// Src --> es la carpeta que contiene todos nuestros datos y donde le voy a dar forma a la app con los archivos App.js App.css
//         App.js --> Es donde esta nuestra app, donde escribo mi html y funciones js/ts.
//         Index.js --> Es donde debo registrar mi app/template/componentes creados en App.js/archivos similares y renderiza la app/componenete por contener una var que que se comunica con el index.html al asignarle ReactDOM.createRoot(document.getElementByID('root')).
//                      Se registra al componente entre los tags <React.StrictMode>, como si fuera un tag <NombreArchivo.js />
//Todos los archivos deben tener sus imports correspondientes.
// 
//4- Para ejecutar la app --> debo levantar el servidor 
// npm start

// Para finalizar la ejecucion --> cortar el servidor
// ctrl+c

//5- Instalar extension en chrome --> react developers tools 
// para adaptar f12 a react
// 
//6- App.js Creando componentes.Hay 4 secciones:
// A --> la parte de arriba que contiene los imports.
// B --> le sigue la function cuyo nombre es el nombre del componente ( para ser descriptivo). Allí dentro se colocara toda la lógica del componente (JS)
// c --> el return de la function componente(). Aquí se utilizará un tipeo similar a HTML pero con las modificaciones adecuadas para que react pueda leerlo y construir un html, también se utiliza js {} para poder completar los componentes con datos dinamicos.
// D --> el export, siempre al final del archivo. Permite que otros archivos como el index.js pueda acceder al componente.
// 
// HOOKS --> permite cambiar el DOM de manera dinamica, van colocados en la parte de la logica B y debe importarse el useState A. En la parte de la logica va a obtener un elemento html (C) para poder modificar la funcion este elemento de la parte C debe tener la funcion y un event listener.
// import {useState} from 'react'
// 
// ej: CONTADOR: Use State
// se crea la var que almacena el valor y el metodo/función que modifica ese valor.
// 
// function App(){
//   const[contador,setContador] = useState(0)

//   const aumentar = () => {
//      setContador(contador + 1);
// 
//  }
//  const decrementar = () => {
//      setContador(contador - 1);
// 
//  }
//  return( 
//      <button onClick={aumentar} type=""> Aumentar </button>
//       <button onClick={decrementar} type=""> Decrementar </button>
//        )
// }
// 
//  ej: Use efect
// 
// 7- CONSUMOS DE APIS:
// import React, {Component} from 'react' --> importar los componentes de react

//PARTE LOGICA:

// Vamos a cambiar la funcion principal (parte B y C) por una class, para poder acceder a sus metodos y props, ademas ya la función no nos va a retornar un dibujado de pagina,
// sino que la class va a retornar un renderizado. La class va a heredar (extends) de Component, sus props y metodos. Dentro del render (), se ejecuta la parte C. Antes del render la parte B.
// El metodo contructor recibe props, que va a tener una propiedad llamada state(estado, que va a cambiar segun la info que le pasemos a la props). Y dentro de state van a recibir los posts.
// Otro metodo a utilizar es el  componentDidMount(){}, que indica que cuando se inicialice el componente se ejecutará todo lo que esté entre llaves. En este caso el llamado a la api.
// en una var const se va a almacenar el url de la api. Luego utilizamos el metodo fetch para poder acceder a la api (como con java script). Seguido se utiliza un .then para acceder al objeto
//  y mediante la funcion (res => res.json()), traducir toda la data de la api a formato json y asi poder acceder a la misma. 
// Luego con otro .then accedemos al json con otra funcion flecha (json => this.state(post:json)), de esta manera se accede al json que contiene la data de la API, con this.state estoy
// accediendo a las props y metodos del metodo constructor de la clase principal y como argumentos le asigno a la propiedad posts el json con la data de la api.
//
// class App extends Component {
//      constructor(props) {
//          super(props);
//          this.state = {
//              posts:[]
//          }
//      }
// 
//      componentDidMount(){
//          const urlAPI = 'https'
//          fetch(urlAPI)
//          .then(response => response.json)
//          .then(json => this.setState(posts:json))
//      }
// 
//      render(){
//          return{ 
//              <p>Hola</p>
//          }
//      }
// }

//PARTE VISUAL (HTML - CSS - BOOTSTRAP)
// 
// Puedo instalar bootstrap con el cdn o mediante comandos en consola. En el primer caso, se copiaran los links correspondientes en el archivo index.html en el head.
// Verificar de utilizar bootstrap para react.
// 
// Para devolver la data que nos trae la api, dentro de la parte B (render()), vamos a crear una var const, a la cual le paso un objeto, en este caso posts. const {posts} = this.state; 
// Luego en el return allí devolvere el html. Primero crear un <div> que contendrá todo el componente. con una función .map vamos a recorrer el posts que contiene la data json ---> 
// {posts.map((elem) => ())}; elem ---> representa cada elemento que posea el objeto posts y por cada elemento se ejecutara lo que se encuantra dentro de los parentesis a los que apunta la flecha.
// En este caso, allí dentro de los parentesis, se colocara un <div> que dentro de su tag contendra el atributo  key =  que se le asigna {post.id}, este traerá el id del elemento correspondiente desde la api.
// Todos los datos que yo deseo traer/consumir de la api van a ir colocados entre llaves {} primero el nombre del objeto que contiene la data json . punto el campo(segun bbdd) o propiedad que tiene la api.
// 
// 
// 
// 

// class App extends Component {
//      constructor(props) {
//          super(props);
//          this.state = {
//              posts:[]
//          }
//      }
// 
//      componentDidMount(){
//          const urlAPI = 'https'
//          fetch(urlAPI)
//          .then(response => response.json)
//          .then(json => this.setState(posts:json))
//      }
// 
//      render(){
//          const {posts} = this.state; 
//          return{ 
//              <div className="container">
//                  <div className="container-title">
//                      <h1 className = "display-4">Listado de posts de la api</h1>
//                  </div>
//                  {posteos.map((elem) => (
//                      <div className="card" key = {post.id}>
//                          <div className="card-header" key = {post.title}>
//                          
//                          </div>
//                          <div className="card-body" key = {post.url}>
//                          
//                          </div>
//                      </div>  
//                  ))}
//              </div>
//          }
//      }
// }
// 
// 
//
//  export default App
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 