import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let teams = [
            {id: 11, name: 'Angers'},
            {id: 12, name: 'Bastia'},
            {id: 13, name: 'Bordeaux'},
            {id: 14, name: 'Caen'},
            {id: 15, name: 'Dijon'},
            {id: 16, name: 'Guingamp'},
            {id: 17, name: 'Lille'},
            {id: 18, name: 'Lorient'},
            {id: 19, name: 'Lyon'},
            {id: 20, name: 'Marseille'},
            {id: 21, name: 'Metz'},
            {id: 22, name: 'Monaco'},
            {id: 23, name: 'Montpellier'},
            {id: 24, name: 'Nancy'},
            {id: 25, name: 'Nantes'},
            {id: 26, name: 'Nice'},
            {id: 27, name: 'Paris'},
            {id: 28, name: 'Rennes'},
            {id: 29, name: 'Saint-Etienne'},
            {id: 30, name: 'Toulouse'}
        ];

        let leagues = [
            {id: 1, name: 'Ligue 1'},
            {id: 2, name: 'Ligue 2'},
            {id: 3, name: 'LIGA'}
        ];

        let seasons = [
            {id: 1, name: 'Année 2016-2017'},
            {id: 2, name: 'Année 2015-2016'},
            {id: 3, name: 'Année 2014-2015'}
        ];

        let days = [
            {id: 1, name: 'J1'},
            {id: 2, name: 'J2'},
            {id: 3, name: 'J3'},
            {id: 4, name: 'J4'},
            {id: 5, name: 'J5'},
            {id: 6, name: 'J6'}
        ];

        let matchs = [
            { id: 1, teamDomicile: 'PSG', teamExterieure: 'Monaco', resultat: '4-1', pourcentage: 75 }
        ];

        return { teams, leagues, seasons, days, matchs };
    }
}