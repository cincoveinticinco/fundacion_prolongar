class CreateMenuContents < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_contents do |t|
      t.string :name_page
      t.text :texto
      t.string :image
      t.timestamps
    end
  end
end
