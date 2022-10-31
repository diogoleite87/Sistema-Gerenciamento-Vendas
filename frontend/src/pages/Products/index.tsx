import { DashboardContainer } from "../../components/DashBoard/ContentContainer"
import { DashboardContentContainer } from "../../components/DashBoard/Container"
import ProductsContent from "../../components/ProductsContent"

export default function Products() {

    return (
        <DashboardContainer>
            <DashboardContentContainer>
                <ProductsContent />
            </DashboardContentContainer>
        </DashboardContainer>
    )
}