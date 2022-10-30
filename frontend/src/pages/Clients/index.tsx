import { DashboardContainer } from "../../components/DashBoard/ContentContainer"
import { DashboardContentContainer } from "../../components/DashBoard/Container"
import ClientsContent from "../../components/ClientsContent"

export default function Clients() {

    return (
        <DashboardContainer>
            <DashboardContentContainer>
                <ClientsContent />
            </DashboardContentContainer>
        </DashboardContainer>
    )
}