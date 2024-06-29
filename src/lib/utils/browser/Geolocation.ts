import { writable, type Readable } from 'svelte/store';

export enum GetCurrentPositionState {
	Pending,
	Loading,
	Success,
	Failure
}

export type GetCurrentPositionResult =
	| { state: GetCurrentPositionState.Pending }
	| { state: GetCurrentPositionState.Loading }
	| { state: GetCurrentPositionState.Success; latitude: number; longitude: number }
	| { state: GetCurrentPositionState.Failure };

export const Geolocation = {
	getCurrentPosition: (): Readable<GetCurrentPositionResult> => {
		const store = writable<GetCurrentPositionResult>({ state: GetCurrentPositionState.Loading });

		if (!navigator.geolocation) {
			store.set({ state: GetCurrentPositionState.Failure });
			return store;
		}

		new Promise<GeolocationPosition>((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject, {
				enableHighAccuracy: true,
				maximumAge: 0
			});
		})
			.then((geolocationPosition) => {
				store.set({
					state: GetCurrentPositionState.Success,
					latitude: geolocationPosition.coords.latitude,
					longitude: geolocationPosition.coords.longitude
				});
			})
			.catch(() => {
				store.set({ state: GetCurrentPositionState.Failure });
			});

		return store;
	}
};
