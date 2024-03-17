type Measure = {
    amount: number;
    unitLong: string;
    unitShort: string;
}

type ExtendedIngredient = {
    aisle: string;
    amount: number;
    consitency: string;
    id: number;
    image: string;
    measures: {
        metric: Measure;
        us: Measure;
    };
    meta: string[];
    name: string;
    original: string;
    originalName: string;
    unit: string;
}

type WineProductMatch = {
    id: number;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    averageRating: number;
    ratingCount: number;
    score: number;
    link: string;
}

type WinePairing = {
    pairedWines: string[];
    pairingText: string;
    productMatches: WineProductMatch[];
}

export type RecipeDetailedInfo = {
    id: number;
    title: string;
    image: string;
    imageType: string;
    servings: number;
    readyInMinutes: number;
    license: string;
    sourceName: string;
    sourceUrl: string;
    spoonacularSourceUrl: string;
    healthScore: number;
    spoonacularScore: number;
    pricePerServing: number;
    analyzedInstructions: unknown[]; 
    cheap: boolean;
    creditsText: string;
    cuisines: string[];
    dairyFree: boolean;
    diets: unknown[]; 
    gaps: string;
    glutenFree: boolean;
    instructions: string;
    ketogenic: boolean;
    lowFodmap: boolean;
    occasions: unknown[];
    sustainable: boolean;
    vegan: boolean;
    vegetarian: boolean;
    veryHealthy: boolean;
    veryPopular: boolean;
    whole30: boolean;
    weightWatcherSmartPoints: number;
    dishTypes: string[];
    extendedIngredients: ExtendedIngredient[];
    summary: string;
    winePairing: WinePairing;
}
