class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :direccion
      t.string :edificio
      t.string :ciudad
      t.string :telefono
      t.string :email

      t.timestamps
    end
  end
end
