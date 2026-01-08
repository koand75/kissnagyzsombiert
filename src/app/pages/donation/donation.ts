import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationModal } from '../../../shared/donation-modal/donation-modal';


@Component({
  selector: 'app-donation',
  imports: [CommonModule, DonationModal],
  templateUrl: './donation.html',
  styleUrl: './donation.scss',
})

export class Donation {
  showModal = false;

  donationData = {
    name: 'Kiss-Nagy Zsomborért Alapítvány',
    registrationNumber: '10-01-0001211',
    taxNumber: '19288026-1-10',
    accountNumber: '10403538-50526980-72761011',
    iban: 'HU20 10403538 50526980 72761011',
    swift: 'OKHBHUHB',
    bank: 'K&H Bank'
  };

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
