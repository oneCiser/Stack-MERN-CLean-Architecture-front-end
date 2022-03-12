import IPersistence from "./persistence";


export default interface IQueryProduct extends IPersistence {
    name?: string;
    price?: number;
    description?: string;
    photo?: string;
}