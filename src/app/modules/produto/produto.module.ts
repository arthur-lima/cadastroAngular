import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from 'src/app/intertaces/produto';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule implements Produto {
  id: number;
  nome: string;
  descricao: string;
  preco_venda: number;
  preco_custo: number;
}
