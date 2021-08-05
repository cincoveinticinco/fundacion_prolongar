class MailerController < ApplicationController

    def validate_email

        params[:email] = params[:email].strip
        user = User.where('email = ?', params[:email]).take
          if !user.blank?
              url_back = request.base_url
              token = Digest::SHA256.hexdigest([Time.now, rand].join)
              user.recovery_password = token
              user.updated_at = Time.now
              user.save
              UserMailer.recovery_email(user,url_back).deliver_later
                           
              render :json => {
              :error => false,
              :msg => "Correo Enviado"
              }
          else
      
              render :json => {
              :error => true,
              :msg =>  "correo no existe"
              }

          end
  
    end

    def recovery_password

        recovery_password = User.where('recovery_password = ?', params[:recovery_password]).take
        if !recovery_password.blank?
            seconds_diff = (Time.current - recovery_password.updated_at).to_i.abs
            puts seconds_diff
            # inactivity gratter than 20 minutes
            if seconds_diff > 6000
                render :json => { 
                :msg => "token expiro"
                }
            return nil
            else
            recovery_password.password = Digest::SHA256.hexdigest(params[:password]) if !params[:password].blank?
            recovery_password.updated_at = Time.current
            recovery_password.save

            render :json => { 
                :msg => "contraseña cambiada con exito",
                :error => false,
                }
            return nil
            end
            @user=User.find(recovery_password.id)
        else
            render :json => { 
                :msg => "Token incorrecto",
                :error => true,
            }
            return nil
            
        end

    end


end
