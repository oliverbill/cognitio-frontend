import { Component, OnInit } from '@angular/core';
import { PlanoEstudosService } from './plano-estudos.service';
import { CognitioMedia } from '../cognitio-media'
import { Quiz } from '../quiz/quiz';
import { Jogo } from '../jogo/jogo';
import { PlanoEstudos } from '../plano-estudos/plano-estudos';
import { Router } from '@angular/router';
import { Aluno } from '../aluno-profile/aluno';
import { AlunoProfileService } from '../aluno-profile/aluno-profile.service';
import { zipAll } from 'rxjs/operators';

@Component({
  selector: 'app-plano-estudos',
  templateUrl: './plano-estudos.component.html',
  styleUrls: ['./plano-estudos.component.css'],
  providers: [PlanoEstudosService,AlunoProfileService]
})
export class PlanoEstudosComponent implements OnInit {
 
  planoEstudos:PlanoEstudos;
  alunoLogado:Aluno;
  
  constructor(private service:PlanoEstudosService,private alunoSvc:AlunoProfileService) {
    this.mockAlunoLogado();    
    // alunoSvc.getAlunoLogado()
    //   .subscribe(a => this.alunoLogado = a);

    this.mockPlanoEstudos();
    //this.getPlanoEstudosByAluno(12345);
  }

  mockAlunoLogado(){
    this.alunoLogado = {
      matricula:12345,nome:'William',ultimoNome:'Alves',
        endereco: {logradouro:'Av Escola Politecnica, 5950', bairro:'Ŕio Pequeno',
        cidade: 'Sao Paulo', estado: 'SP'},plano:'Golden'};
  }

  mockPlanoEstudos() {
    this.planoEstudos = {
      id:1, nome:'A001-P1',
      videoAulas:[{id:1,nome:'Sujeito Indeterminado',url:'',urlSan:''}], // videoaulas
      animacoes: [{id:1,nome:'Memorias Postumas: Retorno ao Rio',url:'',urlSan:''}], // animacoes
      radioNovelas: [{id:1,nome:'Memorias Postumas: Seu primeiro amor',url:'',urlSan:''}], // radionovelas
      quizzes: [new Quiz()] ,
      jogos: [{id:1,nome:'Biblioteca Maluca',codigo:''}]
    }
  }

  ngOnInit() {
  }

  getPlanoEstudosByAluno(alunoMatricula:Number):void{
    this.service.getByAluno(alunoMatricula)
      .subscribe(p => this.planoEstudos = p);    
  }

  incluirPlanoEstudos(videos:CognitioMedia[],anims:CognitioMedia[],
    radioNovs:CognitioMedia[],quizs:Quiz[],jogs:Jogo[]): void
  {
    if(!this.isInputValido(videos,anims,radioNovs,quizs,jogs)){
      return;
    }
    this.service.insert({id:2,nome:'PLANO-002',videoAulas:videos,animacoes:anims,radioNovelas:radioNovs
        ,quizzes:quizs,jogos:jogs} as PlanoEstudos )
      .subscribe(p => this.planoEstudos = p);      
  }

  isInputValido(videoAulas:CognitioMedia[],animacoes:CognitioMedia[],
    radioNovelas:CognitioMedia[],quizzes:Quiz[],jogos:Jogo[]): boolean
  {    
    if(!videoAulas || !animacoes)
    {
      return false;
    }
    return true;
  }
}
