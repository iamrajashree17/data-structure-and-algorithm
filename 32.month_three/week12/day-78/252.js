/* 252 meeting room
*/

function canAttendMeetings(meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    for(let i = 1; i < meetings.length; i++) {
        if(meetings[i][0] < meetings[i-1][1]) return false;
    }
    return true;
}

let meetings = [[0,30],[5,10],[15,20]]
console.log(canAttendMeetings(meetings))

meetings = [[1,3],[3,5],[6,8]]
console.log(canAttendMeetings(meetings))
