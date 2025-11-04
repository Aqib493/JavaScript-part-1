// javascript execution context

// 1 global execution context => {}

    // 2 function execution context

    // 3 Eval execution context

    /* {} =>1  memory creation phase
    isko memory phase bhi bolty hain
is mein variables aur jo values ap ny declare kiye hoty hain unky lye jagha allocate hoti hy  
iss phase mein kisi kism ki execution nahi hoti
like +, -, *, /, % etc 
*/
/* 2 Execution Phase */

let val1 = 10
let val2 = 5
function addnum(num1, num2) {
    let total = num1 + num2 
    return total 
}
let result1 = addnum(val1, val2)
let result2 = addnum(10, 2)
 
/*  yeh jo program hy iss mein sab sy pehly memory execution hoga jis mein all variables like 
 val1 , val2 , result1 , result2  ki value undefine ho gi aur jo function  addnum() ho ga uski defination aa jay gi
     phir qtq hy execution phase jis mein all variables ko values assign 
     hoti hain aur function aik new variable enviornment create karta hy
     jis mein execution thread bhi hota hy  yeh enviornment execution complete hony ky bad  delete ho jata hy
     aur value automatically global execution mein chali jati hyy 
     remeber execution phase mein function ka apna enviornment hota hy jis mein bhi memory phase aur
     execution phase hoty hain lekin execution ky bad delete ho jaty hain
 */




    //  **************Call Stack*********************//

    /*
    lifo means last in first agr aik sy zayda function nested hain toh call 
    stack mein sy sab sy pehly wahin out hoga jo sab sy akhir mein inn hoa means 
    one, two and three are functions two is nested in one and three is nested in two 
    these functions are in call staack first of all first function then second and then third
    when these functions goes out from the call stack first of all third function goes
    then second and in last first function goes
    */