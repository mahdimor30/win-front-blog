import { client } from "@/api";



export const getAllArticle = async () => {
  try {
    const response = await client.GET("/articles", {
      params: {
        query: {
          populate: ["cover", "categories", "createdBy"],
        },
      },
    });

    console.log(response, "response");

    if (response.response.status === 200) {
      console.log(response.data, "response");

      return response.data;
    }
  } catch (error) {
    console.log(error, "error");
  }
};

export const getRecentArticles = async () => {
  try {
    const response = await client.GET("/articles", {
      params: {
        query: {
          populate: ["cover", "categories"],
          sort: {
            createdAt: "desc",
          },
          pagination: {
            start: 0,
            limit: 5,
          },
        },
      },
    });

    if (response.response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error, "error");
  }
};

export const getArticleBySlug = async (slug: string) => {
  try {
    const response = await client.GET("/article/{slug}", {
      params: {
        path: {
          slug,
        },
        query: {
          populate: ["createdBy", "cover", "blocks", "categories"],
        },
      },
    });
    if (response.response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error, "error");
    return null;
  }
};
