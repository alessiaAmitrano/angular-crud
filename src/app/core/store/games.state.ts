import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Game } from './../models/game';
import { AddGame, RemoveGame, GetAllGames } from './games.actions';

export class GameStateModel {
    games: Game[];
}

@State<GameStateModel>({
    name: 'Games',
    defaults: {
        games: []
    }
})

export class GameState {
    @Selector()
    static getGames(state: GameStateModel) {
        return state.games;
    }

    @Action(AddGame)
    add({ getState, patchState }: StateContext<GameStateModel>, { payload }: AddGame) {
        const state = getState();
        patchState({
            games: [...state.games, payload]
        });
    }

    @Action(RemoveGame)
    remove({ getState, patchState }: StateContext<GameStateModel>, { payload }: RemoveGame) {
        patchState({
            games: getState().games.filter(a => a.name !== payload)
        });
    }

    @Action(GetAllGames)
    getAllGames({ getState, patchState }: StateContext<GameStateModel>, { payload }: GetAllGames) {
        patchState({
            games: [...payload]
        });
    }
}
