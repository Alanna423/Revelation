// GLOBAL VARS
// main
let scene = 1
let squareSize = 100
let back = 1

let currentQuestion = -1
const questionComplete = [0,0,0,0,0,0,0,0,0,0,0,0] //4 Q's for each time period
const correctAnswer = [1,1,0,1,0,1,0,1,0,1,1,1] //correct answer options
const questions = ["Hi, answer me this."What dynasty ruled China for nearly 400 years?,"The rise and fall of the ___ Empire is one of the most consequential events of ancient history.","In 1922, excited explorers found the tomb of which famous ancient ruler?","Who is created with making the first map of the world","Period of European history between ancient and modern times is called Middel Ages","The average lifespan during the middle ageswas what?","Foreigners were called traitors.","Who gave up all his wealth to serve God?","What happened on 28th June 1914?","32","33","34"]
const answers = ["Han","Tang","Mughal","Roman","Ramesses 2","Tutankhamen","Anaximander","Christopher Columbus","True","False","28","35","True","False","St. Francis","Don Quiote","Assassination of Archduke Franz Ferdinand","Bombing of the Austrian Embassy in Serbia","","","","","",""]
// Score var
let scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let percent = 0
let points = 0  //total trivia score



function setup() {
  createCanvas(windowWidth, windowHeight)
  textAlign(CENTER, CENTER)
}


