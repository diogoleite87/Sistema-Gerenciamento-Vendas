import { Api } from "../providers";
import { Maker } from "../schemas";

const getAllMakers = () => Api.get<Maker[]>('/makers');
const createMaker = (name: string) => Api.post(`/makers/${name}`);

export const MakerService = {

    getAllMakers,
    createMaker
}