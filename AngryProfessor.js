// Angry Professor

// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, 
// the professor decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled


// Note: Non-positive arrival times (a[i] < 0) indicate the student arrived early or on time; positive arrival times (a[i] > 0) indicate the student arrived  a[i] minutes late.

// Function Description

// Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

// angryProfessor has the following parameter(s):

// int k: the threshold number of students
// int a[n]: the arrival times of the  students
// Returns

// string: either YES or NO


function angryProfessor(k, a) {
    let onTime = []
        a.forEach(time => {
            if(time <= 0){
                onTime.push(time)
            }
        })
        if(onTime.length >= k){
            return "NO"
        }else{
            return "YES"
        }
    }
    