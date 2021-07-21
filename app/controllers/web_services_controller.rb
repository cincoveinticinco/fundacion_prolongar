class WebServicesController < ApplicationController
  before_action :validate_session, only: [:get_module, :get_sub_module, :view_module]
  
  
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
  
  def validate_user

      params[:email] = params[:email].strip if !params[:email].blank? 
      user = User.where('email = ?', params[:email]).where('password = ?', Digest::SHA256.hexdigest(params[:password])).take
      
      if !user.blank?
          token = create_token(user.id)
          if !token.blank?
              render :json => { 
                :msg => "Token creado",
                :token => token
              }
    
          end            
      else
          render :json => { 
            :msg => "Usuario y/o contraseña invalido"
          }
          return false
      end

  end

  def create_token (users_id)

    SessionToken.where('users_id = ?', users_id).destroy_all
    token = Digest::SHA256.hexdigest([Time.now, rand].join)
    session_token = SessionToken.new 
    session_token.token = token
    session_token.users_id = users_id
    session_token.updated_at = Time.now
    session_token.save
    
    return token

  end

  def get_module
    module_page = ModulePage.where('id=?',params[:id]).take
    user_id = @user.id
    sub_module_pages = SubModulePage.getSubmoduleModuleIdUserId(module_page.id,user_id)

    render :json => { 
        :error => false,
        :module_page => module_page,
        :sub_module_pages => sub_module_pages
      }


  end

  def get_sub_module
      user_id = @user.id
      sub_module = SubModulePage.where('id=?',params[:id]).take
      sub_module_page = SubModulePage.getSubmoduleModuleIdUserId(sub_module.module_page_id,user_id).where('sub_module_pages.id=?',sub_module.id).take

      next_sub = SubModulePage.getSubmoduleModuleIdUserId(sub_module.module_page_id,user_id).where('sub_module_pages.id>?',sub_module.id).order('sub_module_pages.id asc').take
      next_submodule = []
      if !next_sub.blank?
        next_submodule.push('id'=>next_sub.id,'locked'=>next_sub.locked,'name_dependences'=>next_sub.name_dependences)
      end

      prev_sub = SubModulePage.getSubmoduleModuleIdUserId(sub_module.module_page_id,user_id).where('sub_module_pages.id<?',sub_module.id).order('sub_module_pages.id asc').take
      prev_submodule = []
      if !prev_sub.blank?
        prev_submodule.push('id'=>prev_sub.id,'locked'=>prev_sub.locked,'name_dependences'=>prev_sub.name_dependences)
      end

      render :json => { 
        :error => false,
        :module_page => sub_module_page,
        :next_submodule => next_submodule,
        :prev_submodule => prev_submodule,
      }
  end

  def view_module
    user_id = @user.id
    sub_module_has_user = SubModulePageHasUser.where('sub_module_page_id=?',params[:sub_module_page_id]).where('user_id=?',user_id).take
    sub_module_has_user = SubModulePageHasUser.new if sub_module_has_user.blank?
    sub_module_has_user.sub_module_page_id = params[:sub_module_page_id]
    sub_module_has_user.user_id = user_id
    sub_module_has_user.view_module = params[:view_module]
    sub_module_has_user.save

    render :json => { 
        :error => false,
        :msgg => 'Cambio Guardado',
      }
    
  end

  def info_register
    
    gender=Gender.all
    department=Department.all.as_json
    city = City.all.as_json
  
    if !department.blank?
        department.each do |dp|
        cityf = city.select{ |p| p['departments_id'] == dp['id']}
        dp['cityf'] = cityf
        end
    end

    render :json => { 
      :gender=> gender,
      :department=> department,
    }
  end

  private

  def validate_session
    session_user = SessionToken.where('token = ?', params[:token]).take
        if !session_user.blank?
            seconds_diff = (Time.current - session_user.updated_at).to_i.abs
            puts seconds_diff
            # inactivity gratter than 20 minutes
          if seconds_diff > 6000
            session_user.destroy
              render :json => { 
                :msg => "Sesion inactiva"
              }
            return nil
          else
            session_user.updated_at = Time.current
            session_user.save
          end
            @user=User.find(session_user.id)
        else
            render :json => { 
              :msg => "Sesion inactiva"
            }
            return nil
            
        end
  end
    
end
