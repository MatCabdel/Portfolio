import { Component } from '@angular/core';
import { Gallery } from '../models/gallery.model';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
 projectList: Project []= [
  {
  name: "mathieu", 
  picture: "https://picsum.photos/id/237/200/300",
  description: "description",
 },
 {
  name: "Rastarockett",
  picture: "assets/rastarockett.svg",
  description: "Un projet trop bien avec plein de bars",
 },
 {
  name: "GreenPoint",
  picture: "assets/GreenPoint.svg",
  description: "Projet 2",
 },
 {
  name: "BabyPlace",
  picture: "assets/BabyPlace.svg",
  description: "Projet 3",
 }
]
}
