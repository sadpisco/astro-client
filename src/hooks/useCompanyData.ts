import GET_COMPANY_DATA from "@/graphql/queries/getCompanyData";
import client from "@/lib/apollo-client";
import lodashPkg from "lodash";

const { isNull } = lodashPkg;

export default async function getCompanyData() {
    try {
        const { data } = await client.query({ query: GET_COMPANY_DATA });

        if (isNull(data.companyData)) {
            console.info("No company data has been found.");
            return {
                companyData: null,
                error: null
            }
        }
        return {
            companyData: data.companyData,
            error: null
        };
    } catch (error) {
        console.error("Error fetching company data. (useCompanyData.ts)", error);
        return {
            companyData: null,
            error: error
        };
    }
}