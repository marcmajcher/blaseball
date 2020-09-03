
function eatPeanuts() {
  const interval = setInterval(() => {
    const button = document.querySelector('.Navigation-User button');
    const count = parseInt(button.firstChild.lastChild.textContent);
    if (count > 0) {
      console.log(`${count} peanuts left.`);
      button.click();
    }
    else {
      console.log('All peanuts eaten.', count);
      clearInterval(interval);
    }
  }, 3000 + Math.random() * 1000);
  return interval;
}


function getPct(team) {
  return parseInt(team.querySelector('.Bet-Form-Team-Percentage').textContent.slice(0, -1));
}

function betAllMax() {
  const betButtons = document.querySelectorAll('.GameWidget-Button a');

  let n = 0;
  const interval = setInterval(() => {
    betButtons[n].click();
    setTimeout(() => {
      const betForm = document.querySelector('.Bet-Form');
      const teams = betForm.querySelectorAll('.Bet-Form-Team');

      if (getPct(teams[0]) < getPct(teams[1])) {
        teams[1].click()
      }
      else {
        teams[0].click()
      }

      betForm.querySelector('.Bet-Form-Inputs-Amount-MaxBet').click();
      betForm.querySelector('.Bet-Submit').click();
    }, 1000);

    if (++n === betButtons.length) {
      clearInterval(interval);
    }
  }, 2000);
}

