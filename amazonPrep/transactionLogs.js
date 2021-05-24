/*
https://leetcode.com/discuss/interview-question/989768/Amazon-or-OA-2020-or-Transaction-logs

A Company parses logs of online store user transactions/activity to flag fraudulent activity.
The log file is represented as an Array of arrays. The arrays consist of the following data:

[ <# of transactions>]

For example: [345366 89921 45]

Note: the data is space delimited
So, the log data would look like:
[
[345366 89921 45],
[029323 38239 23]
...
]

Write a function to parse the log data to find distinct users that meet or cross a certain threshold.

The function will take in 2 inputs:
logData: Log data in form an array of arrays
threshold: threshold as an integer

Output:
It should be an array of userids that are sorted.

If same userid appears in the transaction as userid1 and userid2, it should count as one occurrence, not two.

Example:
Input:
logData:

[
[345366 89921 45],
[029323 38239 23],
[38239 345366 15],
[029323 38239 77],
[345366 38239 23],
[029323 345366 13],
[38239 38239 23]
...
]
threshold: 3

Output: sorted by userID [029323, 345366 , 38239]
given order for output (questionable output may have been a typo, try to sort based on occurence or id num) [345366 , 38239, 029323]
Explanation:
Given the following counts of userids, there are only 3 userids that meet or exceed the threshold of 3.

345366 -4 , 38239 -5, 029323-3, 89921-1

*/

var checkLogData = function( logData, t ) {
  // your code here
}

const logData = [['345366 89921 45'],['029323 38239 23'],['38239 345366 15'],['029323 38239 77'],['345366 38239 23'],['029323 345366 13'],['38239 38239 23']];
const threshold = 3;

const expectedResult = ['38239', '345366', '029323'];
const actualResult = checkLogData(logData, threshold);
console.log('expected:', expectedResult, ', actual:', actualResult);