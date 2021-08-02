class UserMailer < ApplicationMailer

    def recovery_email(user)
        @user = user
        @url  = URL_FRONT+"/recovery_password/"+@user.recovery_password
        mail(to: @user.email, subject: 'Recuperación de Contraseña')      
    end

end
