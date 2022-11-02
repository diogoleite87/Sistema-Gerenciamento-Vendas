import { Api } from "../providers";
import { Maker } from "../schemas";

const getAllMakers = () => Api.get<Maker[]>('/makers');

export const MakerService = {

    getAllMakers

}