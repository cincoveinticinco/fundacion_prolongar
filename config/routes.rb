Rails.application.routes.draw do
  get 'admin/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  begin
  		namespace :admin do
			get :index
		end
  end
end
