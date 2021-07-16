class LoginController < ApplicationController

	def index
		
	end

	def login_admin
		admin = UserAdmin.where('name=?',params[:name]).where('password=?',Digest::SHA256.hexdigest(params[:password])).take

		if !admin.blank?
			 session[:user_id] = admin.id
			 redirect_to '/admin/index'
		else
			flash[:msg]='Usuario o password incorrectos'
      		redirect_to '/login/index'
		end
	end


	def logout
    	session.clear
	    redirect_to '/login/index'
	end
end