function draw() {
  background(240, 236, 209)
  textSize(14)
  
  // MAIN SCENE SETUP
  if (scene == 1) { 
    noStroke()
  // SQUARES FOR QUES
    // Ancient
    if (questionComplete[0]!=0 && questionComplete[1]!=0 && questionComplete[2]!=0 && questionComplete[3]!=0){
      fill("gray")
    } else {
      fill("ivory")
    }
    rect(windowWidth/7, windowHeight/7 * 3, squareSize, squareSize)
    // Middle
    if (questionComplete[4]!=0 && questionComplete[5]!=0 && questionComplete[6]!=0 && questionComplete[7]!=0){
      fill("gray")
    } else {
      fill("ivory")
    }
    rect(windowWidth/7 * 3, windowHeight/7 * 3, squareSize, squareSize)
    // Present
    if (questionComplete[8]!=0 && questionComplete[9]!=0 && questionComplete[10]!=0 && questionComplete[11]!=0){
      fill("gray")
    } else {
      fill("ivory")
    }
    rect(windowWidth/7 * 5, windowHeight/7 * 3, squareSize, squareSize)
  

    // TEXT LABELS
    fill("black") // text color
    textSize(14)  // text size
    text("Ancient Times", windowWidth/7 + squareSize/2, windowHeight/7 * 3 + squareSize/2)
    text("Middle Ages", windowWidth/7 * 3 + squareSize/2, windowHeight/7 * 3 + squareSize/2)
    text("20st Century", windowWidth/7 * 5 + squareSize/2, windowHeight/7 * 3 + squareSize/2)
  }

  // TIME PERIODS SELECTION
  // Questions for Ancient
  if (scene == 2) {
    fill("ivory")
    noStroke()
    rect(windowWidth/9, windowHeight/7 * 3, squareSize, squareSize)
    rect(windowWidth/9 * 3, windowHeight/7 * 3, squareSize, squareSize)
    rect(windowWidth/9 * 5, windowHeight/7 * 3, squareSize, squareSize)
    rect(windowWidth/9 * 7, windowHeight/7 * 3, squareSize, squareSize)
    // Question text
    fill("black")
    textSize(20)
    text("Ancient Times", windowWidth/2, windowHeight/4)
    textSize(14)
    text("Question 1", squareSize/2 + windowWidth/9, squareSize/2 + windowHeight/7 * 3)
    text("Question 2", squareSize/2 + windowWidth/9 * 3, squareSize/2 + windowHeight/7 * 3)
    text("Question 3", squareSize/2 + windowWidth/9 * 5, squareSize/2 + windowHeight/7 * 3)
    text("Question 4", squareSize/2 + windowWidth/9 * 7, squareSize/2 + windowHeight/7 * 3)
    // BACK BUTTON
    fill("ivory")
    rect(windowWidth/2 - 40, windowHeight/4 * 3, 80, 40)
    fill("black")
    text("B for BACK", windowWidth/2, windowHeight/4 * 3 + 20) 
  }
  // Questions for Middle
  if (scene == 3){
    fill("ivory")
    noStroke()
    rect(windowWidth/9, windowHeight/7 * 3, squareSize, squareSize)
    rect(windowWidth/9 * 3, windowHeight/7 * 3, squareSize, squareSize)
    rect(windowWidth/9 * 5, windowHeight/7 * 3, squareSize, squareSize)
    rect(windowWidth/9 * 7, windowHeight/7 * 3, squareSize, squareSize)
    // Question text
    fill("black")
    textSize(20)
    text("Middle Ages", windowWidth/2, windowHeight/4)
    textSize(14)
    text("Question 1", squareSize/2 + windowWidth/9, squareSize/2 + windowHeight/7 * 3)
    text("Question 2", squareSize/2 + windowWidth/9 * 3, squareSize/2 + windowHeight/7 * 3)
    text("Question 3", squareSize/2 + windowWidth/9 * 5, squareSize/2 + windowHeight/7 * 3)
    text("Question 4", squareSize/2 + windowWidth/9 * 7, squareSize/2 + windowHeight/7 * 3)
    // BACK BUTTON
    fill("ivory")
    rect(windowWidth/2 - 40, windowHeight/4 * 3, 80, 40)
    fill("black")
    text("B for BACK", windowWidth/2, windowHeight/4 * 3 + 20) 
  }
  // Questions for Present
  if (scene == 4){
    fill("ivory")
    noStroke()
    rect(windowWidth/9, windowHeight/7 * 3, squareSize, squareSize)
    rect(windowWidth/9 * 3, windowHeight/7 * 3, squareSize, squareSize)
    rect(windowWidth/9 * 5, windowHeight/7 * 3, squareSize, squareSize)
    rect(windowWidth/9 * 7, windowHeight/7 * 3, squareSize, squareSize)
    // Question text
    fill("black")
    textSize(20)
    text("20st Century", windowWidth/2, windowHeight/4)
    textSize(14)
    text("Question 1", squareSize/2 + windowWidth/9, squareSize/2 + windowHeight/7 * 3)
    text("Question 2", squareSize/2 + windowWidth/9 * 3, squareSize/2 + windowHeight/7 * 3)
    text("Question 3", squareSize/2 + windowWidth/9 * 5, squareSize/2 + windowHeight/7 * 3)
    text("Question 4", squareSize/2 + windowWidth/9 * 7, squareSize/2 + windowHeight/7 * 3)
    // BACK BUTTON
    fill("ivory")
    rect(windowWidth/2 - 40, windowHeight/4 * 3, 80, 40)
    fill("black")
    text("B for BACK", windowWidth/2, windowHeight/4 * 3 + 20) 
  }
  if (scene == 5) {
    question()
  }  
  
  // Ending page
  if (scene == 6) {
    if (points >= 9) {
      textSize(30)
      background("green")
      text("Congrats! You have reached normalacy!", windowWidth/2, windowHeight/2)
    } else if (points >= 6) {
      textSize(30)
      text("You are getting close to reaching normalacy", windowWidth/2, windowHeight/2)
    } else if (points < 6) {
      textSize(30)
      background("red")
      text("YOU HAVE FAILED TO REACH NORMALACY...", windowWidth/2, windowHeight/2)
    }
    
  }
  
  //B goes back to main page
  if (keyIsPressed && key == 'b') {
    scene = 1
  }
} // Ending 


