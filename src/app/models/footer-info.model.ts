import { Clientes } from "./clientes.model";
import { Linkinfo } from "./linkinfo.model";
import { Nosotros } from "./nosotros.model";

export interface FooterInfo {
    aliados:Array<Linkinfo>;
    clientes:Clientes;
    nosotros:Nosotros;
}
