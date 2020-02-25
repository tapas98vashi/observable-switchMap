import { of, from } from 'rxjs'; 
import { map, delay, switchAll, switchMap } from 'rxjs/operators';

const getData = (param) => {
  return of(`retrieved new data with param ${param}`).pipe(
    delay(1000)
  )
}

// using a regular map
from(['rivet','tapas','valsad','angular']).pipe(
  map(param => getData(param))
).subscribe(val => val.subscribe(data => console.log(data)));

// using switchMap
from(['rivet','tapas','valsad','angular']).pipe(
  switchMap(param => getData(param))
).subscribe(val => console.log(val));
