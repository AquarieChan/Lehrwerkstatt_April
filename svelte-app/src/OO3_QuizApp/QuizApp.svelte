<script>
    import QuizAppQuestion from "./QuizAppQuestions.svelte";
    import QuizAppAnswer from "./QuizAppAnswer.svelte";
    import QuizAppPoints from "./QuizAppPoints.svelte";
    const checkAnswer = (answerText) => {
            const correct = quiz[questionIndex].answers.indexOf(answerText) === quiz[questionIndex].correct;
            if (correct) {
                result = "Correct";
                points++
            }else {
                result = "Wrong"
            }

            setTimeout(() => {
               questionIndex++; 
               if (questionIndex >= quiz.length) {
                   questionIndex = 0;
               }
               result = null
            }, 2000);
    }
    let questionIndex = 0;
    let points = 0;
    let result = null;
    let quiz = [
        {
            question: "Welche Sparte gehört nicht zur Schwarz Gruppe?",
            correct: 0,
            answers: ["Netto", "Lidl"]
        },
        {
            question: "Welche Farbe hat die Banane?",
            correct: 1,
            answers: ["lila", "gelb"]
        },
        {
            question: "Was sind Low- und High-Nibbel?",
            correct: 0,
            answers: ["Bits 0-3 und 4-7", "Offnung bei einer Fetpresse"]
        }
    ];

</script>

<svelte:head>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        html {
            font-size:62,5%;
        }
    </style>
</svelte:head>
<div>
    <QuizAppPoints points={points} />
    <QuizAppQuestion questionText={quiz[questionIndex].question} />
    {#if result}
        <div>
            <h2>{result}</h2>
        </div>
    {/if}
    <div class="answer">
        {#each quiz[questionIndex].answers as answer, index }
            <QuizAppAnswer answerText={answer} checkAnswer={checkAnswer}/>
        {/each}
    </div>
    
</div>

<style>

</style>