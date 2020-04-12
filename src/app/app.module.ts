import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectCardLayoutComponent } from './components/project-card-layout/project-card-layout.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { LinkTargetComponent } from './components/link-target/link-target.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { SectionComponent } from './components/section/section.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FillBarComponent } from './components/fill-bar/fill-bar.component';
import { AnimatedParticlesComponent } from './components/animated-particles/animated-particles.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TypeWriterComponent } from './components/type-writer/type-writer.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FooterComponent } from './pages/footer/footer.component';
import { JourneyComponent } from './pages/journey/journey.component';

import { GlobalEventsService } from './_services/global-events/global-events.service';
import { ElementPusherComponent } from './components/element-pusher/element-pusher/element-pusher.component';
import { FadeInComponent } from './components/fade-in/fade-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectCardLayoutComponent,
    ProjectModalComponent,
    NavbarComponent,
    AboutComponent,
    LinkTargetComponent,
    SkillsComponent,
    SectionComponent,
    ProjectsComponent,
    FillBarComponent,
    AnimatedParticlesComponent,
    LandingComponent,
    TypeWriterComponent,
    TimelineComponent,
    FooterComponent,
    JourneyComponent,
    ElementPusherComponent,
    FadeInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModalModule,
  ],
  providers: [GlobalEventsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
