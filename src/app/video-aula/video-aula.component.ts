import { Component, OnInit } from '@angular/core';
import { CognitioMedia } from '../cognitio-media';
import { VideoAulaService } from './video-aula.service';
import { AlunoProfileService } from '../aluno-profile/aluno-profile.service';
import { Aluno } from '../aluno-profile/aluno';
import { DomSanitizer } from '@angular/platform-browser';
import { SvpService } from './svp.service';
import { VdocypherService } from './vdocypher.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-video-aula',
  templateUrl: './video-aula.component.html',
  styleUrls: ['./video-aula.component.css'],
  providers: [AlunoProfileService,VideoAulaService,SvpService,VdocypherService]
})
export class VideoAulaComponent implements OnInit {

  private videos:CognitioMedia[]=[];
  private alunoLogado:Aluno;
  private player;

  token:String;

  constructor(private videoAulaService:VideoAulaService,
    private svpService:SvpService,
    private vdoService:VdocypherService,
    private alunoService:AlunoProfileService,
    private sanitizer: DomSanitizer){}

  ngOnInit() {        
    this.vdoService.getVideo('eea6c28b15564829983ee5f2936e09e7')
      .subscribe(v => { 
          console.log(v);
           v.map(data => data.json())
            .do(data => console.log("User data" + JSON.stringify(data)))
            .catch(this.handleError);                      
//        new CognitioMedia(1,)
      });

      

    //this.loadVideoAulasByAluno();  
  }

  loadVideoAulasByAluno():void{
    this.alunoService.getAlunoLogado()
      .subscribe(a => this.alunoLogado=a);    
    
    this.videoAulaService.getVideoAulas(this.alunoLogado)
      .subscribe(v => this.setSafeUrl(v));
  }

  setSafeUrl(v) {
    v.urlSanitized = this.sanitizer.bypassSecurityTrustResourceUrl(v.url);
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

  // parse response da chamada ao SVPService
  // let videoInXML = this.svpService.getVideos();
    
  // if(videoInXML){
  //   let parser = new DOMParser();
  //   let xmlDoc = parser.parseFromString(videoInXML.toString(),"text/xml");
  //   let video_list_tag = xmlDoc.childNodes[0].childNodes[3].textContent;
  //   //let auth_token_tag = xmlDoc.childNodes[0].childNodes[3].textContent;
  //   console.log(`videos: ${video_list_tag}`); 
  // }      

}
