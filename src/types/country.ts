export type Country = {
    name: {
        common: string;
    };
    capital?: string[];
    currencies?: {
        [key: string]: {
            name: string;
        };
    };
};