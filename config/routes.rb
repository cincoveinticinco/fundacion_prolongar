Rails.application.routes.draw do
# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'admin/index'
  get 'admin/create_module/:id', to: "admin#create_module"
  get 'admin/delete_module/:id', to: "admin#delete_module"
  get 'admin/sub_module/:id', to: "admin#sub_module"
  get 'admin/create_sub_module/:module_page_id/:id', to: "admin#create_sub_module"
  get 'admin/create_sub_module/:module_page_id', to: "admin#create_sub_module"
  get 'admin/delete_sub_module/:id', to: "admin#delete_sub_module"	
  
  get 'admin/create_home_banner/:id', to: "admin#create_home_banner"
  get 'admin/delete_home_banner/:id', to: "admin#delete_home_banner"
  get 'admin/create_contact/:id', to: "admin#create_contact"

  get 'admin/create_admin/:id', to: "admin#create_admin"
  get 'admin/delete_admin/:id', to: "admin#delete_admin"

  get 'admin/create_menu/:id', to: "admin#create_menu"

  		namespace :admin do
			get :index
			get :create_module
			post :insert_module
			post :insert_sub_module
	      	get :create_home_banner
			post :insert_home_banner
			get :create_contact
			post :insert_contact
			post :upload_file , defaults: { format: 'json' }
			get :create_admin
			post :insert_admin
			get :create_menu
			post :insert_menu
		end

		namespace :web_services do
			post :info_home
		end

		namespace :login do
			get :index
			post :login_admin
			get :logout
		end

end
