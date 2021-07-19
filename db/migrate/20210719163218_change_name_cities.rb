class ChangeNameCities < ActiveRecord::Migration[6.0]
  def change

    rename_column :cities, :name_city, :city

  end
end
