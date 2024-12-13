export type Bean = {
    backgroundColor : string,
    beanId  : number, //число
    colorGroup  : string, //строка
    description  : string, 
    flavorName  : string,
    glutenFree  : boolean, //булевое значение
    groupName  : string[], //массив строк
    imageUrl  : string,
    ingredients  : string[], 
    kosher  : boolean,
    seasonal  : boolean,
    sugarFree  : boolean
}

export type FactData = {
    description: string;
    factId: number;
    title: string;
};

export type Page = {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
};

export type RecipeData = {
    additions1: string[];
    additions2: string[];
    additions3: string[];
    cookTime: string;
    description: string;
    directions: string[];
    imageUrl: string;
    ingredients: string[];
    makingAmount: string;
    name: string;
    prepTime: string;
    recipeId: number;
    tips: string[];
    totalTime: string;
};

export type CombinationData = {
    combinationId: number;
    name: string;
    tag: string[];
};

export type HistoryData = {
    description: string;
    mileStoneId: number;
    year: number;
};