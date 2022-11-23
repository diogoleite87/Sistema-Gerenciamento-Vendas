import { DashboardContentContainer } from "../../components/DashBoard/Container";
import { DashboardContainer } from "../../components/DashBoard/ContentContainer";
import SoldsContent from "../../components/SoldsContent";

export default function Solds() {

    return (
        <DashboardContainer>
            <DashboardContentContainer>
                <SoldsContent />
            </DashboardContentContainer>
        </DashboardContainer>
    )
}