import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VideoPlayerComponent } from './video-player/video-player.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VideoAulaComponent } from './video-aula/video-aula.component';
import { AlunoProfileComponent } from './aluno-profile/aluno-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanoEstudosComponent } from './plano-estudos/plano-estudos.component';
import { AnimacaoComponent } from './animacao/animacao.component';
import { RadioNovelaComponent } from './radio-novela/radio-novela.component';
import { QuizComponent } from './quiz/quiz.component';
import { JogoComponent } from './jogo/jogo.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    VideoAulaComponent,
    AlunoProfileComponent,
    PlanoEstudosComponent,
    AnimacaoComponent,
    RadioNovelaComponent,
    QuizComponent,
    JogoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
