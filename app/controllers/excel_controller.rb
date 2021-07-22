class ExcelController < ApplicationController

    def download

        @user = User.getUser
   
        
        respond_to do |format|
         
            format.xlsx { 
                        response.headers["Content-Type"] = "xlsx; charset=UTF-8; header=present"
                        response.headers["Content-Disposition"] = "attachment; filename=registros.xlsx"
                        render :template => "excel/registers.xlsx"
           }
         format.html
       end
   
         
     end

end
