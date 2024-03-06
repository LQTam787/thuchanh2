// Thêm sự kiện cho form
document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi

    // Gọi hàm để hiển thị kết quả
    displayResult();
});

// Hàm để hiển thị kết quả bài làm
function displayResult() {
    const form = document.getElementById('surveyForm');
    const resultContainer = document.getElementById('resultContainer');

    // Xóa nội dung kết quả trước đó (nếu có)
    resultContainer.innerHTML = '';

    // Lặp qua từng câu hỏi và hiển thị kết quả
    for (let i = 0; i < trueFalseQuestions.length + singleChoiceQuestions.length + multipleChoiceQuestions.length + openEndedQuestions.length; i++) {
        const answerElement = document.createElement('p');
        answerElement.textContent = `Câu hỏi ${i + 1}: ${getAnswer(i)}`;
        resultContainer.appendChild(answerElement);
    }

    // Hiển thị kết quả container
    resultContainer.style.display = 'block';
}

// Hàm để lấy câu trả lời của người dùng
function getAnswer(index) {
    const inputElements = document.getElementsByName(`answer_${index}`);
    const selectedAnswers = [];

    inputElements.forEach((inputElement) => {
        if (inputElement.type === 'checkbox' || (inputElement.type === 'radio' && inputElement.checked)) {
            selectedAnswers.push(inputElement.value);
        }
    });

    return selectedAnswers.length > 0 ? selectedAnswers.join(', ') : 'Không có câu trả lời';
}


// Dữ liệu câu hỏi đúng/sai
const trueFalseQuestions = [
    { question: "JavaScript là một ngôn ngữ lập trình phía client.", answer: true },
    { question: "HTML là ngôn ngữ lập trình.", answer: false },
    { question: "CSS là viết tắt của 'Counter Style Sheet'.", answer: false },
    { question: "JSON đại diện cho 'JavaScript Object Notation'.", answer: true },
    { question: "React là một thư viện JavaScript được phát triển bởi Google.", answer: false },
    { question: "Angular là một framework JavaScript.", answer: true },
    { question: "Node.js sử dụng engine JavaScript là V8 của Google.", answer: true },
    { question: "Bootstrap là một thư viện JavaScript.", answer: false },
    { question: "Git là một hệ thống quản lý phiên bản phân tán.", answer: true },
    { question: "Ajax là viết tắt của 'Asynchronous JavaScript and XML'.", answer: true }
];

// Dữ liệu câu hỏi chọn 1 trong 4 đáp án
const singleChoiceQuestions = [
    { question: "Ngôn ngữ lập trình nào được sử dụng chủ yếu cho phía client?", options: ["JavaScript", "Python", "Java", "C#"], answer: "JavaScript" },
    { question: "React là một thư viện của công ty nào?", options: ["Google", "Facebook", "Microsoft", "Apple"], answer: "Facebook" },
    { question: "Angular là một framework của công ty nào?", options: ["Google", "Facebook", "Microsoft", "Apple"], answer: "Google" },
    { question: "Bootstrap là một framework của công ty nào?", options: ["Google", "Facebook", "Microsoft", "Apple"], answer: "Twitter" },
    { question: "Đâu là tên một thư viện JavaScript nổi tiếng?", options: ["Lodash", "Numpy", "Django", "Spring"], answer: "Lodash" },
    { question: "HTML là viết tắt của gì?", options: ["HyperText Markup Language", "High-Level Text Machine Language", "HyperText Machine Language", "High-Level Text Markup Language"], answer: "HyperText Markup Language" },
    { question: "CSS là viết tắt của gì?", options: ["Counter Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet"], answer: "Cascading Style Sheet" },
    { question: "Node.js sử dụng engine JavaScript nào?", options: ["V8", "SpiderMonkey", "Chakra", "Rhino"], answer: "V8" },
    { question: "Git là một hệ thống quản lý phiên bản phân tán (Distributed Version Control System) do ai phát triển?", options: ["Linus Torvalds", "Mark Zuckerberg", "Bill Gates", "Tim Berners-Lee"], answer: "Linus Torvalds" },
    { question: "Ajax là viết tắt của gì?", options: ["Asynchronous JavaScript and XML", "Automated JavaScript and XML", "Asynchronous JavaScript and XHTML", "Automated JavaScript and XHTML"], answer: "Asynchronous JavaScript and XML" }
];

// Dữ liệu câu hỏi chọn nhiều đáp án
const multipleChoiceQuestions = [
    { question: "Ngôn ngữ lập trình nào được sử dụng chủ yếu cho phía client?", options: ["JavaScript", "Python", "Java", "C#"], answers: ["JavaScript"] },
    { question: "React là một thư viện của công ty nào?", options: ["Google", "Facebook", "Microsoft", "Apple"], answers: ["Facebook"] },
    { question: "Angular là một framework của công ty nào?", options: ["Google", "Facebook", "Microsoft", "Apple"], answers: ["Google"] },
    { question: "Bootstrap là một framework của công ty nào?", options: ["Google", "Facebook", "Microsoft", "Apple"], answers: ["Twitter"] },
    { question: "Đâu là tên một thư viện JavaScript nổi tiếng?", options: ["Lodash", "Numpy", "Django", "Spring"], answers: ["Lodash"] },
    { question: "HTML là viết tắt của gì?", options: ["HyperText Markup Language", "High-Level Text Machine Language", "HyperText Machine Language", "High-Level Text Markup Language"], answers: ["HyperText Markup Language"] },
    { question: "CSS là viết tắt của gì?", options: ["Counter Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet"], answers: ["Cascading Style Sheet"] },
    { question: "Node.js sử dụng engine JavaScript nào?", options: ["V8", "SpiderMonkey", "Chakra", "Rhino"], answers: ["V8"] },
    { question: "Git là một hệ thống quản lý phiên bản phân tán (Distributed Version Control System) do ai phát triển?", options: ["Linus Torvalds", "Mark Zuckerberg", "Bill Gates", "Tim Berners-Lee"], answers: ["Linus Torvalds"] },
    { question: "Ajax là viết tắt của gì?", options: ["Asynchronous JavaScript and XML", "Automated JavaScript and XML", "Asynchronous JavaScript and XHTML", "Automated JavaScript and XHTML"], answers: ["Asynchronous JavaScript and XML"] }
];

