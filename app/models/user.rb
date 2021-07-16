class User < ApplicationRecord
  #belongs_to :genders
  #belongs_to :cities

    def self.getEmail(email)
      select("email")
      User.where('email = ?', email)
    end

end
