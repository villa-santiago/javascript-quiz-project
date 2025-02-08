class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.currentQuestionIndex = 0;
    this.correctAnswers = 0;
  }
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j],this.questions[i]];
    }
  }



shuffleQuestions() {
    for(let i = this.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
}
checkAnswer(answer) { 
    const currentQuestion = this.getQuestion(); 
        if (answer === currentQuestion.answer){
            this.correctAnswers++;
        }
    }
    

hasEnded() {
if (this.currentQuestionIndex < this.questions.length){
    return false;
} else if(this.currentQuestionIndex === this.questions.length) {
    return true;
}
}

filterQuestionsByDifficulty(difficulty) {
if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 3){
    return;
}
this.questions = this.questions.filter(questions => questions.difficulty === difficulty)
}

averageDifficulty() {
   const totalDifficulty = this.questions.reduce((accumulator, question)=>{
    return accumulator + question.difficulty;
   }, 0);

   const averageLevel = totalDifficulty / this.questions.length;
   return averageLevel;    
}



// You should use the reduce() method to sum the difficulty of all the questions and then divide the sum by the number of questions to get the average difficulty.


// averageDifficulty() method


// should return the average difficulty of the questions in the quiz

}