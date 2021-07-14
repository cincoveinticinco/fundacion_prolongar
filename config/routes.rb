Rails.application.routes.draw do
# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'admin/index'
  get 'admin/create_module/:id', to: "admin#create_module"
  get 'admin/delete_module/:id', to: "admin#delete_module"
  get 'admin/create_home_banner/:id', to: "admin#create_home_banner"
  get 'admin/delete_home_banner/:id', to: "admin#delete_home_banner"
  get 'admin/create_contact/:id', to: "admin#create_contact"


  post 'admin/new_contacts', to:"admin#create_contacts"

  		namespace :admin do
			get :index
			get :create_module
			post :insert_module
	      	get :create_home_banner
			post :insert_home_banner
			get :create_contact
			post :insert_contact
		end

end
