import { SafeResourceUrl } from "@angular/platform-browser";

export class CognitioMedia {
    
  id:Number;
  nome:String;
  url:String;  
  urlSan:SafeResourceUrl = ' ';

  constructor(
    id:Number,
    nome:String,
    url:String    
  )
  {}
  
}