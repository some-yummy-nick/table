import { sortBy } from "lodash";

export const LENGHT = {
	"small": 32,
	"big": 1000
};
export const SORTS = {
	ID: list => sortBy(list, "id"),
	FIRST_NAME: list => sortBy(list, "firstName"),
	LAST_NAME: list => sortBy(list, "lastName"),
	EMAIL: list => sortBy(list, "email"),
	PHONE: list => sortBy(list, "phone"),
};
