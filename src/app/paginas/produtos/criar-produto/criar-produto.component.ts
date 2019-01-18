import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Router } from '@angular/router';
import { Produto } from 'src/app/intertaces/produto';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent {

  constructor(private produtoService: ProdutoService, private router: Router) { }

  salvarProduto(produto: Produto) {
    this.produtoService.salvar(produto)
      .subscribe(
        () => { this.router.navigateByUrl('/'); } //, mensagem de erro
      );
  }

}
