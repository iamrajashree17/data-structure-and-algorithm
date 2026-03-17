/* 1288. Remove Covered Intervals
Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), 
remove all intervals that are covered by another interval in the list.
The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.
Return the number of remaining intervals.

Example 1:
Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

Example 2:
Input: intervals = [[1,4],[2,3]]
Output: 1
*/

function removeCoveredIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    let result = [];

    for (let interval of intervals) {
        if (!result.length) {
            result.push(interval);
            continue;
        }

        if (interval[0] >= result[result.length - 1][0] && interval[1] <= result[result.length - 1][1]){
            continue;
        }

        result.push(interval);
    }
    return result.length;
}

let intervals = [[1,4],[3,6],[2,8]]
console.log(removeCoveredIntervals(intervals));

intervals = [[1,4],[2,3]];
console.log(removeCoveredIntervals(intervals));
