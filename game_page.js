player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name  + " : ";
document.getElementById("player2_name").innerHTML = player2_name  + " : ";


document.getElementById("player1_score").innerHTML = player1_score  ;
document.getElementById("player2_score").innerHTML = player2_score  ;

document.getElementById("player_question").innerHTML = "question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer turn - " +  player2_name  ;


function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word)


    charAt1 = word.charAt1(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt1(length_divide_2)
    console..log(charAt2)

length_minus_1 = mord.length - 1;
charAt3 = word.charAt(length_minus_1);
console.log(charAt3);

romove_charAt1 = word.replace( charAt1, "_");
romove_charAt2 = remove_charAt1.replace(charAt2,"_");
romove_charAt3 = remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3)

}
