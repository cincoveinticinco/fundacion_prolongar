class User < ApplicationRecord
  #belongs_to :genders
  #belongs_to :cities

    def self.getEmail(email)
      select("email")
      User.where('email = ?', email)
    end

    def self.getUser

      User.select('user_name,email,age, genders.gender,current_location, cities.city,departments.department, receive_info, group_concat(sub_module_pages.sub_module_name) as sub_module_name ')
      .joins("inner join genders on genders.id=gender_id")
      .joins("left join cities on cities.id=city_id")
      .joins("left join departments on departments.id = cities.departments_id")
      .joins("left join sub_module_page_has_users on sub_module_page_has_users.user_id=users.id and sub_module_page_has_users.view_module = 1")
      .joins("left join sub_module_pages on sub_module_pages.id=sub_module_page_has_users.sub_module_page_id")
      .group("users.id")

    end

    def self.getUserinfo

      User.select('id,user_name,email,age, gender_id,current_location, city_id,receive_info,created_at,updated_at')

    end


end
