var carPooling = function (trips, capacity) {
    const res = [];

    for (let [pass, start, end] of trips) {
        res.push([start, pass]);
        res.push([end, (-1) * pass]);
    }

    res.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    let people = 0;

    for (let [time, pass] of res) {
        people += pass;

        if (people > capacity) {
            return false;
        }
    };

    return true;
};
carPooling([
    [10, 5, 7],
    [10, 3, 4],
    [7, 1, 8],
    [6, 3, 4]
], 24);