import { client } from "@/api";

export const getMeta = async () => {
  try {
    const res = await client.GET("/global", {
      params: {
        query: {
          populate: [
            "metadata",
            "favicon",
            // "navbar.links",
            // "navbar.navbarLogo.logoImg",
            // "footer.footerLogo.logoImg",
            // "footer.menuLinks",
            // "footer.legalLinks",
            // "footer.socialLinks",
            // "footer.categories",
          ],
        },
      },
    });

    if (res.response.status === 400) {
      return {
        data: null,
        error: res.error
      };
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};
