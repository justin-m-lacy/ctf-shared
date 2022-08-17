export const maxIndex = (a: number[]) => {

    if (a.length === 0) {
        return -1;
    }

    let max_val = a[0];
    let max_index = 0;
    for (let i = a.length - 1; i > 0; i--) {

        if (a[i] > max_val) {
            max_val = a[i];
            max_index = i;
        }

    }

    return max_index;

}