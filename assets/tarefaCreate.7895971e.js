var c=Object.defineProperty;var n=(a,e,r)=>e in a?c(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var t=(a,e,r)=>(n(a,typeof e!="symbol"?e+"":e,r),r);import"./style.c0ed6924.js";import{E as l}from"./entidade.model.b604f7d9.js";import{T as h}from"./tarefa.repository.local-storage.25265096.js";var o=(a=>(a.Baixa="Baixa",a.Media="M\xE9dia",a.Alta="Alta",a))(o||{});class d extends l{constructor(r,i,s){super();t(this,"descricao");t(this,"prioridade");t(this,"dataCriacao");s&&(this.id=s),this.descricao=r,this.dataCriacao=new Date,this.prioridade=i}}class u{constructor(e,r){t(this,"txtDescricao");t(this,"rdbPrioridade");t(this,"btnSalvar");t(this,"idSelecionado");if(this.repositorioTarefas=e,this.configurarElementos(),r){this.idSelecionado=r;const i=this.repositorioTarefas.selecionarPorId(r);i&&this.preencherFormulario(i)}}preencherFormulario(e){switch(this.txtDescricao.value=e.descricao,e.prioridade){case o.Baixa:this.rdbPrioridade=document.querySelector("input[value='Baixa'");break;case o.Media:this.rdbPrioridade=document.querySelector("input[value='M\xE9dia'");break;case o.Alta:this.rdbPrioridade=document.querySelector("input[value='Alta'");break}this.rdbPrioridade.checked=!0}configurarElementos(){this.txtDescricao=document.getElementById("txtDescricao"),this.btnSalvar=document.getElementById("btnSalvar"),this.btnSalvar.addEventListener("click",e=>this.gravarRegistros())}gravarRegistros(){const e=this.obterDadosFormulario();this.idSelecionado?this.repositorioTarefas.editar(e.id,e):this.repositorioTarefas.inserir(e),window.location.href="tarefa.list.html"}obterDadosFormulario(){const e=this.txtDescricao.value,r=this.obterPrioridadeSelecionada();let i=null;return this.idSelecionado?i=new d(e,r,this.idSelecionado):i=new d(e,r),i}obterPrioridadeSelecionada(){return document.querySelector("input[type='radio']:checked").value}}const m=new URLSearchParams(window.location.search),p=m.get("id");new u(new h,p);
