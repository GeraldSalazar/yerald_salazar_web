interface SkillLevel {
  level: string;
  toString: string;
}
export interface Skill {
  name: string;
  icon: string;
  level: string;
}
export const skillsList: Skill[] = [
  { name: 'HTML5', icon: 'fa-brands fa-html5', level: '3' },
  { name: 'CSS3', icon: 'fa-brands fa-css3', level: '3' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', level: '2' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', level: '3' },
  { name: 'TypeScript', icon: 'fa-brands fa-ts', level: '3' },
  { name: 'Angular', icon: 'fa-brands fa-angular', level: '3' },
  { name: 'SQL', icon: 'fa-solid fa-database', level: '2' },
  { name: 'NodeJS', icon: 'fa-brands fa-node', level: '1' },
  { name: 'ExpressJS', icon: 'fa-brands fa-node-js', level: '1' },
  { name: 'Git', icon: 'fa-brands fa-git', level: '2' },
  { name: 'Flutter', icon: 'fa-solid fa-mobile', level: '2' },
];
