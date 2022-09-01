import './style.css';

import {
  result,
  getScores,
  displayResult
} from "./modules/api.js";

const form = document.querySelector('.inputs');
const refreshBtn = document.querySelector('.btn1')

getScores();

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();

  result.innerHTML = '';
  getScores();
});

form.addEventListener('submit' , (e) => {
  e.preventDefault();
  const userNameValue = document.querySelector(".user-name-field").value;
  const userScoreValue = document.querySelector(".user-score-field").value;

  displayResult(userNameValue, userScoreValue)

  form.reset();
})