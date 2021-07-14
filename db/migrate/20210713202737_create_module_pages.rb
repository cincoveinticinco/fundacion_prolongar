class CreateModulePages < ActiveRecord::Migration[6.0]
  def change
    create_table :module_pages do |t|
      t.string :name_module
      t.string :imagen_min
      t.text :description
      t.string :img_banner
      t.timestamps
    end
  end
end
