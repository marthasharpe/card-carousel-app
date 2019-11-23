export const SORT_HEADING = 'SORT_HEADING';
export const SORT_SUBHEADING = 'SORT_SUBHEADING';
export const SORT_LOW_PRICE = 'SORT_LOW_PRICE';
export const SORT_HIGH_PRICE = 'SORT_HIGH_PRICE';

export const sortHeading = (data) => {
    return {
        type: SORT_HEADING,
        data: data
    }
}

export const sortSubheading = (data) => {
    return {
        type: SORT_SUBHEADING,
        data: data
    }
}

export const sortLowPrice = (data) => {
    return {
        type: SORT_LOW_PRICE,
        data: data
    }
}

export const sortHighPrice = (data) => {
    return {
        type: SORT_HIGH_PRICE,
        data: data
    }
}