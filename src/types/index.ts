export type ProductType = {
  id: number;
  attributes: {
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
    description: string;
    features: string;
    name: string;
    new: boolean;
    price: number;
    slug: string;
    imageDesktop: ImageType;
    imageTablet: ImageType;
    imageMobile: ImageType;
    units: {
      data: [UnitItemType];
    };
    gallery: {
      data: [
        {
          attributes: {
            url: string;
            width: number;
            height: number;
          };
        }
      ];
    };
    others: [{}];
  };
};

export type ImageType = {
  data: {
    attributes: {
      url: string;
      width: number;
      height: number;
    };
  };
};

export type UnitItemType = {
  id: number;
  attributes: {
    name: string;
    quantity: number;
  };
};

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: ImageType;
};

export type PaginationType = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
