import { EntidadeBase } from "../../shared/entidade.model";
import { Prioridade } from "./prioridade.enum";

//entends = herança
//implements = implementando interface

export class Tarefa extends EntidadeBase{
        public descricao: string;
        public prioridade: Prioridade;
        public dataCriacao: Date;

        constructor(descricao: string, prioridade: Prioridade, id?: string) {
                super();

                if(id) {
                        this.id= id;
                }

                this.descricao = descricao;
                this.dataCriacao = new Date();
                this.prioridade = prioridade;

        }
}