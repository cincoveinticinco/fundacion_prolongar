class User < ApplicationRecord
  #belongs_to :genders
  #belongs_to :cities

    def self.getEmail(email)
      select("email")
      User.where('email = ?', email)
    end

    def self.getUser

      User.select('user_name,email,age, genders.gender,current_location, cities.city, receive_info, sub_module_page_has_users.view_module')
      .joins("inner join genders on genders.id=gender_id")
      .joins("inner join cities on cities.id=city_id")
      .joins("left join sub_module_page_has_users on sub_module_page_has_users.user_id=users.id")
      .joins("left join sub_module_pages on sub_module_pages.id=sub_module_page_has_users.sub_module_page_id")

    end

end
