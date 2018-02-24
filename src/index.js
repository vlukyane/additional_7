module.exports = function solveSudoku(arr) {
    function rec(arr) {
        var l = [0, 0], row = 0, col = 0;
        if (!find_zeros(arr,l)){
            return true;
        }
        row = l[0];
        col = l[1];

        for (var digit = 1; digit < 10; digit++){
            if (try_to_check_place(arr, row, col, digit)){
                arr[row][col] = digit;
                if (rec(arr)){ return true; }

                arr[row][col] = 0;
            }
        }
        return false;
    }

    function try_to_check_place(arr, row, col, digit){
        return !row_used(arr, row, digit) && !col_used(arr, col, digit)
                && !square_used(arr, row - row % 3, col - col % 3, digit)
    }

    function row_used(arr, row, digit){
        for (var i = 0; i < 9; i++){
            if (arr[row][i] === digit){
                return true;
            }
        }
        return false;
    }

    function col_used(arr, col, digit) {
        for (var i = 0; i < 9; i++){
            if (arr[i][col] === digit){
                return true;
            }
        }
        return false;
    }

    function square_used(arr, row, col, digit) {
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
                if (arr[i + row][j + col] === digit){
                    return true;
                }
            }
        }
        return false;
    }

    function find_zeros(arr, l) {
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 9; j++){
                if (arr[i][j] === 0){
                    l[0] = i;
                    l[1] = j;
                    return true;
                }
            }
        }
        return false;
    }

    rec(arr);
    return arr;
};
