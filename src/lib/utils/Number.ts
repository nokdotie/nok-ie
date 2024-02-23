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

export const priceInEur = (value: number) =>
	value.toLocaleString('en-IE', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 0
	});

export const priceInEurAbbrieviated = (value: number) =>
	value.toLocaleString('en-IE', {
		style: 'currency',
		currency: 'EUR',
		notation: 'compact',
		minimumFractionDigits: 0,
		maximumFractionDigits: 1
	});
