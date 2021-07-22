class User < ApplicationRecord
  #belongs_to :genders
  #belongs_to :cities

    def self.getEmail(email)
      select("email")
      User.where('email = ?', email)
    end

    def self.getUser

      User.select('user_name,email,age, genders.gender,current_location, cities.city, receive_info')
      .joins("inner join genders on genders.id=gender_id")
      .joins("inner join cities on cities.id=city_id")

    end

end
