
import { getCurrentUser } from "@/lib/session";
import ProductPage from "@/components/productPage/ProductPage";



export default async function Page() {
    const user = await getCurrentUser()
    return (
        <ProductPage/>
    )
}
