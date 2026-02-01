function sqrtOfNumber(num) {
    let low = 1;
    let high = num;
    let mid;
    let res = 1;

    while(low <= high) {
        mid = (low + high) / 2;

        if (mid * mid <= n) {
            res = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return res;
}
