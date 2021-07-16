class WebServicesController < ApplicationController

    def info_home
        
        home_banner=HomeBanner.all.order("order_banner")
        menu_content=MenuContent.all
        module_page=ModulePage.all
        contact=Contact.all
        

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


        params[:email] = params[:email].strip
        

        user = User.where('id = ?', params[:id]).take 
        user = User.new if user.blank? 
        user.user_name = params[:user_name]
        user.password = Digest::SHA256.hexdigest(params[:password]) if !params[:password].blank?
        user.email = params[:email]
        user.age = params[:age]
        user.gender_id = params[:gender_id]
        user.current_location = params[:current_location]
        user.city_id = params[:city_id]
        user.receive_info = params[:receive_info]

        check_email = User.getEmail(params[:email])
        check_email = check_email.where('id not in (?)',params['id']) if !params['id'].blank?           


      if !check_email.blank?

          render :json => {
            :error => true,
            :msg => "Correo ya existe"
          }

      else

          user.save

          render :json => {
            :error => false,
            :msg => user
          }
      end
    end


    def info_user

      id = params[:id]
      user = User.all.where( 'id = ?' , id ).take

      render :json => { 
        :user => user
      }

  end
    
end
