import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoService } from './services/produto.service';
import { FormProdutoComponent } from './paginas/produtos/compartilhado/form-produto/form-produto.component';
import { ListaProdutoComponent } from './paginas/produtos/lista-produto/lista-produto.component';
import { CriarProdutoComponent } from './paginas/produtos/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './paginas/produtos/editar-produto/editar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutoComponent,
    FormProdutoComponent,
    ListaProdutoComponent,
    CriarProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
