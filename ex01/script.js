function calculateGrade(score) {
    let grade 
    if(typeof score !== "number" || score < 0 || score > 100){
        return "Invalid input";
    }
    if ( score >=90 ){
        grade = "A";
    }else if (score >= 80){
        grade ="B";
    }else if (score >= 70){
        grade ="C";
    }else if (score >= 60){
        grade = "D";
    }else {
        grade = "F"
    }
    return grade
}

function checkAccess(age, hasTicket) {
    if(age >= 18 && hasTicket === true){
        return true
    }else {
        return false
    }
}
console.log("Testing calculateGrade:");
console.log( calculateGrade(95));
console.log( calculateGrade(105));
console.log("\nTesting checkAccess:");
console.log( checkAccess(20, true));
console.log( checkAccess(16, true));
