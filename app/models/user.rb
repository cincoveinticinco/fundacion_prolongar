class User < ApplicationRecord
  belongs_to :genders
  belongs_to :cities
end
