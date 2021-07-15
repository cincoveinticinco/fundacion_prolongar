class CreateCities < ActiveRecord::Migration[6.0]
  def change
    create_table :cities do |t|
      t.string :name_city
      t.references :departments, null: false, foreign_key: true

      t.timestamps
    end
  end
end
