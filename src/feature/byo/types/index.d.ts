export type UserType = {
    name: string;
    id?: string | number;
    email: string;
  };
  
  export type TypeFreelancer = {
    name: string;
  
    title: string;
  
    avatar_url: string;
  
    public_cv_url: string;
  
    hourly_rate: number;
  };
  
  export type TypeTtestimonial = {
    id: number;
    full_name: string;
    position: string;
    company_name: string;
    company_logo_url: string;
    background_image_url: string;
    text: string;
    user_type: 'client' | 'freelancer';
    avatar_url: string;
    avatar_data_url: string;
    freelancer: TypeFreelancer;
    avatar_bg_color:string
  };
  
  export type UserTypeTtestimonial  ='client'|'freelancer'
  