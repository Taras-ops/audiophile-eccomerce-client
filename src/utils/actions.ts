'use server';

const params = {
  headers: {
    Authorization: 'Bearer ' + process.env.STRAPI_API_TOKEN,
  },
};

export async function getHomePage() {
  try {
    const response = await fetch(
      process.env.STRAPI_API_URL +
        '/api/home-pages/1?populate[0]=Hero&populate[1]=Hero.product&populate[2]=ProductLg.product&populate[3]=ProductLg.ImagePreview&populate[4]=ProductGrid.product&populate[5]=ProductGrid.ImagePreview&populate[6]=ProductBig.product&populate[7]=ProductBig.ImagePreview',
      params
    );

    const { data } = await response.json();

    return data;
  } catch (err) {
    console.log('err', err);
    throw new Error('An error occurred while getting data');
  }
}

export async function getCategories() {
  try {
    const response = await fetch(
      process.env.STRAPI_API_URL + '/api/categories/?populate=*',
      params
    );
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.log('err', err);
    throw new Error('An error occurred while getting data');
  }
}

export async function getCategoryProducts(categorySlug: string, page: number) {
  try {
    const response = await fetch(
      process.env.STRAPI_API_URL +
        `/api/products?[filters][category][name]=${categorySlug}&populate=*&sort[0]=new:desc&pagination[withCount]=true&pagination[pageSize]=2&pagination[page]=${page}`,
      params
    );

    const data = await response.json();

    return data;
  } catch (err) {
    console.log('err', err);
    throw new Error('An error occurred while getting category products data');
  }
}

export async function getProduct(slug: string) {
  try {
    const response = await fetch(
      process.env.STRAPI_API_URL +
        `/api/products?filters[slug]=${slug}&populate=*`,
      params
    );
    const { data } = await response.json();

    return data?.[0];
  } catch (err) {
    console.log('err', err);
    throw new Error('An error occurred while getting category products data');
  }
}
