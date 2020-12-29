import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/noteService/note-service.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  http: any;


  constructor(private noteService: NoteServiceService) { }

  notes = []
  note=[]
  ngOnInit() {
    this.getAllNotes()
  }


  receiveMessage($event: any){
    console.log(" message get all notee from craete note",$event);
    this.getAllNotes();
    

  }
  getAllNotes() {

    this.noteService.getAllNotes().subscribe((response:any ) => {

      console.log(response);
      this.note = response['data'].data
      })
      console.log("all the notes",this.notes);

  }
  updateNote(data:any){
    return this.http.post('notes/updateNotes',data)
   }
 
     deleteNotes(data:any){
       return this.http.post('notes/trashNotes',data)
     }
 
}
