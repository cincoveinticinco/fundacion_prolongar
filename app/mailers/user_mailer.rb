class UserMailer < ApplicationMailer

    def recovery_email(user,url_back)
        @user = user
        @url  = URL_FRONT+"/recovery_password/"+@user.recovery_password
        @url_back = url_back
        mail(to: @user.email, subject: 'Recuperación de Contraseña')      
    end

end
