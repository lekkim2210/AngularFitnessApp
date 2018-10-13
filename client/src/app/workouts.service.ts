import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import { Workout } from './models/workout';

@Injectable()
export class WorkoutsService {

  private baseurl = 'someurl.com/something';
  constructor(private http: Http) { }

  GetAllWorkouts(): Promise<Workout[]> {
    return this.http.get(this.baseurl)
      .toPromise()
      .then(response => response.json() as Workout[])
      .catch(this.handleError);
  }

  GetWorkout(id: string): Promise<Workout> {
    const url = `${this.baseurl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Workout)
      .catch(this.handleError);
  }

  CreateWorkout(name: string, description: string): Promise<Workout> {
    const url = `${this.baseurl}/workout`;
    const header = this.addHeader();

    return this.http
      .post(url, JSON.stringify({name: name, description: description}), {
        headers: header
      })
      .toPromise()
      .then(response => response.json() as Workout)
      .catch(this.handleError);
  }

  DeleteWorkout(id: string): Promise<void> {
    const url =`${this.baseurl}/${id}`;
    return this.http.delete(url,
      {
        headers: this.addHeader()
      })
      .toPromise()
      .then(response => null)
      .catch(this.handleError);
  }

  CreateExercise(id: string, name: string, description: string, sets: string, reps: string): Promise<Workout> {
    const url = `${this.baseurl}/exercise`;
    return this.http
      .post(url, JSON.stringify({
        id: id,
        name: name,
        description: description,
        sets: sets,
        reps: reps
        }), {headers: this.addHeader()})
        .toPromise()
        .then(response => response.json() as Workout)
        .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
  console.log('It did not go well. Error: ', error);
  return Promise.reject(error.message || error);
  }

  private addHeader() {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('Authorization', 'Bearer ' + 'SomeToken');
    return header;
  }
}
