"use client";
import React, { useState, useEffect } from "react";
import { Board } from "./Board";

const Game = ({ isDarkMode }) => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [player, setPlayer] = useState(true);
	const [winner, setWinner] = useState(null);
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	const handleRestart = () =>{
		setSquares(Array(9).fill(null))
		setPlayer(true)
		setWinner(null)
	}
	const handleClick = (i) => {
		if (squares[i] || winner) {
			return;
		}

		const newSquare = squares.slice();
		newSquare[i] = player ? "X" : "O";
		setSquares(newSquare);
		setPlayer(!player);
	};
	const checkWinner = () => {
		for (let i = 0; i < winningCombinations.length; i++) {
			const [a, b, c] = winningCombinations[i];
			console.log(a);
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				setWinner(squares[a]);

				return;
			}
		}
	};
	useEffect(() => {
		checkWinner();
	}, [squares]);
	return (
		<div className="flex flex-col items-center p-32">
			<h1 className="mb-10">
				{winner
					? `${winner} is the winner!`
					: player
					? "Player One (X)"
					: "Player Two (O)"}
			</h1>
			<Board squares={squares} onClick={handleClick} />
			<div className="mt-10">
				<button class="flex items-center border-2 border-teal-900 rounded-lg p-4 hover:bg-teal-800 hover:text-slate-200" onClick={() => handleRestart()}>
					<p>Restart</p>
					<svg
						class="w-6 h-6 ml-2"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Game;
