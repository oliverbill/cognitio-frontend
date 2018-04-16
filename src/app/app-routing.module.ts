
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { VideoAulaComponent } from '../app/video-aula/video-aula.component';
import { PlanoEstudosComponent } from './plano-estudos/plano-estudos.component';
import { AnimacaoComponent } from './animacao/animacao.component';
import { RadioNovelaComponent } from './radio-novela/radio-novela.component';
import { QuizComponent } from './quiz/quiz.component';
import { JogoComponent } from './jogo/jogo.component';

const ROUTES:Routes = [
  { path: '',component: PlanoEstudosComponent},
  { path: 'inicio',component: PlanoEstudosComponent},
  { path: 'video-aula/:id',component: VideoAulaComponent},
  { path: 'animacao/:id',component: AnimacaoComponent},
  { path: 'radionovela/:id',component: RadioNovelaComponent},
  { path: 'quiz/:id',component: QuizComponent},
  { path: 'jogo/:id',component: JogoComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }