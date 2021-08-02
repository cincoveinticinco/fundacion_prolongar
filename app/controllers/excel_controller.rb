class ExcelController < ApplicationController

    def download

        @user = User.getUser

        time=Time.new
      
        respond_to do |format|

          time=Time.new
          date_report = time.strftime('%F_%I:%M:%S%p')
          name_report = "registros_#{date_report}.xlsx"
         
            format.xlsx { 
                        response.headers["Content-Type"] = "xlsx; charset=UTF-8; header=present"
                        response.headers["Content-Disposition"] = 'attachment; filename="'+name_report+'"'
                        render :template => "excel/registers.xlsx"
           }
         format.html
       end
   
         
     end

end
