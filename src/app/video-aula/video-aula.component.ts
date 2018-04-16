import { Component, OnInit } from '@angular/core';
import { CognitioMedia } from '../cognitio-media';
import { VideoAulaService } from './video-aula.service';
import { AlunoProfileService } from '../aluno-profile/aluno-profile.service';
import { Aluno } from '../aluno-profile/aluno';
import { DomSanitizer } from '@angular/platform-browser';
import { SvpService } from './svp.service';
import { VdocypherService } from './vdocypher.service';

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
    // let videoInXML = this.svpService.getVideos();
    
    // if(videoInXML){
    //   let parser = new DOMParser();
    //   let xmlDoc = parser.parseFromString(videoInXML.toString(),"text/xml");
    //   let video_list_tag = xmlDoc.childNodes[0].childNodes[3].textContent;
    //   //let auth_token_tag = xmlDoc.childNodes[0].childNodes[3].textContent;
    //   console.log(`videos: ${video_list_tag}`); 
    // }
      
    this.player = this.vdoService.getVideo('eea6c28b15564829983ee5f2936e09e7');
    console.log(this.player);

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

}
