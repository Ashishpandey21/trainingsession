import { Component } from '@angular/core';

@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.css']
})
export class CleaningComponent {

  playVideo() {
    const videoElement = document.createElement('video');
    videoElement.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    videoElement.style.position = 'fixed';
    videoElement.style.top = '0';
    videoElement.style.left = '0';
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    videoElement.style.zIndex = '9999';
    videoElement.controls = true;
    document.body.appendChild(videoElement);
    videoElement.play();

    videoElement.addEventListener('ended', () => {
      alert('Cleaning completed!');
      window.location.href = '/fixture-setup';
    });

  }
}
