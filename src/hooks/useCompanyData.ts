import GET_COMPANY_DATA from "@/graphql/queries/getCompanyData";
import client from "@/lib/apollo-client";

export default async function getCompanyData() {
    try {
        const { data } = await client.query({ query: GET_COMPANY_DATA });
        console.info("Successfully imported company data.");
        return {
            companyData: data.companyData,
            error: null
        };
    } catch (error) {
        console.error(error);
        return {
            companyData: null,
            error: error
        };
    }
}