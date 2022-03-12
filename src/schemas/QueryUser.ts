import IPersistence from "./persistence";
export default interface IQueryUser extends IPersistence {
    username?: string;
    password?: string;
}