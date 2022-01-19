import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TtsPipe } from './pipes/tts.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { WeatherComponent } from './components/weather/weather.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';

import { AdminArticlesComponent } from './components/admin-articles/admin-articles.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminTeamsComponent } from './components/admin-teams/admin-teams.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { BannerComponent } from './components/banner/banner.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { ResultComponent } from './components/result/result.component';
import { TeamComponent } from './components/team/team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayArticleComponent } from './components/display-article/display-article.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerStatusComponent } from './components/player-status/player-status.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    TtsPipe,
    ReplacePipe,
    ReversePipe,
    WeatherComponent,
    AddTeamComponent,
    AddMatchComponent,
    AddPlayerComponent,

    AdminArticlesComponent,
    AdminPlayersComponent,
    AdminComponent,
    AdminTeamsComponent,
    AdminUsersComponent,
    AdminMatchesComponent,
    ArticleFormComponent,
    BannerComponent,
    BlogComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    ResultComponent,
    TeamComponent,
    TeamsComponent,
    CupEventComponent,
    DisplayUserComponent,
    DisplayTeamComponent,
    DisplayMatchComponent,
    DisplayArticleComponent,
    DisplayPlayerComponent,
    EditMatchComponent,
    EditPlayerComponent,
    EditArticleComponent,
    EditUserComponent,
    LoginComponent,
    SignupComponent,
    MatchesComponent,
    SearchMatchesComponent,
    PlayerComponent,
    PlayersComponent,
    PlayerStatusComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
