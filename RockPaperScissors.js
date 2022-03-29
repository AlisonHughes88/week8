const game = () => {
	
	let computer = 0;
	let player = 0;
	let moves = 0;


	// Function to
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors']
		
		// Function to start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				
				
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				// Function to check who wins
				winner(this.innerText,computerChoice)
				
				// Calling gameOver function after 5 moves
				if(moves){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// Function to decide winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerBoard = document.querySelector('.p-count');
		const computerBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Tie'
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'Computer Won';
				computer++;
				computerBoard.textContent = computerScore;

			}else{
				result.textContent = 'You Won'
				player++;
				playerScoreBoard.textContent = player;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'Computer Won';
				computer++;
				computerScoreBoard.textContent = computer;
			}else{
				result.textContent = 'You Won';
				player++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'Computer Won';
				computer++;
				computerScoreBoard.textContent = computer;
			}else{
				result.textContent = 'You Won';
				player++;
				playerBoard.textContent = playerScore;
			}
		}
	}
	// Calling playGame function inside game
	playGame();
	
}

// Calling the game function
game();
