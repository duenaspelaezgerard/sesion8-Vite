import { vistaHome } from "../vistas/vistaHome";
import { vistaOtro } from "../vistas/vistaOtro";

export const header = {
    template:  //html
    `
    <nav>
        <ul>
            <li><a href="#" id="home">Home</a></li>
            <li><a href="#" id="otro">Otro</a></li>
        </ul>

    </nav>
    `,
    script : ()=>{
        console.log('HOLA DESDE HEADER')
        //CUANDO EL USUARIO HACE CLICK HACEMOS UNA FUNCIÓN
        document.querySelector('#home').addEventListener
        ('click', () => {
            document.querySelector('main').innerHTML= vistaHome.template;
        });

        document.querySelector('#otro').addEventListener
        ('click', () => {
            document.querySelector('main').innerHTML= vistaOtro.template;
        });
    }
}