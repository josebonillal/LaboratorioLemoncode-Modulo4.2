import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotateDirective } from '../../directivas/rotate.directive';

@Component({
  selector: 'app-galeria',
  templateUrl: './gallery.component.html',
  imports: [CommonModule, RotateDirective],
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images = [
    { id: 1, src: 'assets/imagen1.jpg', title: 'Imagen 1' },
    { id: 2, src: 'assets/imagen2.jpg', title: 'Imagen 2' },
    { id: 3, src: 'assets/imagen3.jpg', title: 'Imagen 3' },
    { id: 4, src: 'assets/imagen4.jpg', title: 'Imagen 4' },
    { id: 5, src: 'assets/imagen5.jpg', title: 'Imagen 5' },
    { id: 6, src: 'assets/imagen6.jpg', title: 'Imagen 6' },
    { id: 7, src: 'assets/imagen7.jpg', title: 'Imagen 7' },
    { id: 8, src: 'assets/imagen8.jpg', title: 'Imagen 8' },
  ];

  selectedImage: any = this.images[0];
  currentIndex: number = 0;
  intervalId: any = null;
  zoomLevel: number = 1;

  // Paginación
  currentPage: number = 0;
  imagesPerPage: number = 3;
  totalPages: number = Math.ceil(this.images.length / this.imagesPerPage);  // Total de páginas

  ngOnInit(): void {}

  // Navegar a la siguiente página
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {  // Usamos totalPages dinámico
      this.currentPage++;
    }
  }

  // Navegar a la página anterior
  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  // Navegar a la siguiente imagen
  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.selectedImage = this.images[this.currentIndex];
    }
  }

  // Navegar a la imagen anterior
  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectedImage = this.images[this.currentIndex];
    }
  }

  // Control de zoom
  zoomIn() {
    this.zoomLevel += 0.1;
  }

  zoomOut() {
    this.zoomLevel -= 0.1;
  }

  startSlideshow() {
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }

      this.selectedImage = this.images[this.currentIndex];
    }, 2000);
  }

  stopSlideshow() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  selectImage(image: any) {
    this.selectedImage = image;
    this.currentIndex = this.images.indexOf(image);
  }
}
