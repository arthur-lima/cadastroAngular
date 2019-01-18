import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProdutoComponent } from './paginas/produtos/lista-produto/lista-produto.component';
import { CriarProdutoComponent } from './paginas/produtos/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './paginas/produtos/editar-produto/editar-produto.component';
const routes: Routes = [
  { path: '', component: ListaProdutoComponent },
  { path: 'produtos/criar', component: CriarProdutoComponent},
  { path: 'lembrete/editar/:id', component: EditarProdutoComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
