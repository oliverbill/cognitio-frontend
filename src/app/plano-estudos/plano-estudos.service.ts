import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { PlanoEstudos } from './plano-estudos';
import { CognitioMedia } from '../cognitio-media'
import { Jogo } from '../jogo/jogo';
import { Quiz } from '../quiz/quiz';


@Injectable()
export class PlanoEstudosService implements OnInit {

  readonly GET_PLANO_ESTUDOS_URL = 'api/plano-estudos/?aluno=${aluno.nome}';
  readonly PUT_PLANO_ESTUDOS_URL = 'api/plano-estudos/aluno/{alunoId}';

  ngOnInit(){    
  }

  constructor(private http:HttpClient) { 
  } 

  getByAluno(alunoMatricula:Number):Observable<PlanoEstudos>{      
    if(!alunoMatricula){
      return of();
    }

    return this.http.get<PlanoEstudos>(this.GET_PLANO_ESTUDOS_URL)
      .pipe(
        tap(_ => this.log(`video-aulas encontradas para "${alunoMatricula}"`)),
          catchError(this.handleError<PlanoEstudos>('buscarPlanoEstudosParaAluno',null))
      );
  }

  insert(plano:PlanoEstudos):Observable<PlanoEstudos>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<PlanoEstudos>(this.PUT_PLANO_ESTUDOS_URL, plano, httpOptions)
      .pipe(
        tap((p: PlanoEstudos) => this.log(`plano de estudos adicionado w/ id=${p.nome}`)),
        catchError(this.handleError<PlanoEstudos>('insertPlanoEstudos'))
      );    
  }

  private log(msg:string){
    console.log('PlanoEstudosService: '+msg);
  }

  public handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }
}
