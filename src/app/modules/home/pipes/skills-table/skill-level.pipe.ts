import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillLevel',
})
export class SkillLevelPipe implements PipeTransform {
  levelEqui = {
    '1': 'Basic',
    '2': 'Intermediate',
    '3': 'Advanced',
  };
  transform(level: string): string {
    return this.levelEqui[level as keyof typeof this.levelEqui];
  }
}
