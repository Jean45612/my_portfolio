import type { Dictionary } from "../i18n/es";

import encuestas from "../assets/projects/encuestas-encuestas.webp";
import historiaPaciente from "../assets/projects/historia_clinica-paciente.webp";
import historiaReporte from "../assets/projects/historia_clinica-reporte.webp";
import logisticoProducto from "../assets/projects/logistico-producto.webp";
import logisticoKardex from "../assets/projects/logistico-kardex.webp";
import logisticoSalida from "../assets/projects/logistico-salida.webp";
import tarjetasTar from "../assets/projects/tarjetas-tar1.webp";
import tarjetasEditar from "../assets/projects/tarjetas-editar.webp";
import proyectosTarea from "../assets/projects/proyectos-tarea.webp";
import proyectosListado from "../assets/projects/proyectos-listado.webp";
import pedidosPedido from "../assets/projects/pedidos-pedido.webp";
import pedidosDetalle from "../assets/projects/pedidos-detalle.webp";

export type ProjectId = keyof Dictionary["projects"]["items"];

export interface Project {
  id: ProjectId;
  stack: string[];
  images: string[];
}

export const projects: Project[] = [
  { id: "encuestas", stack: ["Angular", "Laravel"], images: [encuestas] },
  { id: "logistico", stack: ["Vue.js", "Laravel"], images: [logisticoProducto, logisticoKardex, logisticoSalida] },
  { id: "pedidos", stack: ["Angular", "Laravel"], images: [pedidosPedido, pedidosDetalle] },
  { id: "tarjetas", stack: ["Angular", "Laravel"], images: [tarjetasTar, tarjetasEditar] },
  { id: "gestion", stack: ["Vue.js", "Laravel"], images: [proyectosTarea, proyectosListado] },
  { id: "historia", stack: ["Laravel"], images: [historiaPaciente, historiaReporte] },
];
