class CreateSubModulePageHasUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :sub_module_page_has_users do |t|
      t.references :sub_module_page, null: false, foreign_key: {on_delete: :cascade, on_update: :cascade}
      t.references :user, null: false, foreign_key: {on_delete: :cascade, on_update: :cascade}
      t.boolean :view_module

      t.timestamps
    end
  end
end
