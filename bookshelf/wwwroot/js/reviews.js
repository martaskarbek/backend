const reviewTemplate = document.querySelector("#review-template");
const container = document.querySelector(".containerTemp");

(() => {
    getReviews();
})();

function getReviews() {
    fetch(`https://localhost:5001/reviews`, {
        mode: 'no-cors'})
        .then(function (response) {
            return response.json();
        })
        .then(function (reviews) {
            for (let reviews of response.reviews) {
                console.log(reviews.userReview);
            }
            insertReviews(reviews);
        })
}


function insertReviews(reviews) {
    reviews.forEach(review => {
        const clone = document.importNode(reviewTemplate.content, true);
        clone.querySelector('.date').textContent = review.userReview;
        container.appendChild(clone);
    });
}
