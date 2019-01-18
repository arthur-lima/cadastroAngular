import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/intertaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {
  listagemProdutos: Array<Produto>;
  produto: Produto = <Produto>{};

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.produtoService.listar() 
      .subscribe(produtos => {
          this.listagemProdutos = produtos
      });
  }

  deletar(id: number) {
    this.produtoService.deletar(id)
      .subscribe(
        () => { this.listar }
      );
  }
}
