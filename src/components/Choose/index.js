import React from "react";
import { Button } from "../Button";

export const Choose = ({onClick}) =>
	<div className="center">
		<p>Выберите объем данных для загрузки</p>
		<Button onClick={() => onClick("small")}>маленький</Button>{" "}
		<Button onClick={() => onClick("big")}>большой</Button>
	</div>;
