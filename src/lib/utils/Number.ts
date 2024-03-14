export const Int = {
	fromString: (value: string) => {
		const parsed = parseInt(value);
		return isNaN(parsed) ? null : parsed;
	}
};
export const Float = {
	fromString: (value: string) => {
		const parsed = parseFloat(value);
		return isNaN(parsed) ? null : parsed;
	}
};
