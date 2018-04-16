export class Quiz{
  
  id:Number;
  nome:String;
  enunciado:String;
  alternativas:Map<String,String> = new Map<String,String>();
  resposta:String;

  constructor()
  {
    this.loadQuizFake();
  };

  loadQuizFake(){
    this.id = 1;
    this.nome = 'Memorias Postumas Quiz';
    this.enunciado = 'Quem matou Braz Cubas ?';
    this.alternativas.set('a','Ele se suicidou');
    this.alternativas.set('b','Quincas');
    this.alternativas.set('c','Seu pai');
    this.alternativas.set('d','Ele não morreu');
    this.resposta = 'a';
  }
    
}