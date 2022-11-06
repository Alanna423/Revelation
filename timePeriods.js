// GLOBAL VARS
// main
let scene = 1
let squareSize = 100
let points = 0 //total trivia score
let back = 1
// Open/Closed var (time periods)
let ancient = 1
let middle = 1
let present = 1
// Time period ques (keep track of q)
let quesAncient = 1
let quesMiddle = 1
let quesPresent = 1

const currentQuestion = -1
const questionComplete = [0,0,0,0,0,0,0,0,0,0,0,0] //4 Q's for each time period
const correctAnswer = [0,1,0,0,0,0,0,0,0,0,0,0] //correct answer options
const questions = ["Hi, answer me this.","2","3","4","21","22","23","24","31","32","33","34"]
const answers = ["Option 1","Option 2","Option 1","Option 2","Option 1","Option 2","","","","","","","","","","","","","","","","","",""]
// Score var
const scoring = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let percent = 0


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
    // // Ancient
    if (ancient == 1){
      fill("ivory")
    } else {
      fill("gray")
    }
    rect(windowWidth/7, windowHeight/7 * 3, squareSize, squareSize)
    // Middle
    if (middle == 1){
      fill("ivory")
    } else {
      fill("gray")
    }
    rect(windowWidth/7 * 3, windowHeight/7 * 3, squareSize, squareSize)
    // Present
    if (present == 1){
      fill("ivory")
    } else {
      fill("gray")
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
    text("BACK", windowWidth/2, windowHeight/4 * 3 + 20) 
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
    text("BACK", windowWidth/2, windowHeight/4 * 3 + 20) 
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
    text("BACK", windowWidth/2, windowHeight/4 * 3 + 20) 
  }
  if (scene == 5) {
    question()
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
    
    scene = 5
  } else {
    if (mouseX > windowWidth/3 - 50 && mouseX < windowWidth/3+150 && mouseY > windowHeight/5*3 && mouseY < windowHeight/5*3 + 100){
      scene = 2
    }
    if (mouseX > windowWidth/3 * 2 - 50 && mouseX < windowWidth/3 * 2 + 150 && mouseY > windowHeight/ 5* 3 && mouseY < windowHeight/5 * 3 + 100){
      scene = 2
    }
  }
  
} // ending

//has scene 
function question() {
  fill("ivory")
  rect(windowWidth/3 - 100, windowHeight/5 * 3, 200, 100)
  rect(windowWidth/3 * 2 - 100, windowHeight/5*3,200,100)
  textSize(20)
  fill("black")
  text(questions[currentQuestion-1], windowWidth/2, windowHeight/4)
  text(answers[(currentQuestion*2-2)], windowWidth/3, windowHeight/5 * 3 + 50)
  text(answers[currentQuestion*2-1], windowWidth/3 * 2, windowHeight/5 * 3 + 50)

  // Back button
  fill("ivory")
  rect(windowWidth/2 - 40, windowHeight/4 * 3, 80, 40)
  fill("black")
  text("BACK", windowWidth/2, windowHeight/4 * 3 + 20)
  
}


// function score() {
//   for(let i = 0; i < 13; i = i + 1) {
//     points = score[i] + points
//   }
//   percent()
// }


// function percent() {
//   percent = points/12 * 100 
// }

// function ending() {
//   // random
// }

/*
make buttons to go to specific questions
switch to function for each specific question and make separate click function
*/
