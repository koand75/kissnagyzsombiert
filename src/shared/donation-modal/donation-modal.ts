import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donation-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donation-modal.html',
  styleUrl: './donation-modal.scss'
})
export class DonationModal {
  @Output() closeModal = new EventEmitter<void>();

  selectedAmount: number | null = null;
  customAmount: number | null = null;

  // TODO: Ezt majd a valódi Barion linkre cseréld
  barionBaseUrl = 'https://barion.com/pay/XXXXXX';

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    if (amount !== 0) {
      this.customAmount = null;
    }
  }

  get barionLink(): string {
    const amount = this.selectedAmount === 0 ? this.customAmount : this.selectedAmount;
    // TODO: A Barion link paraméterei a regisztráció után derülnek ki
    return `${this.barionBaseUrl}?amount=${amount}`;
  }

  close() {
    this.closeModal.emit();
  }
}