// Dữ liệu câu hỏi tự luận
const openEndedQuestions = [
    { question: "Mô tả ngắn gọn về ưu điểm của ngôn ngữ lập trình JavaScript." },
    { question: "Nêu các bước cơ bản để tạo một ứng dụng React." },
    { question: "Tại sao Angular được coi là một framework mạnh mẽ cho phát triển web?" },
    { question: "Giải thích khái niệm 'Responsive Web Design'." },
    { question: "Mô tả sự khác biệt giữa Git và SVN trong quản lý phiên bản." },
    { question: "Tại sao Node.js trở thành một lựa chọn phổ biến trong việc phát triển ứng dụng web?" },
    { question: "Giải thích cách CSS Grid hoạt động và cung cấp một ví dụ." },
    { question: "Nêu rõ quy trình làm việc của AJAX và tại sao nó quan trọng trong phát triển web hiện đại." },
    { question: "Tính năng chính của HTML5 là gì?" },
    { question: "Tại sao việc sử dụng npm trong phát triển JavaScript là quan trọng?" }
];

// Hàm để hiển thị câu hỏi lên màn hình
function displayQuestions() {
    const form = document.getElementById('surveyForm');

    // Hiển thị câu hỏi đúng/sai
    trueFalseQuestions.forEach((q, index) => {
        const questionContainer = createQuestionContainer(index + 1, q.question);

        const trueFalseContainer = document.createElement('div');
        trueFalseContainer.className = 'options';

        const trueInput = createTrueFalseInput(index, true);
        const falseInput = createTrueFalseInput(index, false);

        trueFalseContainer.appendChild(trueInput);
        trueFalseContainer.appendChild(createTrueFalseLabel('Đúng'));
        trueFalseContainer.appendChild(falseInput);
        trueFalseContainer.appendChild(createTrueFalseLabel('Sai'));

        questionContainer.appendChild(trueFalseContainer);
        form.insertBefore(questionContainer, form.lastElementChild);
    });

    // Hiển thị câu hỏi chọn 1 trong 4 đáp án
    singleChoiceQuestions.forEach((q, index) => {
        const questionContainer = createQuestionContainer(index + 1 + trueFalseQuestions.length, q.question);

        const optionsContainer = createOptionsContainer(q.options, index);
        questionContainer.appendChild(optionsContainer);

        form.insertBefore(questionContainer, form.lastElementChild);
    });

    // Hiển thị câu hỏi chọn nhiều đáp án
    multipleChoiceQuestions.forEach((q, index) => {
        const questionContainer = createQuestionContainer(index + 1 + trueFalseQuestions.length + singleChoiceQuestions.length, q.question);

        const optionsContainer = createOptionsContainer(q.options, index);
        questionContainer.appendChild(optionsContainer);

        form.insertBefore(questionContainer, form.lastElementChild);
    });

    // Hiển thị câu hỏi tự luận
    openEndedQuestions.forEach((q, index) => {
        const questionContainer = createQuestionContainer(index + 1 + trueFalseQuestions.length + singleChoiceQuestions.length + multipleChoiceQuestions.length, q.question);

        const answerInput = document.createElement('textarea');
        answerInput.name = `answer_${index}`;
        answerInput.placeholder = "Nhập câu trả lời của bạn...";
        answerInput.rows = 4;
        answerInput.required = true;

        questionContainer.appendChild(answerInput);
        form.insertBefore(questionContainer, form.lastElementChild);
    });
}

// Hàm tạo container chứa câu hỏi
function createQuestionContainer(index, questionText) {
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-group';

    const questionTextElement = document.createElement('p');
    questionTextElement.textContent = `Câu hỏi ${index}: ${questionText}`;
    questionContainer.appendChild(questionTextElement);

    return questionContainer;
}

// Hàm tạo input cho câu hỏi đúng/sai
function createTrueFalseInput(index, value) {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `answer_${index}`;
    input.value = value;
    input.required = true;

    return input;
}

// Hàm tạo label cho câu hỏi đúng/sai
function createTrueFalseLabel(text) {
    const label = document.createElement('span');
    label.textContent = text;

    return label;
}

// Hàm tạo container cho các lựa chọn đáp án
function createOptionsContainer(options, index) {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options';

    options.forEach((option, optionIndex) => {
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = `answer_${index}_${optionIndex}`;
        radioInput.value = option;

        const optionLabel = document.createElement('label');
        optionLabel.textContent = option;

        optionsContainer.appendChild(radioInput);
        optionsContainer.appendChild(optionLabel);
    });

    return optionsContainer;
}

// Gọi hàm để hiển thị câu hỏi khi trang web được load
window.onload = displayQuestions;
