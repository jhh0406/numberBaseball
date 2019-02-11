let list = [0,1,2,3,4,5,6,7,8,9];
let number = [];
let count = 0;
let strike = 0;
let ball = 0;
let guess = document.querySelector(".guess");
let btn = document.querySelector(".btn");
let logList = document.querySelector(".logList");

for (var i = 0; i < 4; i++) {
  let select = Math.floor(Math.random() * list.length);
  number[i] = list.splice(select, 1)[0];
}

btn.addEventListener("click", handleBtn);

function handleBtn() {
  let input = guess.value;
  let inputArray = input.split('');
  const log = document.createElement("p");
  const result = document.createElement("p");
  if (input !== '') {
    strike = 0;
    ball = 0;
    count++;
    for (let j = 0; j < 4; j++) {
      for(let k = 0; k < 4 ; k++) {
        if (number[j] == input[k]) {
          if (j === k) {
            strike++;
          } else {
            ball++;
          }
          break;
        }
      }
    }
    if (strike === 4) {
      logList.appendChild(log);
      log.innerHTML = `홈런!! ${count}번 만에 맞추셨습니다!`;
      logList.appendChild(result);
      result.innerHTML = "새 게임을 시작하시려면 재시작을 눌러주세요!";
      btn = document.querySelector(".btn2");
    } else if (count > 10) {
      logList.appendChild(log);
      log.innerHTML = `기회가 없습니다. 정답은 ${number}입니다.`;
      logList.appendChild(result);
      result.innerHTML = "새 게임을 시작하시려면 재시작을 눌러주세요!";
      btn = document.querySelector(".btn2");
    } else {
      logList.appendChild(log);
      log.innerHTML = `${input}은 ${strike}스트라이크 ${ball}볼입니다.`;
    }
  } else {
    alert("숫자를 입력해 주세요");
  }
  guess.value = '';
}
