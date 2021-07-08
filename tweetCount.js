// A social media company is trying to monitor activity on their site by analyzing the number of tweets that occur in select periods of time. These periods can be partitioned into smaller time chunks based on a certain frequency (every minute, hour, or day).

// For example, the period [10, 10000] (in seconds) would be partitioned into the following time chunks with these frequencies:

// Every minute (60-second chunks): [10,69], [70,129], [130,189], ..., [9970,10000]
// Every hour (3600-second chunks): [10,3609], [3610,7209], [7210,10000]
// Every day (86400-second chunks): [10,10000]
// Notice that the last chunk may be shorter than the specified frequency's chunk size and will always end with the end time of the period (10000 in the above example).

// Design and implement an API to help the company with their analysis.

// Implement the TweetCounts class:

// TweetCounts() Initializes the TweetCounts object.

// void recordTweet(string tweetName, int time) Stores the tweetName at the recorded time (in seconds).

// Array<Integer> getTweetCountsPerFrequency(string freq, string tweetName, int startTime, int endTime) Returns a list of integers representing the number of tweets with tweetName in each time chunk for the given period of time [startTime, endTime] (in seconds) and frequency freq.

// freq is one of "minute", "hour", or "day" representing a frequency of every minute, hour, or day respectively.

// Example

// Explanation
// TweetCounts tweetCounts = new TweetCounts();
// tweetCounts.recordTweet("tweet3", 0);                              // New tweet "tweet3" at time 0
// tweetCounts.recordTweet("tweet3", 60);                             // New tweet "tweet3" at time 60
// tweetCounts.recordTweet("tweet3", 10);                             // New tweet "tweet3" at time 10
// tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 59); // return [2]; chunk [0,59] had 2 tweets
// tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 60); // return [2,1]; chunk [0,59] had 2 tweets, chunk [60,60] had 1 tweet
// tweetCounts.recordTweet("tweet3", 120);                            // New tweet "tweet3" at time 120
// tweetCounts.getTweetCountsPerFrequency("hour", "tweet3", 0, 210);  // return [4]; chunk [0,210] had 4 tweets

const TweetCounts = function () {
    this.records = []
};

/** 
 * @param {string} tweetName 
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function (tweetName, time) {
    this.records = this.records || [];

    this.records.push({ tweetName, time })
};

/** 
 * @param {string} freq 
 * @param {string} tweetName 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function (freq, tweetName, startTime, endTime) {

    let TweetsWithinTime = []
    this.records.filter(record => {
        if (record.time >= startTime && record.time <= endTime) {
            TweetsWithinTime.push(record)
        }
    })

    if (freq == 'minute') {
        let min = Math.round(endTime / 60)
        return CalculateFreq(min, 60, TweetsWithinTime)

    } else if (freq == 'hour') {
        let hour = Math.round(endTime / (60 * 60))
        return CalculateFreq(hour, 3600, TweetsWithinTime)

    } else if (freq == 'day') {
        let day = Math.round(endTime / (3600 * 24))
        return CalculateFreq(day, 3600 * 24, TweetsWithinTime)

    }
};

function CalculateFreq(freq, freqCalc, totalTweets) {
    let TweetCount = []
    for (let index = 0; index < freq; index++) {
        let count = 0;
        TweetCount.push(count)
        for (let x = 0; x < totalTweets.length; x++) {
            if (totalTweets[x].time >= (index * freqCalc) && totalTweets[x].time <= (index + 1) * freqCalc) {
                TweetCount[index] = ++count
            }
        }
    }
    return TweetCount;
}

/** 
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */
let tweet = new TweetCounts();
tweet.recordTweet("tweet2", 0)
tweet.recordTweet("tweet2", 5)
tweet.recordTweet("tweet2", 12)
tweet.recordTweet("tweet2", 3599)
let freq = tweet.getTweetCountsPerFrequency("hour", 'tweet2', 0, 86400)

console.log(freq);