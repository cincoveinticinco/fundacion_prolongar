class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :password
      t.string :email
      t.string :age
      t.references :gender, null: false, foreign_key: true
      t.boolean :current_location
      t.references :city, null: false, foreign_key: true
      t.boolean :receive_info

      t.timestamps
    end
  end
end
