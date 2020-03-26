import React from "react";
import { Loading } from "../Loading";

export const WithLoading = (Component) => ({ isLoading, ...rest }) =>
	<div>
		{
			isLoading
				? <Loading/>
				: <Component {...rest} />
		}
	</div>;
