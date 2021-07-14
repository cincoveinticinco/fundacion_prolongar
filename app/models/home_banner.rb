class HomeBanner < ApplicationRecord

    def self.getAllBanner()
		HomeBanners.select('id,image')
	end

    
end
