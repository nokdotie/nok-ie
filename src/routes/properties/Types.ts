type Property = {
	id: string;
	label: string;
	address: string;
	image: Image;
	price: Price;
	size: Size;
	bedroomsCount: number;
	bathroomsCount: number;
};

type Price = {
	inEur: number;
};

type Image = {
	label: string;
	url: string;
};

type Size = {
	inSqtMtr: number;
	inSqtFt: number;
};
