class WebServicesController < ApplicationController

    def info_home
        
        home_banner=HomeBanner.all.order("order_banner")
        menu_content=MenuContent.all
        module_page=ModulePage.all
        contact=Contact.all
        @user=User.all

        render :json => { 
          :home_banner=> home_banner,
          :menu_content=> menu_content,
          :module_page=> module_page,
          :contact=> contact
        }

    end


    def info_page

        id_page = params[:id_page]
        menu_content=MenuContent.all.where( 'id = ?' , id_page ).take

        render :json => { 
          :menu_content=> menu_content
        }

    end

    def create_user
      @user  = User.where('id=?',params['id']).take if !params['id'].blank?
    end
  
    def insert_user
  
        imagen_min = nil
        img_banner = nil
        imagen_min = save_file(params[:imagen_min],'img_modules') if !params[:imagen_min].blank?
        img_banner = save_file(params[:img_banner],'img_modules') if !params[:img_banner].blank?
  
  
        user = User.where('id=?',params['id']).take
        user = User.new if user.blank? 
        user.user_name = params[:user_name]
        user.password = Digest::SHA256.hexdigest(params[:password]) if !params[:password].blank?
        user.email = params[:email]
        user.age = params[:age]
        user.genders_id = params[:genders_id]
        user.current_location = params[:current_location]
        user.cities_id = params[:cities_id]
        user.receive_info = params[:receive_info]
        user.save 
  
        flash[:msg]='Usuario Creado' if params['id'].blank?
        flash[:msg]='Modulo Editado' if !params['id'].blank?
         redirect_to '/admin/index'
      
    end


    
    
end
