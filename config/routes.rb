Rails.application.routes.draw do
# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'admin/index'
  get 'admin/create_module/:id', to: "admin#create_module"
  get 'admin/delete_module/:id', to: "admin#delete_module"
  post 'admin/new_banner', to:"admin#create_home_banner"
  post 'admin/new_contacts', to:"admin#create_contacts"

  		namespace :admin do
			get :index
			get :create_module
			post :insert_module
	      	post :create_home_banner
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
