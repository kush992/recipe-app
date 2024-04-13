type FilterType = 'COLLECTION' | 'SINGLE_NUMERIC';

type CollectionFilterOption = {
	name: string;
	key: string;
	values: string[];
	counts: Record<string, number>;
	filterType: 'COLLECTION';
};

type SingleNumericFilterOption = {
	name: string;
	key: string;
	min: number;
	max: number;
	counts: Record<string, number>;
	filterType: 'SINGLE_NUMERIC';
};

type FilterOption = CollectionFilterOption | SingleNumericFilterOption;

export type SearchResultData = {
	id: number;
	name: string;
	image: string;
	link: string;
	type: string;
	relevance: number;
	content: string;
};

export type SearchResultTypeName = 'Simple Foods' | 'Recipes' | 'Products' | 'Videos' | 'Menu Items' | 'Articles';

type SearchResultType = 'products' | 'custom';

export type SearchResult = {
	name: SearchResultTypeName;
	type: SearchResultType;
	totalResults: number;
	totalResultsVariants: number;
	results: SearchResultData[];
};

export type SearchResultsResponse = {
	sorting: string;
	filterMapping: Record<string, string[]>;
	filterOptions: FilterOption[];
	activeFilterOptions: any[];
	query: string;
	totalResults: number;
	limit: number;
	offset: number;
	searchResults: SearchResult[];
};
