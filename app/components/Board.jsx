
import React from "react";

export const Board = ({ squares, onClick }) => {
	return (
		<div>
			<div className="grid grid-cols-3 gap-3">
				{squares.map((value, index) => (
					<div
						key={index}
						className="w-28 h-28 p-4 text-xl border-2 rounded-lg border-teal-900 flex items-center justify-center cursor-pointer hover:bg-gray-500"
						onClick={()=>onClick(index)}
					>
						{value}
					</div>
				))}
			</div>
		</div>
	);
};
