var o=Object.defineProperty;var c=(t,a,r)=>a in t?o(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;var s=(t,a,r)=>(c(t,typeof a!="symbol"?a+"":a,r),r);class d{constructor(){s(this,"localStorage");s(this,"tarefas");this.localStorage=window.localStorage,this.tarefas=this.selecionarTodos()}gravar(){const a=JSON.stringify(this.tarefas);this.localStorage.setItem("tarefas",a)}inserir(a){this.tarefas.push(a),this.gravar()}editar(a,r){const e=this.tarefas.findIndex(i=>i.id===a);this.tarefas[e]={id:a,descricao:r.descricao,dataCriacao:r.dataCriacao,prioridade:r.prioridade},this.gravar()}excluir(a){this.tarefas=this.tarefas.filter(r=>r.id!==a),this.gravar()}selecionarTodos(){const a=this.localStorage.getItem("tarefas");return a?JSON.parse(a):[]}selecionarPorId(a){return this.tarefas.find(r=>r.id===a)}}export{d as T};
