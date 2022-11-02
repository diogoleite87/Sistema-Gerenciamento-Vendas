import { Api } from "../providers";
import { Variation } from "../schemas";

const getAllVariation = () => Api.get<Variation[]>(`/variations`);
const getVariation = (nameMaker: string) => Api.get<Variation[]>(`/variations/${nameMaker}`);
const createVariation = (nameMaker: string, nameVariation: string) => Api.post(`/variations/${nameMaker}/${nameVariation}`);
const deleteVariation = (nameVariation: string) => Api.delete(`/variations/${nameVariation}`);

export const VariationService = {

    getAllVariation,
    getVariation,
    createVariation,
    deleteVariation
}