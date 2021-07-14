Rails.application.routes.draw do
  get 'admin/index'
  post 'admin/new_banner', to:"admin#create_home_banner"
  post 'admin/new_contacts', to:"admin#create_contacts"


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  begin
  		namespace :admin do
			get :index
      get :create_home_banner
      get :delete_home_banner
      get :new_banner
      get :list_home_banner
      get :create_contacts
      get :delete_contacts
      get :new_contacts
      get :list_contacts

      
     
		end
  end
end
