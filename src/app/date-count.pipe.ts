import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); // get current date and time 
    let todaywithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs (value - todaywithNoTime) //returns value in miliseconds
    const secondsInDay=86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; // convert miliseconds to seconds
    var dataCounter = dateDifferenceSeconds/secondsInDay;

    if (dataCounter>=1 && value>todaywithNoTime){
      return dataCounter;
    }else{
      return 0;
    }
  }

}
