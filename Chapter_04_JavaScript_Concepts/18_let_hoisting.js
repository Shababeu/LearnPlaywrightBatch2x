console.log(score);
let score = 1000;
{
    // ----------- TDZ for inner "score" starts here -----------
    // console.log(score); // ReferenceError
    // score = 500;        // ReferenceError
    // typeof score;       // ReferenceError
    // ----------- TDZ ends after declaration ------------------
    let score = 100;
    console.log(score); // 100
}