import { Api } from "../providers";
import { Variation } from "../schemas";

const getAllVariation = () => Api.get<Variation[]>(`/variations`);
const getVariation = (nameMaker: string) => Api.get<Variation[]>(`/variations/${nameMaker}`);

export const VariationService = {

    getAllVariation,
    getVariation

}