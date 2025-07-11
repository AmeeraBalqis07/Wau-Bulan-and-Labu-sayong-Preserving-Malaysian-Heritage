 document.addEventListener('DOMContentLoaded', function () {
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', function () {
                    this.classList.toggle('active');
                    const answer = this.nextElementSibling;
                    if (this.classList.contains('active')) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    } else {
                        answer.style.maxHeight = '0';
                    }
                });
            });
        });

        function myFunction(x) {
    x.classList.toggle("change");
    document.body.classList.toggle("nav-open");
}