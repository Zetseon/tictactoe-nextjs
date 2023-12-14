import React from "react";
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
const Navbar = ({ handleTheme, isDarkMode }) => {
	return (
		<div className="flex items-center justify-between p-4">
			<div className="flex items-center gap-2">
				<VideogameAssetOutlinedIcon className="icon"/>
				<h2>Tic Tac Toe</h2>
			</div>
			<div className="flex items-center gap-8 mr-8">
				<a href="https://github.com/Zetseon?tab=repositories" target="_blank"><FolderOutlinedIcon  /></a>
				<a href="https://github.com/Zetseon" target="_blank"><GitHubIcon  /></a>
			</div>
			<div className="flex items-center gap-2 mr-8">
				<button onClick={() => handleTheme()}>
					{isDarkMode ? (
						<LightModeOutlinedIcon className="icon"/>
					) : (
						<BedtimeOutlinedIcon className="icon"/>
					)}
				</button>
			</div>
		</div>
	);
};

export default Navbar;
