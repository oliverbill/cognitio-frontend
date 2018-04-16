import { Injectable} from '@angular/core';
import { CognitioMedia } from '../cognitio-media';
import { Aluno } from '../aluno-profile/aluno';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class VideoAulaService {

  readonly GET_VIDEOAULAS_URL = 'api/video-aulas/?aluno=${aluno.nome}';

  constructor(private http:HttpClient) { }

  getVideoAulas(aluno:Aluno): Observable<CognitioMedia[]>{
    return this.http.get<CognitioMedia[]>(this.GET_VIDEOAULAS_URL)
      .pipe(
        tap(_ => this.log(`video-aulas encontradas para "${aluno.nome}"`)),
          catchError(this.handleError<CognitioMedia[]>('buscarVideAulasParaAluno',[]))
      );      
  }

  private log(msg:string){
    console.log('VideoAulaService: '+msg);
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
