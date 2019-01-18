import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/intertaces/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent {
  public produto: Produto;

  constructor(private produtoService: ProdutoService,
    private activetedRoute: ActivatedRoute,
    private router: Router) {
      this.getProduto(this.activetedRoute.snapshot.params.id);
     }

    getProduto(id: number){
      this.produtoService.getProduto(id)
        .subscribe((produto: Produto) => {
          this.produto = produto;
          }//, Mensagem de erro
        );
    }

    atualizarProduto(produto: Produto){
      this.produtoService.alterar(produto)
        .subscribe(
          () => { this.router.navigateByUrl('/'); }
          //,() =>{} Mensagem de erro
          );
    }
}
