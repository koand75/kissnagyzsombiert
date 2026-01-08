import { Component } from '@angular/core';

@Component({
  selector: 'app-donation',
  imports: [],
  templateUrl: './donation.html',
  styleUrl: './donation.scss',
})

export class Donation {
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
}
