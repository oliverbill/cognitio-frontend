import { CognitioMedia } from '../cognitio-media'
import { Quiz } from '../quiz/quiz';
import { Jogo } from '../jogo/jogo';

export class PlanoEstudos{  
  
  id:Number;
  nome:String;
  videoAulas:CognitioMedia[];
  animacoes:CognitioMedia[];
  radioNovelas:CognitioMedia[];
  quizzes:Quiz[];
  jogos:Jogo[];

  constructor(
    id:Number,
    nome:String,    
    videoAulas:CognitioMedia[],
    animacoes:CognitioMedia[],
    radioNovelas:CognitioMedia[],
    quizzes:Quiz[],
    jogos:Jogo[]){}

  
}