export const result = document.querySelector('.game-results');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bCZiLBf3yfagWa0nrgwf/scores/';

const addScore = (data) => {
  const resultDiv = document.createElement('div');
  resultDiv.classList.add('recent-score');

  data.forEach((userdata) => {
    resultDiv.innerHTML += `<p>${userdata.user}: ${userdata.score}</p>`;

    result.appendChild(resultDiv);
  });
};

export const getScores = async () => {
  const options = {
    method: 'GET',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  };

  await fetch(url, options)
    .then((res) => res.json())
    .then((data) => addScore(data.result));
};

export const displayResult = async (userNameValue, userScoreValue) => {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      user: userNameValue,
      score: userScoreValue,
    }),
  };

  await fetch(url, options)
    .then((response) => response.json());

  result.innerHTML = '';

  getScores();
};

// const url =
//   "";

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// result = () => {};
