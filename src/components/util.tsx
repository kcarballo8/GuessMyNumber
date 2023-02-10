import { ChangeEvent, Component } from "react";

export type GamePhase = 'NewGame'|'PlayTime'|'Over';

export type GuessType = {cntr: number, guessIn: string};

export function bind(component: Component<any, any>, prop: string){
	return{
		value: component.state[prop],
		onChange(evt: ChangeEvent<HTMLInputElement>) {
			component.setState({ [prop]: evt.target.value })
		}
	}
}