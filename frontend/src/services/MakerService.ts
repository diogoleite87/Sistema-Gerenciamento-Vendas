import { Api } from "../providers";
import { Maker } from "../schemas";

const getAllMakers = () => Api.get<Maker[]>('/makers');
const createMaker = (name: string) => Api.post(`/makers/${name}`);
const deleteMaker = (name: string) => Api.delete(`/makers/${name}`);

export const MakerService = {

    getAllMakers,
    createMaker,
    deleteMaker
}