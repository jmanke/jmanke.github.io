import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { techSkills, languageSkills } from 'src/assets/data/skills';
import { Skill } from 'src/app/models/Skill';

interface ISkillItem {
  name: string;
  src: string;
}

interface ISkillGroup {
  name: string;
  skills: ISkillItem[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  techSkills: Skill[] = techSkills;
  languageSkills: Skill[] = languageSkills;
  frontendSkills: ISkillItem[] = [
    { name: 'Angular', src: 'assets/images/angular-icon.svg' },
    { name: 'React', src: 'assets/images/react.svg' },
    { name: 'Bootstrap', src: 'assets/images/bootstrap-icon.svg' },
    { name: 'TypeScript', src: 'assets/images/typescript.svg' },
    { name: 'JavaScript', src: 'assets/images/javascript.svg' },
    { name: 'CSS3', src: 'assets/images/css-3-1.svg' },
    { name: 'HTML5', src: 'assets/images/html5.svg' },
  ];
  backendSkills: ISkillItem[] = [
    { name: '.NET Core', src: 'assets/images/dot-net-core-7.svg' },
    { name: 'C#', src: 'assets/images/cs.svg' },
    {
      name: 'Microsoft SQL Server',
      src: 'assets/images/microsoft-sql-server.svg',
    },
    { name: 'Docker', src: 'assets/images/docker.svg' },
  ];
  otherSkills: ISkillItem[] = [
    { name: 'Unity 3D', src: 'assets/images/unity-technologies-logo.svg' },
    { name: 'C++', src: 'assets/images/cpp.svg' },
  ];

  skillGroups: ISkillGroup[] = [
    { name: 'Frontend', skills: this.frontendSkills },
    { name: 'Backend', skills: this.backendSkills },
    { name: 'Other', skills: this.otherSkills },
  ];

  @ViewChild('intersectionTest') intersectionTest: ElementRef;

  constructor() {}

  ngOnInit(): void {
    techSkills.sort((a, b) => b.percent - a.percent);
    languageSkills.sort((a, b) => b.percent - a.percent);
  }
}
