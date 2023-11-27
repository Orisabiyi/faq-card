'use strict';

const toggleList = function () {
  const faqsCollection = document.querySelector('.faqs__collection');

  faqsCollection.addEventListener('click', function (e) {
    // Variable
    const targetElement = e.target.closest('.faqs__list');
    const faqsListRead = document.querySelectorAll('.faqs__list-read');
    const faqsListHeading = document.querySelectorAll('.faqs__list-heading > span');
    const faqsListImg = document.querySelectorAll('.faqs__list-img');

    // Condition to check class
    const isActive = targetElement.querySelector('.faqs__list-read').classList.contains('hidden');

    faqsListRead.forEach(item => item.classList.add('hidden'));
    faqsListHeading.forEach(item => item.classList.remove('heading-modify'));
    faqsListImg.forEach(item => item.classList.remove('rotate-img'));

    if (targetElement && isActive) {
      targetElement.querySelector('.faqs__list-read').classList.remove('hidden');
      targetElement.querySelector('.faqs__list-heading > span').classList.add('heading-modify');
      targetElement.querySelector('.faqs__list-img').classList.add('rotate-img');
    }
  })

}

toggleList();