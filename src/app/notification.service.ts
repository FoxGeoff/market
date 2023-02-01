import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showNotification(msg: string, buttonText: string) {
    this.snackBar.open(
      msg,
      buttonText,
      {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
  }
}
