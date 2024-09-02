    // opens popup
    function openPopup(popupId) {
        document.getElementById(popupId).style.display = "block";
    }

    // closes popup
    function closePopup(popupId) {
        document.getElementById(popupId).style.display = "none";
    }

document.addEventListener("DOMContentLoaded", () => {
    const selectAllButtons = document.querySelectorAll(".select-all-quiz-topics-button");
    const quizTopics = document.querySelectorAll(".quiz-topic");
    const startQuizButton = document.getElementById("start-quiz");
    const returnHomeButton = document.getElementById("return-home");


    

    selectAllButtons.forEach((button) => {
        button.addEventListener("click", () => selectAllQuizTopics(button));
    });


    quizTopics.forEach((quizTopic) => {
        quizTopic.addEventListener("click", () => toggleQuizSelection(quizTopic));
    });

    startQuizButton.addEventListener("click", startQuiz);


    function startQuiz() {
        const selectedQuizzes = document.querySelectorAll(".quiz-topic.selected");
        const selectedQuizIds = Array.from(selectedQuizzes).map((quiz) => quiz.id);

        if (selectedQuizIds.length < 1) {
            alert("Please select at least one topic to start.");
            return;
        }
    }


    // selects quizzes to take or remove
    function toggleQuizSelection(quizTopic) {
        if (quizTopic.classList.contains("selected")) {
            quizTopic.classList.remove("selected");
        } else {
            quizTopic.classList.add("selected");
        }

        checkTopicsSelected();
    }

    // if all quizzes are selected, the "Select All" button is selected
    // if one of the quizzes is deselected, the "Select All" button is deselected
    function checkTopicsSelected() {
        selectAllButtons.forEach((button) => {
            const group = button.closest("section[id]");
            const quizTopics = group.querySelectorAll(".quiz-topic");

            // total number of topics in a group
            let numberOfTopics = quizTopics.length;

            // number of selected topics
            let numberOfSelectedTopics = 0;
            quizTopics.forEach((quizTopic) => {
                if (quizTopic.classList.contains("selected")) {
                    numberOfSelectedTopics++;
                }
            });

            if (numberOfSelectedTopics === numberOfTopics) {
                button.classList.add("selected");
            } else {
                button.classList.remove("selected");
            }
        });
    }

    // selects all quizzes in a group
    function selectAllQuizTopics(button) {
        const group = button.closest("section[id]");
        const quizTopics = group.querySelectorAll(".quiz-topic");

        if (!button.classList.contains("selected")) {
            quizTopics.forEach((quizTopic) => {
                quizTopic.classList.add("selected");
            });
            button.classList.add("selected");
            return;
        }

        if (button.classList.contains("selected")) {
            quizTopics.forEach((quizTopic) => {
                quizTopic.classList.remove("selected");
            });
            button.classList.remove("selected");
            return;
        }
    }
});