function mouseClicked() {

  //TIME PERIODS
  if (scene==1) {
  // Ancient
    if (mouseX > windowWidth/7 && mouseX < windowWidth/ 7+ squareSize && mouseY > windowHeight/7 * 3 && mouseY < windowHeight/7 * 3 + squareSize){
      scene = 2
      ancient += 1
    }
    // Middle
    if (mouseX > windowWidth/7 * 3 && mouseX < windowWidth/7*3+squareSize && mouseY > windowHeight/7 * 3 && mouseY < windowHeight/7 * 3 + squareSize){
      scene = 3
      middle += 1
    }
    // Present
    if (mouseX > windowWidth/7 * 5 && mouseX < windowWidth/7*5+squareSize && mouseY > windowHeight/7 * 3 && mouseY < windowHeight/7 * 3 + squareSize){
      scene = 4
      present += 1
    }
    // Back button
    if (mouseX > windowWidth/2 - 40 && mouseX < windowWidth/2 + 40 && mouseY > windowHeight/4 * 3 && mouseY < windowHeight/4 * 3 + 40){
      scene = 1
    }
    
  //SELECT QUESTION
  } else if (scene>1 && scene<5) {
    if (mouseX > windowWidth/9 - squareSize/2 && mouseX < windowWidth/9 + squareSize/2 && mouseY > windowHeight/7 * 3 - squareSize/2 && mouseY < windowHeight/7 * 3 + squareSize/2) {
      currentQuestion = 1*(scene-1)
    } else if (mouseX > windowWidth/9 * 3 - squareSize/2 && mouseX < windowWidth/9 * 3 + squareSize/2 && mouseY > windowHeight/7 * 3 - squareSize/2 && mouseY < windowHeight/7 * 3 + squareSize/2) {
      currentQuestion = 2*(scene-1)
    } else if (mouseX > windowWidth/9 * 5 - squareSize/2 && mouseX < windowWidth/9 * 5 + squareSize/2 && mouseY > windowHeight/7 * 3 - squareSize/2 && mouseY < windowHeight/7 * 3 + squareSize/2) {
      currentQuestion = 3*(scene-1)
    } else if (mouseX > windowWidth/9 * 7 - squareSize/2 && mouseX < windowWidth/9 * 7 + squareSize/2 && mouseY > windowHeight/7 * 3 - squareSize/2 && mouseY < windowHeight/7 * 3 + squareSize/2){
      currentQuestion = 4*(scene-1)
    }
    currentQuestion += 1;
    scene = 5

  //ANSWER QUESTION
  } else {
    //PICKED FIRST OPTION
    if (mouseX > windowWidth/3 - 50 && mouseX < windowWidth/3+150 && mouseY > windowHeight/5*3 && mouseY < windowHeight/5*3 + 100){
      if (correctAnswer[currentQuestion]==0) {
        questionComplete[currentQuestion] = 1; //mark as complete
      } else {
        questionComplete[currentQuestion] = -1; //mark as complete
      }
    }
  
    //PICKED SECOND OPTION
    if (mouseX > windowWidth/3 * 2 - 50 && mouseX < windowWidth/3 * 2 + 150 && mouseY > windowHeight/ 5* 3 && mouseY < windowHeight/5 * 3 + 100){
      if (correctAnswer[currentQuestion]==1) {
        questionComplete[currentQuestion] = 1; //mark as complete
      } else {
        questionComplete[currentQuestion] = -1; //mark as complete
      }
    }
  }
  
} // ending

//has scene 
function question() {
  if (questionComplete[currentQuestion]==0) {
    fill("ivory")
  } else if (questionComplete[currentQuestion]==1){
    fill("green")
  } else {
    fill("red")
  }
    noStroke()
    rect(windowWidth/3 - 100, windowHeight/5 * 3, 200, 100)
    rect(windowWidth/3 * 2 - 100, windowHeight/5*3,200,100)
    fill("black")
    text(questions[currentQuestion]+" ", windowWidth/2, windowHeight/4)
    text(answers[currentQuestion*2]+" ", windowWidth/3, windowHeight/5 * 3 + 50)
    text(answers[currentQuestion*2+1]+" ", windowWidth/3 * 2, windowHeight/5 * 3 + 50)
 
  // Back button
  fill("ivory")
  rect(windowWidth/2 - 40, windowHeight/4 * 3, 80, 40)
  fill("black")
  text("B for BACK", windowWidth/2, windowHeight/4 * 3 + 20)
  
}


function score() {
  for(let i = 0; i < 12; i = i + 1) {
    points = scoring[i] + points
  }
  //percent()
}

// function percent() {
//   percent = points/12 * 100 
// }

/*
make buttons to go to specific questions
switch to function for each specific question and make separate click function
*/
