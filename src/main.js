import { header } from "./componentes/header"
import { vistaHome } from "./vistas/vistaHome"

document.querySelector('header').innerHTML = header.template
header.script()
// document.querySelector('main').innerHTML = vistaHome.template
// vistaHome.script()
