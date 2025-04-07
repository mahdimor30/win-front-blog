import { client } from "@/api";



export const getAllCategories = async () => {
    try {
        const response = await client.GET("/categories", {
            params: {
                // query: {
                //     populate: ["cover", "categories", "authorsBio"],
                // },
            },
        });
        if (response.response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error, "error");
    }
};
