import { Api } from "../providers";
import { Color } from "../schemas";

const getAllColors = () => Api.get<Color[]>('/colors');
const createColor = (name: string) => Api.post(`/colors/${name}`);
const deleteColor = (name: string) => Api.delete(`/colors/${name}`);

export const ColorService = {

    getAllColors,
    createColor,
    deleteColor,
}