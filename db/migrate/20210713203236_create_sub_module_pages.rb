class CreateSubModulePages < ActiveRecord::Migration[6.0]
  def change
    create_table :sub_module_pages do |t|
      t.references :module_page, null: false, foreign_key: {on_delete: :cascade, on_update: :cascade}
      t.string :sub_module_name
      t.text :description
      t.string :link
      t.text :content

      t.timestamps
    end
  end
end
