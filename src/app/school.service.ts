import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SchoolService {
  schoolsList = [
    {
      Name: 'Kidzee',
      Location: 'HSR Layout',
      ID: 'School-1',
      Rating: 4,
      CityName: 'Bangolore',
    },
    {
      Name: 'EuroKids',
      Location: 'SilkBoard',
      ID: 'School-2',
      Rating: 4,
      CityName: 'Bangolore',
    },
    {
      Name: 'DelhiPublicSchool',
      Location: 'Kormangla',
      ID: 'School-3',
      Rating: 4,
      CityName: 'Bangolore',
    },
  ];

  schoolDetails = [
    {
      SchoolID: 'School-1',
      PrinicipleName: 'NarayanaMoorthy',
      studentsCount: 200,
      EstablishDate: 1990,
      CityName: 'Bangolore',
      StateName: 'Karnataka',
      isGood: true,
    },
    {
      SchoolID: 'School-2',
      PrinicipleName: 'Ramachandrudu',
      studentsCount: 210,
      EstablishDate: 2000,
      CityName: 'Bangolore',
      StateName: 'Karnataka',
    },
    {
      SchoolID: 'School-3',
      PrinicipleName: 'Prathapudu',
      studentsCount: 180,
      EstablishDate: 1995,
      CityName: 'Bangolore',
      StateName: 'Karnataka',
    },
  ];
}
