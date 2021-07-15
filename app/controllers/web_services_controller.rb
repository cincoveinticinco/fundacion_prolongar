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

    
    
end
