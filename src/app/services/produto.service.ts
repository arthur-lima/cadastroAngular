import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../intertaces/produto';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  url = `${environment.proddutoApiUrl}/produtos`;

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }

  alterar(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.url, produto);
  }

  deletar(id: Number): Observable<Produto> {
    const url = this.url + '${id}'
    return this.http.delete<Produto>(url);
  }

  getProduto(id: number): Observable<Produto> {
    const url = this.url + '${id}'
    return this.http.get<Produto>(url);
  }
}
