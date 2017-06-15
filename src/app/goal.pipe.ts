import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'goal',
  pure: false
})

export class GoalPipe implements PipeTransform {

  transform(input: Project[], desiredGoal){
    var output: Project[] = [];
    if(desiredGoal === "under10000") {
      for(var i=0; i < input.length; i++) {
        if(input[i].goal <= 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGoal === "over10000") {
      for(var i=0; i < input.length; i++) {
        if(input[i].goal > 10000) {
          output.push(input[i]);
        }
      }
    return output;
      }
      else {
        return input
      }
    }
  }
