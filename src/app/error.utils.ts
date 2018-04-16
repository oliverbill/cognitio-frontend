import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

export class ErrorUtils {

  public static log(msg: String) {
    console.log(msg);
  }

  public static handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error);    
    console.log(`${operation} failed: ${error.message}`);    
    return of(result as T);
    };
  }
}
