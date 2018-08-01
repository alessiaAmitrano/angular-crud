import { Game } from '../models/game';

export class AddGame {
    static readonly type = '[Game] Add';
    constructor(public payload: Game) {}
}

export class RemoveGame {
    static readonly type = '[Game] Remove';
    constructor(public payload: string) {}
}

export class GetAllGames {
    static readonly type = ' Get all Games';
    constructor(public payload: Game[]) {}
}
