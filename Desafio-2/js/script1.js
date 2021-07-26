/* Classe Produto 

Atributos     Métodos
-id            (Funções)
-nome           -adicionar()
-valor          -deletar()
                -editar()  Objeto */
class Produto {
 // Produtos
    constructor() {
       this.id = 1;
      this.arrayProdutos = []; // array vazio
    }
     
    salvar() {
        // quando aperta o botao salvar,vai ler dados
        let produto =  this.lerDados();

        if(this.validaCampos(produto) == true) {
            this.adicionar(produto);
        }

        this.listaTabela();
     }

     listaTabela() {

        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        
        // Percorre todos elementos Do array
        for(let i =0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow(); // cria uma nova linha da tabela

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;
            td_valor.innerText = this.arrayProdutos[i].endereco;

           td_id.classList.add('center');

           let imgEdit = document.createElement('img');
           imgEdit.src = 'img/edit.svg';
           imgDelete.setAttribute("onclick", "produto.deletar()"+this.arrayProdutos[i].id+")";

           td_acoes.appendChhild(imgEdit);
           td_acoes.appendChild(imgDelete);

        }
     }

     adicionar(produto) {
       this.arrayProdutos.push(produto); //adiciona 1 ou mais elentos no array
       this.id++;
     }

    lerDados () {
        
        let produto = {}

      produto.id = this.id; 
      produto.nomeProduto = document.getElementById('produto').value; // vai pegar o valor do produto
      produto.preco = document.getElementById('preco').value;
      

        return produto;
        
    }
    
validaCampos(produto) {
    let msg = ''; // inicia 0

    if(produto.nomeProduto == '') { // Se o valor for igual a vazio,manda alert
        msg += ' / Informe o nome do Produto\n';
    }

    if(produto.preco == '') {
        msg += '/ Informe o Preco do produto\n';
    }
   
    if(produto.preco == '') {
        msg += '/ Informe o Preco do produto\n';
    }

    if(msg != '') { // Se mensagem for diferente de Vazio

        alert(msg);
        return false;

    }
  //Se nao cair em nehuma das condicionais,vai retornar verdadeiro

    return true;
}
 cancelar() {
    document.getElementById('produto').value='';
    document.getElementById('preco').value ='';
          
    }

    deletar(id) {
      
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i,1);
                tbody.deleteRow(i);

            }
        }
    }
}

var produto = new Produto();

