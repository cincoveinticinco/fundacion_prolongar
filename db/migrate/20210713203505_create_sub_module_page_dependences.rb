class CreateSubModulePageDependences < ActiveRecord::Migration[6.0]
  def change
    create_table :sub_module_page_dependences do |t|
      t.references :sub_module_page, null: false, foreign_key: {on_delete: :cascade, on_update: :cascade}
      t.bigint :dependence_id

      t.timestamps
    end
  end
end
