export interface AuthType {
  billing_address: {
    country: string;
    town: string;
    street_address: string;
    extra_address: string;
    state: string;
    zip: string;
  };
  create_account_limit: number;
  create_plant_limit: number;
  create_post_limit: number;
  created_at: string;
  created_by: string;
  email: string;
  followers: string[];
  hashtags: string[];
  name: string;
  order_list: string[];
  password: string;
  permission: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: string[];
  _id: string;
}

export interface RegisterType {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirm_password: string;
}
export interface LoginResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface HeroMockType{
id:number;
title: string;
subTitle: string;
description: string;
buttonText: string;
big_img_url: string;
small_img_url: string;
}

export  interface CategoryType{
  count: number;
  created_at: string;
  created_by:string;
  route_path:string;
  title:string;
  _id:string;
}

export interface QueryType<T>{
  isLoading: boolean;
  isError: boolean;
  data?:T;
}