import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  titulo: string = 'Soy un titulo'
  dinero: number = 2400 
  ganancias: number = 0.54
  fechaNacimiento: Date = new Date('11-29-1980')
  textoLargo: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam repudiandae earum atque! Vel voluptatem quos eveniet laborum cum repudiandae dolor, possimus dolorem inventore maxime molestias distinctio fugit ratione ab neque.'

  constructor() { /** esto para que no de error */}

  ngOnInit(): void {
    /**comentario para que no de errror de sisntaxis */
  }

}
