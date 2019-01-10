import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../intertaces/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listagemProdutos: Array<Produto>;
  produto: Produto;

  constructor(private produtoService: ProdutoService) {
   
  }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.produtoService.listar().subscribe(produtos => this.listagemProdutos = produtos);
  }

  salvar() {
    //TODO: verificar se o objeto esta null
    this.produtoService.salvar(this.produto).subscribe(data => {
      this.listar();
      console.log(data);
    });
  }


}
